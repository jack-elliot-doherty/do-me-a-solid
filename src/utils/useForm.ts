import { createStore } from "solid-js/store";

export function useForm({ errorClass }:any) {
    const [errors, setErrors] = createStore({}),
      fields = {};
  
    const validate = (ref, accessor) => {
      const validators = accessor() || [];
      let config;
      fields[ref.name] = config = { element: ref, validators };
      ref.onblur = checkValid(config, setErrors, errorClass);
      ref.oninput = () => {
        if (!errors[ref.name]) return;
        setErrors({ [ref.name]: undefined });
        errorClass && ref.classList.toggle(errorClass, false);
      };
    };