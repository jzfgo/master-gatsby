import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    let { type, name, value } = e.target;

    if (type === 'number') {
      value = parseInt(value, 10);
    }

    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [name]: value,
    });
  }

  return { values, updateValue };
}
