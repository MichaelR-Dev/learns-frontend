import { useState } from "react";

type props = {
    keyName: any,
    defaultValue: any
}

export const useLocalStorage = (props: props) => {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(props.keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(props.keyName, JSON.stringify(props.defaultValue));
        return props.defaultValue;
      }
    } catch (err) {
      return props.defaultValue;
    }
  });

  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(props.keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  
  return [storedValue, setValue];
};