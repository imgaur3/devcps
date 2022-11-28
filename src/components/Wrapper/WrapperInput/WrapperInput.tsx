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
  endAdornment?: any;
  setValue?: any;
  onTextChange?: any;
}

export const WrappedInput = ({
  name,
  control,
  placeholder,
  type,
  disabled,
  InputProps,
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
            variant="outlined"
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
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
        </Box>
      )}
    />
  );
};
