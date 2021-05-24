import { writable as svelteWritable, get } from "svelte/store";
import Cookies from 'js-cookie';

export function writable(key, initialValue) {
  // create an underlying store
  const store = svelteWritable(initialValue);
  const { subscribe, set } = store;

  function setValue(value) {
    let stringifiedValue;
    try {
      stringifiedValue = JSON.stringify(value);
    } catch(err) {
      // Something weird is happening
      console.error(`
        Failed to set store "${key}".\n
        Expected valid JSON, Found:\n
        ${value}
      `);
      return;
    }

    set(value);
    Cookies.set(key, stringifiedValue);
  }
  
  // get the last value from cookies
  const json = Cookies.get(key);
  let parsedJSON = null;
  try {
    parsedJSON = JSON.parse(json);
  } catch {
    // Weird
  }

  // use the value from cookies if it exists
  if (parsedJSON) {
    setValue(parsedJSON);
  } else {
    setValue(initialValue);
  }

  // return an object with the same interface as svelte's writable()
  return {
    // capture set and write to cookies
    set(value) {
      setValue(value);
    },
    // capture updates and write to localStore
    update(cb) {
      const value = cb(get(store));
      this.set(value);
    },
    // punt subscriptions to underlying store
    subscribe,
  };
}
