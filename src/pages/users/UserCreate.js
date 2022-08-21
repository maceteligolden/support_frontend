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


export default function UserCreate() {

  return (
    <Page title="User Create">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add User
          </Typography>
          <Button variant="contained" component={RouterLink} to="../user" startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}>
            Back
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
