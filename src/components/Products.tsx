'use client';

import { lazy, Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import FadeInWhenVisible from './Animation';
import AppStoreLogo from './AppStoreLogo';

const ModelPage = lazy(() => import('./Model'));

const gridSpacing = 3;

const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '20px',
  transformOrigin: '0 50%',
  [theme.breakpoints.up('md')]: {
    transform: 'scale(1.2)',
  },
}));

const VideoCard = styled('div')({
  background: '#FFFFFF',
  boxShadow: '0px 0px 50px rgba(33, 150, 243, 0.2)',
  borderRadius: '0px',
  aspectRatio: '16/9',
  maxHeight: 369,
});

const ClickableGrid = styled(Grid)({
  '&:hover:not(.Mui-disabled)': {
    cursor: 'pointer',
  },
});

const ProductsPage = () => {
  return (
    <Container>
      <FadeInWhenVisible>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} id="products">
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Top Products
            </Typography>
          </Grid>

          {/* DRAMS MATCH */}
          <Grid
            container
            spacing={gridSpacing}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            item
            xs={12}
            sx={{ mb: 10 }}
          >
            <Grid item xs={12} md={10} lg={5}>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <Typography variant="h2" component="div">
                  DRAMS MATCH
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="justify">
                  DRAMS Match is a marketplace that connects property owners with the right pre-construction consultants.
                  We understand that the construction process can be complex, and we want to help make it as easy as
                  possible for you. With our platform, you can find the right consultant for your project, get free
                  quotes, and compare services. We also offer a permit assistance service to help you navigate the
                  requirements of your local jurisdiction. Our goal is to provide you with everything you need to make
                  your construction project successful.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10} lg={7} sx={{ mt: isMobile ? 0 : 6 }}>
              <VideoCard>
                <iframe
                  src="https://www.youtube.com/embed/WqPLkHZlMys?rel=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  style={{ display: 'block' }}
                />
              </VideoCard>
            </Grid>
          </Grid>

          {/* DRAMS PRODUCTION STUDIO */}
          <Grid
            container
            spacing={gridSpacing}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            item
            xs={12}
            sx={{ mb: isMobile ? 10 : undefined }}
          >
            <Grid item xs={12} md={10} lg={5}>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <Typography variant="h2" component="div">
                  DRAMS PRODUCTION STUDIO
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="justify">
                  DRAMS Production Studio is a web app that helps professionals and property owners create building permit
                  documents on mobile. The app uses A.I. to automate the creation of permit drawings and other project
                  documentation, saving users time and money. The app also offers real-time collaboration, allowing
                  multiple users to work on a project simultaneously. With DRAMS Production Studio, creating building
                  permit documents is easier than ever.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10} lg={7}>
              <Grid container spacing={2} sx={{ aspectRatio: '1', height: '100%', mt: isMobile ? 2 : undefined }}>
                <Suspense
                  fallback={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 300 }}>
                      <CircularProgress />
                    </div>
                  }
                >
                  <ModelPage />
                </Suspense>
              </Grid>
            </Grid>
          </Grid>

          {/* DRAMS PORTAL */}
          <Grid
            container
            spacing={gridSpacing}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            item
            xs={12}
            sx={{ mb: 10 }}
          >
            <Grid item xs={12} md={10} lg={5}>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <Typography variant="h2">DRAMS PORTAL</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="justify">
                  DRAMS Portal is a mobile app that helps professionals and property owners gather building information,
                  design, and communicate. The app provides a platform for users to share ideas, photos, and documents and
                  to collaborate on projects. It is also valuable for tracking building design and construction progress
                  and communicating with consultants and contractors. DRAMS Portal is a simple and efficient way to use
                  technology to manage building projects. It is an essential tool for anyone who wants to make the most of
                  their mobile device.
                </Typography>
              </Grid>
            </Grid>
            <ClickableGrid
              item
              container
              xs={12}
              md={10}
              lg={7}
              direction="column"
              justifyContent={isMobile ? 'flex-start' : 'center'}
              alignItems="center"
              spacing={isMobile ? 0 : 2}
              sx={{ mt: isMobile ? 0 : 4 }}
            >
              <Grid item>
                <img
                  src="/images/iosApp.gif"
                  alt="DRAMS Tech App"
                  width={isMobile ? 220 : 144}
                  style={{ borderRadius: '12px' }}
                />
              </Grid>
              <Grid item sx={{ mt: isMobile ? 4 : undefined }}>
                <AppStoreLogo width={144} />
              </Grid>
            </ClickableGrid>
          </Grid>

          {/* DRAMS MANAGEMENT PRO */}
          <Grid container spacing={gridSpacing} direction="row" justifyContent="flex-start" alignItems="flex-start" item xs={12}>
            <Grid item xs={12} md={10} lg={5}>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <Typography variant="h2" component="div">
                  DRAMS MANAGEMENT PRO
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="justify">
                  If you work in the AEC industry, you know that managing sales and projects can be complicated. From
                  tracking sales progress to keeping all the stakeholders happy, it&apos;s a lot to keep track of. That&apos;s where
                  DRAMS Management Pro comes in. It&apos;s a robust sales and project management tool tailored specifically for
                  the AEC industry. With DRAMS Management Pro, you can easily track sales progress, manage projects, and
                  grow your business. Plus, with its intuitive interface, you&apos;ll be able to hit the ground running and
                  start growing your business today. So why wait? Try DRAMS Management Pro today and see how it can help
                  you take your business to the next level.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10} lg={7} sx={{ mt: isMobile ? 2 : 6, mb: 10 }}>
              <HeaderImage src="/images/landing/dashboard.png" alt="DRAMS Tech" />
            </Grid>
          </Grid>
        </Grid>
      </FadeInWhenVisible>
    </Container>
  );
};

export default ProductsPage;
