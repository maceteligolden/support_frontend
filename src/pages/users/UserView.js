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


export default function UserView() {

  return (
    <Page title="User View">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add User
          </Typography>
          <Button variant="contained" component={RouterLink} to="../user" startIcon={<Iconify icon="eva:plus-fill" />}>
            Back
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
