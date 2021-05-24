import { writable } from './localStorageStore';

const user = writable('user', null);

export default user;