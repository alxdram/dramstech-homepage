'use client';

import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

const gridSpacing = 3;

const SubscribeWrapper = styled('div')(({ theme }) => ({
  padding: '100px 0',
  background: `linear-gradient(90deg, ${theme.palette.primary.light} 65%, #fff 65%)`,
  [theme.breakpoints.down('lg')]: {
    padding: '50px 0',
    background: `linear-gradient(0deg, ${theme.palette.primary.light} 65%, #fff 65%)`,
  },
}));

const SubscribeCard = styled('div')({
  background: '#FFFFFF',
  boxShadow: '0px 0px 50px rgba(33, 150, 243, 0.2)',
  borderRadius: '20px',
  padding: '100px 75px',
  '@media (max-width: 900px)': {
    padding: '40px 25px',
  },
});

const SubscribeImage = styled('img')({
  width: 330,
  maxWidth: '100%',
});

const Subscribe = () => {
  const theme = useTheme();

  return (
    <SubscribeWrapper id="subscribe">
      <Container>
        <Grid container alignItems="center" spacing={gridSpacing}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: 'none', md: 'block' },
              textAlign: 'right',
              [theme.breakpoints.down('lg')]: { textAlign: 'center' },
            }}
          >
            <SubscribeImage src="/images/landing/img-groupmail.png" alt="DramsTech" />
          </Grid>
          <Grid item xs={12} md={7}>
            <SubscribeCard>
              <Grid container spacing={gridSpacing} sx={{ mb: '1rem' }}>
                <Grid item sm={12}>
                  <Typography
                    variant="h1"
                    component="div"
                    sx={{ [theme.breakpoints.down('md')]: { fontSize: '1.125rem' } }}
                  >
                    Subscribe
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="body2">
                    Subscribe for the latest news &#38; updates of DramsTech. We never send spam newsletters.
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <TextField
                        fullWidth
                        placeholder="Enter your email"
                        variant="outlined"
                        size="small"
                        disabled
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        href="mailto:info@dramstech.com?subject=Newsletter%20Subscription"
                      >
                        Contact Us
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </SubscribeCard>
          </Grid>
        </Grid>
      </Container>
    </SubscribeWrapper>
  );
};

export default Subscribe;
