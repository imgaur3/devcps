import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, MenuItem, Select, SelectProps } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface props extends SelectProps {
  name: string;
  control: any;
  options: any[];
  placeholder?: string;
  disabled?: boolean;
}

export const WrappedSelect = ({
  name,
  control,
  options,
  placeholder,
  disabled,
}: props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <FormControl
            variant="outlined"
            style={{ marginBottom: 0, width: '100%', marginTop: 0 }}
          >
            {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
            {/* <FormControl variant="standard" fullWidth sx={{ marginTop: '-10px' }}> */}
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              displayEmpty
              value={value}
              onChange={onChange}
              disabled={disabled}
              inputProps={{ 'aria-label': 'Without label' }}
              MenuProps={MenuProps}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <em
                      style={{
                        color: '#7777',
                        fontSize: '1rem',
                        fontWeight: 400,
                        textTransform: 'none',
                        fontStyle: 'normal',
                      }}
                    >
                      {placeholder}
                    </em>
                  );
                }
                return selected;
              }}
              error={!!error?.message}
            >
              <MenuItem disabled value="">
                <em>{placeholder}</em>
              </MenuItem>
              {options.map((item: any, key: any) => (
                <MenuItem key={key} value={item.value}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {error?.message && (
            <span
              style={{
                color: 'red',
                fontSize: 13,
                position: 'absolute',
                bottom: 4,
                left: 0,
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
