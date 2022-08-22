import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Container,
  Button,
  Typography,
  Stack,
  Card
} from '@mui/material';
import Iconify from '../../components/Iconify';
// components
import Page from '../../components/Page';
// sections
import { CreateCustomerForm } from '../../sections/customer/index';


// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 'auto',
  minHeight: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: theme.spacing(5, 5),
}));

export default function CustomerCreate() {

  return (
    <Page title="User Create">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add Customer
          </Typography>
          <Button variant="contained" component={RouterLink} to="../customer" startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}>
            Back
          </Button>
        </Stack>
        <Card>
            <ContentStyle>
                <CreateCustomerForm />
            </ContentStyle>
        </Card>
      </Container>
    </Page>
  );
}
