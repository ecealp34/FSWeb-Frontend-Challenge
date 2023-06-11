import { useState } from "react";

export default function useLocalStorage(key, previousState) {
  const [value, setValue] = useState(() => {
  
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue === null) {
     
      localStorage.setItem(key, JSON.stringify(previousState));
      console.log(previousState);
      return defaultValue;
    } else {
      
      console.log(localValue);
      return localValue;
    }
  });
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
