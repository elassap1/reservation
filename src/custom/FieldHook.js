import { useState } from "react"

export const useField = (type) => {

  let [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return {type, value, handleChange}
}