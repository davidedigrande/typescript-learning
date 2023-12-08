import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from './PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import {Typography} from '@mui/material';
import CardWorkExperienceListProvider from './CardWorkExperienceListProvider';
import CardEducationExperienceListProvider from './CardEducationExperienceListProvider';

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Work Experience</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >

          <Grid item xs={12}>
            <Typography variant="h3">Work Experience</Typography>
            <CardWorkExperienceListProvider/>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3">Education</Typography>
            <CardEducationExperienceListProvider/>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
