import React from 'react';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import WrapperButton from '../../components/Wrapper/WrapperButton/WrapperButton';
import { AutoCompleteField } from '../../components/FormFields/AutoCompleteField';

const SeachContainer = () => {
  const { control } = useForm({
    mode: 'onChange',
  });
  return (
    <Box
      sx={{
        width: '100%',
        background: '#E9DCC8',
        padding: 2,
        marginTop: -2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={3}></Grid>
        <Grid item lg={4}>
          <AutoCompleteField
            id={'search'}
            placeholder={'Seach Text'}
            name={'Seach'}
            control={control}
            options={[]}
            isOptionEqualToValue={undefined}
          />
        </Grid>
        <Grid item lg={2}>
          <WrapperButton title={'Search'} sx={{ background: '#2E5D9E' }} />
        </Grid>

        <Grid item lg={3}></Grid>
      </Grid>
    </Box>
  );
};

export default SeachContainer;
