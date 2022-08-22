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
import { RegisterForm } from '../../sections/auth/register';


// ----------------------------------------------------------------------
const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 'auto',
  minHeight: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: theme.spacing(5, 5),
}));

export default function TicketCreate() {

  return (
    <Page title="Ticket Create">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add Ticket
          </Typography>
          <Button variant="contained" component={RouterLink} to="../ticket" startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}>
            Back
          </Button>
        </Stack>
        <Card>
            <ContentStyle>
                <RegisterForm />
            </ContentStyle>
        </Card>
      </Container>
    </Page>
  );
}
