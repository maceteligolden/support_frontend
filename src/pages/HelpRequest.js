// @mui
import { styled } from '@mui/material/styles';
import { Container, Card } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { HelpForm } from '../sections/auth/login';

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      padding: theme.spacing(7, 5, 0, 7),
    },
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
  }));

export default function HelpRequest(){
    return (
        <Page title="Help Request">
            <HeaderStyle/>
            <Container maxWidth="sm">
                <Card>
                    <ContentStyle>
                        <HelpForm />
                    </ContentStyle>
                </Card>
            </Container>
        </Page>
    )
}