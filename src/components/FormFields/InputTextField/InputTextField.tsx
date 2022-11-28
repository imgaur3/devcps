import React from 'react';
import { Controller } from 'react-hook-form';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { Box } from '@mui/material';

import { style } from './styles';

export interface FormInputProps extends BaseTextFieldProps {
  name: string;
  control: any;
  placeholder?: string;
  type?: any;
  disabled?: boolean;
  InputProps?: any;
  setValue?: any;
  onTextChange?: any;
  variant?: any;
  onChange?: any;
}

export const InputTextField = ({
  name,
  control,
  placeholder,
  type,
  disabled,
  InputProps,
  variant,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box sx={style.textFieldBox}>
          <TextField
            fullWidth
            size="small"
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            variant={variant}
            sx={style.textValInput}
            InputProps={{ ...InputProps, style: { root: style.inputRoot } }}
            InputLabelProps={{
              sx: {
                root: style.labelRoot,
                focused: style.labelFocused,
              },
            }}
            disabled={disabled}
            error={!!error?.message}
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
        </Box>
      )}
    />
  );
};
