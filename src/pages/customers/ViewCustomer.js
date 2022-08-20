import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Container,
  Button,
  Typography,
  Stack
} from '@mui/material';
import Iconify from '../../components/Iconify';
// components
import Page from '../../components/Page';


// ----------------------------------------------------------------------


export default function CustomerView() {

  return (
    <Page title="User Create">
      <Container>
        {/** header section */}
        <Stack 
            direction="row" 
            alignItems="center" 
            justifyContent="space-between" 
            mb={5}>
          <Typography 
            variant="h4" 
            gutterBottom>
                View Customer
          </Typography>
          <Button 
            variant="contained" 
            component={RouterLink} 
            to="../customer" 
            startIcon={<Iconify icon="eva:plus-fill" />}>
                Back
          </Button>
        </Stack>

        {/** content goes below here */}
      </Container>
    </Page>
  );
}
