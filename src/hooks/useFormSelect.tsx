import {useMemo} from 'react';

import {BaseSelectProps} from 'components/FormElements';
import useFormContext from 'hooks/useFormContext';
import {InputOption} from 'types/forms';

interface UseFormSelectOutput {
  error: boolean;
  handleBlur(e: any): void;
  handleChange(option: InputOption | null): void;
  selectedOption: InputOption | null;
}

const useFormSelect = (name: string, options: InputOption[], selectProps: BaseSelectProps): UseFormSelectOutput => {
  const {creatable} = selectProps;
  const {errors, setFieldTouched, setFieldValue, touched, values} = useFormContext();
  const error = !!errors[name] && !!touched[name];

  const selectedOption = useMemo(() => {
    const value = values[name];
    if (!value) return null;

    return options.find((option) => option.value === value) || {label: value, value};
  }, [name, options, values]);

  const handleBlur = (e: any): void => {
    setFieldTouched(name, true);

    const newValue = e.target.value;
    if (!newValue.length) return;

    const associatedOptions = options.filter((option) => [option.label, option.value].includes(newValue));

    if (associatedOptions.length === 1) {
      const option = associatedOptions[0];

      if (!option.disabled) {
        setFieldValue(name, option.value);
      }
      return;
    }

    if (creatable) {
      setFieldValue(name, newValue);
    }
  };

  const handleChange = (option: InputOption | null): void => {
    if (!option) {
      setFieldValue(name, '');
    } else {
      setFieldValue(name, option.value);
    }
  };

  return {
    error,
    handleBlur,
    handleChange,
    selectedOption,
  };
};

export default useFormSelect;
