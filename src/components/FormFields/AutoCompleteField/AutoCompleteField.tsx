import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { Controller } from 'react-hook-form';

import { FN } from '../../../common/types/common';
import { style } from './styles';

interface Props {
  id: string;
  name: string;
  control: any;
  options: any[];
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  fieldValue?: any;
  onChange?: FN;
  onTextChange?: FN;
  getOptionLabel?: FN;
  isOptionEqualToValue: any;
  noOptionsText?: any;
  loading?: any;
  loadingText?: any;
  InputProps?: any;
  InputLabelProps?: any;
  size?: 'small' | 'medium';
  disabled?: boolean;
  disableClearable?: boolean;
  groupBy?: FN;
  className?: string;
}

export const AutoCompleteField = ({
  id,
  name,
  control,
  options,
  placeholder,
  defaultValue,
  fieldValue,
  disabled,
  getOptionLabel,
  isOptionEqualToValue,
  InputProps,
  disableClearable,
  ...props
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Autocomplete
            id={id}
            options={options}
            value={value || fieldValue}
            onChange={(_, data) => onChange(data)}
            defaultValue={defaultValue}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            disabled={disabled}
            disableClearable={disableClearable}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={placeholder}
                sx={style.textValInput}
                InputProps={{
                  ...params.InputProps,
                  ...InputProps,
                  sx: { root: style.inputRoot },
                }}
                InputLabelProps={{
                  sx: {
                    root: style.labelRoot,
                    focused: style.labelFocused,
                  },
                }}
                error={!!error?.message}
              />
            )}
            {...props}
          />
          {error?.message && (
            <span
              style={{
                color: 'red',
                fontSize: 13,
                position: 'relative',
                bottom: 4,
                left: 0,
                top: 1,
              }}
            >
              {error?.message}
            </span>
          )}
        </>
      )}
    />
  );
};
