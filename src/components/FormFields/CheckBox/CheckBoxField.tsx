import React from 'react';
import { Controller } from 'react-hook-form';
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  CheckboxProps,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface props extends CheckboxProps {
  name: string;
  control: any;
  label: string;
  className?: any;
}

export const CheckBox = ({ control, name, label, className }: props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormGroup className={className}>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  color="primary"
                />
              }
              label={label}
            />
          </FormGroup>
          {error?.message && (
            <span
              style={{
                color: 'red',
                fontSize: 13,
                position: 'absolute',
                display: 'block',
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
