import { faker } from '@faker-js/faker';
// material
import {
  Stack,
  Container,
  Typography,
} from '@mui/material';
// components
import { AppOrderTimeline } from '../../sections/@dashboard/app';
import Page from '../../components/Page';

export default function Log() {

  return (
    <Page title="Customer">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Log
          </Typography>
          
        </Stack>

        <AppOrderTimeline
              title="Activity Log"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
      </Container>
    </Page>
  );
}
