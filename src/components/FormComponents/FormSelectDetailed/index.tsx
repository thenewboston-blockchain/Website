/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import clsx from 'clsx';

import {BaseSelectProps, SelectDetailed} from 'components/FormElements';
import useFormSelect from 'hooks/useFormSelect';
import {BaseFormComponentProps} from 'types/forms';
import {SFC} from 'types/generic';
import {renderFormError, renderFormLabel} from 'utils/forms';

type ComponentProps = BaseFormComponentProps<BaseSelectProps>;

const FormSelectDetailed: SFC<ComponentProps> = ({hideErrorText = false, label, required, ...baseSelectProps}) => {
  const {className, name, options} = baseSelectProps;
  const {error, handleBlur, handleChange, selectedOption} = useFormSelect(name, options, baseSelectProps);

  return (
    <div className={clsx('FormSelectDetailed FormFieldComponent', className)}>
      {renderFormLabel(name, className, label, required)}
      <SelectDetailed
        {...baseSelectProps}
        className="FormField"
        error={error}
        onBlur={handleBlur}
        onChange={handleChange}
        value={selectedOption}
      />
      {renderFormError(name, className, hideErrorText)}
    </div>
  );
};

export default FormSelectDetailed;
