'use client';

import { styled } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

const gridSpacing = 3;

const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '35px 0',
  color: '#fff',
  background: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const FooterSubWrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  color: '#fff',
  background: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const FooterPage = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs={12} sm={4}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-dark.svg" alt="DRAMS Tech" width="200" />
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
      <FooterSubWrapper>
        <Container>
          <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs={12} sm={10}>
              <Typography variant="subtitle2" component="div" color="inherit" align="left">
                &#169; DRAMS Tech Inc. All rights reserved
              </Typography>
              <Typography variant="subtitle2" component="div" color="inherit" align="left">
                We are not an A/E or construction firm, or a substitute for an A/E or construction firm. Use of our products
                and services are governed by our Terms of Use and Privacy Policy.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </FooterSubWrapper>
    </>
  );
};

export default FooterPage;
