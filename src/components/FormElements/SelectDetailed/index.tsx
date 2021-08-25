/* eslint-disable react/jsx-props-no-spreading */

import React, {ReactNode} from 'react';
import {FormatOptionLabelMeta} from 'react-select';
import clsx from 'clsx';

import {BaseSelectProps, Select} from 'components/FormElements';
import {InputOption} from 'types/forms';
import {SFC} from 'types/generic';

import './SelectDetailed.scss';

const filterOption = ({label, value}: InputOption, rawInput: string): boolean => {
  const rawInputLowercase = rawInput.toLocaleLowerCase();
  return (
    value.toLocaleLowerCase().includes(rawInputLowercase) ||
    (label ? label.toLocaleLowerCase().includes(rawInputLowercase) : false)
  );
};

const formatOptionLabel = ({value, label}: InputOption, {context}: FormatOptionLabelMeta<InputOption>): ReactNode => {
  if (context === 'value') {
    return value;
  }

  return (
    <>
      {label ? <div className="SelectDetailed__option-label">{label}</div> : null}
      <div className="SelectDetailed__option-value">{value}</div>
    </>
  );
};

const SelectDetailed: SFC<BaseSelectProps> = ({...baseSelectProps}) => {
  const {className} = baseSelectProps;

  return (
    <Select
      {...baseSelectProps}
      className={clsx('SelectDetailed', className)}
      filterOption={filterOption}
      formatOptionLabel={formatOptionLabel}
    />
  );
};

export default SelectDetailed;
