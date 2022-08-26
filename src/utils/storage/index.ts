import { isNil } from "lodash-unified";
// todo: 支持加密，过期，loaclstorage和sessionstorage选择
const addPrefix = (key: string) => {
  const prefix = "__ADMIN_";
  return prefix + key;
};
const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(addPrefix(key)));
};
const setItem = (key: string, value: JSONValue) => {
  isNil(value) ? removeItem(key) : localStorage.setItem(addPrefix(key), JSON.stringify(value));
};
const removeItem = (key: string) => {
  localStorage.removeItem(addPrefix(key));
};
const clear = () => {
  localStorage.clear();
};

export { getItem, setItem, removeItem, clear };
