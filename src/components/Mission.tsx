'use client';

import { Container, Grid, Typography } from '@mui/material';
import FadeInWhenVisible from './Animation';

const gridSpacing = 3;

const MissionPage = () => (
  <Container>
    <FadeInWhenVisible>
      <Grid container spacing={gridSpacing} id="mission">
        <Grid item xs={12} lg={5} md={10}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    The Mission
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                What is DRAMS Tech mission?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="justify">
                To help build a better tomorrow by making it easier for people to complete pre-construction projects. After
                completing thousands of projects manually, we are trying to automate and simplify processes as much as
                possible so that property owners and AEC consultants can grow faster with less cost or time spent on
                paperwork!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FadeInWhenVisible>
  </Container>
);

export default MissionPage;
