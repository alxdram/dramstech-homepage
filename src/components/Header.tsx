'use client';

import { motion } from 'framer-motion';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography, Avatar } from '@mui/material';
import AnimateButton from './AnimateButton';

const gridSpacing = 3;

const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))',
}));

const HeaderPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid
        container
        alignItems="stretch"
        justifyContent="space-between"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 17 } }}
      >
        <Grid item xs={12} md={5}>
          <Grid container spacing={gridSpacing} sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3rem' },
                    fontWeight: 900,
                    lineHeight: 1.4,
                  }}
                >
                  THE &#35;1{' '}
                  <Box component="span" sx={{ color: theme.palette.primary.main }}>
                    PRE-CONSTRUCTION
                  </Box>{' '}
                  SOFTWARE
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="inherit"
                  sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, fontWeight: 400, lineHeight: 1.4 }}
                >
                  The cutting-edge building technology called DRAMS is designed to streamline pre-construction workflow
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
              >
                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Grid item>
                    <AnimateButton>
                      <Button
                        href="#products"
                        size="large"
                        variant="contained"
                        color="secondary"
                      >
                        Learn More
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.6 }}
              >
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{ [theme.breakpoints.down('lg')]: { display: 'inline-flex', width: 'auto' } }}
                >
                  <Grid item>
                    <Avatar
                      alt="DRAMS Tech Logo"
                      sx={{
                        width: 70,
                        height: 70,
                        padding: 0.5,
                        background: theme.palette.primary.light,
                      }}
                      variant="rounded"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="100" height="100">
                        <path fill={theme.palette.primary.light} d="M0 0h140v140H0z" />
                        <path
                          fill={theme.palette.primary.main}
                          d="M55.08 49.04H37.11v17.97h-4.49V44.55h22.46v4.49zm35.94 31.44v-4.49H68.56v22.46h22.46v-4.49H73.05V80.48h17.97zM5.66 67V44.54h19.1l3.37 3.37v15.73L24.76 67Zm4.5-18v13.51h13.47V49Zm53.9 31.48v-4.49H41.6v22.46h22.46v-4.49H46.09v-4.49h17.97v-4.5H46.09v-4.49h17.97zm49.42 4.49H100v-8.98h-4.49v22.46H100v-8.98h13.48v8.98h4.49V75.99h-4.49v8.98zM23.63 98.45h4.5V80.48h8.98v-4.49H14.65v4.49h8.98v17.97zm67.39-31.44h-4.5V44.55h22.46v22.46h-4.49V49.04H100v17.97h-4.49V49.04h-4.49v17.97zm44.92-17.97v-4.49h-22.46v13.47h17.97v4.49h-17.97v4.5h22.46V53.53h-17.97v-4.49h17.97zM77.54 49h-18v-4.5H82V67H59.57V53.53h18m0 9V58H64.06v4.49Z"
                        />
                      </svg>
                    </Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography
                      variant="h4"
                      component="div"
                      color="inherit"
                      align="left"
                      sx={{ fontWeight: 400, lineHeight: 1.4 }}
                    >
                      <b>Built by DRAMS Tech Inc.&#169;</b>
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      color="inherit"
                      align="left"
                      sx={{ fontWeight: 400, lineHeight: 1.4 }}
                    >
                      Pre-construction software solutions for property owners, developers, realtors, architecture,
                      engineering and construction companies.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <div style={{ position: 'relative', marginTop: 70 }}>
            <HeaderImage src="/images/landing/3D-Lot-4.svg" alt="DRAMS Tech" />
            <div
              style={{
                position: 'absolute',
                bottom: 180,
                left: 60,
                width: 540,
                animation: '10s slideY linear infinite',
                animationDelay: '2s',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
              >
                <HeaderImage src="/images/landing/3D-House.svg" alt="DRAMS Tech - Building" />
              </motion.div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderPage;
