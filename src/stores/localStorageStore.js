import { writable as svelteWritable, get } from "svelte/store";

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
    if(process.browser) {
      localStorage.setItem(key, stringifiedValue);
    }
  }
  
  if(process.browser) {
    // get the last value from localStorage
    const json = localStorage.getItem(key);
    let parsedJSON = null;
    try {
      parsedJSON = JSON.parse(json);
    } catch(err) {
      // Something weird is happening
      console.error(`
        Failed to parse store "${key}".\n
        Expected valid JSON, Found:\n
        ${json}
      `);
    }

    // use the value from localStorage if it exists
    if (parsedJSON) {
      setValue(parsedJSON);
    } else {
      setValue(initialValue);
    }
  }

  // return an object with the same interface as svelte's writable()
  return {
    // capture set and write to localStorage
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
