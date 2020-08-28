import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Typography, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setDarkTheme as setPageDarkTheme } from '../../store/slices/page'
import paths from '../../constants/paths'

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: 'relative',
    margin: 0,
  },
  pageHeader: {
    width: '100%',
    backgroundImage: 'url(' + require('./assets/exploreHome.png') + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'block',
    height: 1080,
    '@media (max-height:1080px)': {
      height: '100vh',
    },
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
  fieldLinks: {
    position: 'absolute',
    width: '100vw',
    top: 0,
    left: 0,
    height: 1080,
    '@media (max-height:1080px)': {
      height: '100vh',
    },
  },
  fieldText: {
    margin: 0,
    display: 'block',
    '@media (max-height:1080px)': {
      fontSize: '2.78vh',
      lineHeight: '3.426vh',
    },
  },
  blurredLink: {
    display: 'none',
    filter: 'blur(0.625rem)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 0,
  },
  item: {
    position: 'relative',
    overflow: 'visible',
    transform: 'translate(-50%, -50%)',
    textDecoration: 'none',
    '& p': {
      textAlign: 'center',
      fontFamily: 'Montserrat',
      color: 'white',
      letterSpacing: '0.09em',
      fontWeight: 700,
      padding: 0,
      fontSize: 30,
      lineHeight: '37px',
      '@media (max-height:720px)': {
        fontSize: 20,
      },
    },
    '&:hover': {
      '& p': {
        WebkitBackgroundClip: 'text !important',
        WebkitTextFillColor: 'transparent',
        display: 'block',
      },
    },
  },
  medicineContainer: {
    position: 'absolute',
    left: 'calc(50% + 160px)',
    top: 'calc(50% - 371.5px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% + 15vh)',
      top: 'calc(50% - 34.4vh)',
    },
    '@media (max-height:915px)': {
      left: 'calc(50% + 15vh)',
      top: "140px",
    },
    '&:hover a, &:hover p': {
      background:
        'transparent radial-gradient(closest-side at 60% 50%, #FFC1DF 0%, #FF76B7 64%, #FE2A8E 100%) 0% 0% no-repeat padding-box',
    },
  },
  physicsContainer: {
    position: 'absolute',
    left: 'calc(50% + 384px)',
    top: 'calc(50% - 239.5px)',

    '@media (max-height:1080px)': {
      left: 'calc(50% + 35.56vh)',
      top: 'calc(50% - 22.18vh)',
    },
    '@media (max-height:720px)': {
      left: 'calc(50% + 35.56vh)',
      top: 'calc(50% - 15vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #F3D8FF 0%, #D77DFF 66%, #BD2BFF 100%) 0% 0% no-repeat padding-box',
    },
  },
  earthSciencesContainer: {
    position: 'absolute',
    left: 'calc(50% + 496px)',
    top: 'calc(50% + 8px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% + 45.93vh)',
      top: 'calc(50% + 0.74vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #E3FFE1 0%, #6CFF61 100%) 0% 0% no-repeat padding-box',
    },
  },
  engineeringTechnologyContainer: {
    position: 'absolute',
    left: 'calc(50% + 446px)',
    top: 'calc(50% + 290px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% + 41.3vh)',
      top: 'calc(50% + 27vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #BFF2FF 0%, #2AD1FF 100%) 0% 0% no-repeat padding-box',
    },
  },
  computerScienceContainer: {
    position: 'absolute',
    left: 'calc(50% + 147px)',
    top: 'calc(50% + 428px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% + 13.61vh)',
      top: 'calc(50% + 39.63vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #FFE6C1 0%, #FFE3BB 4%, #FFB31C 95%, #FFA214 100%) 0% 0% no-repeat padding-box',
    },
  },
  socialSciencesContainer: {
    position: 'absolute',
    left: 'calc(50% - 141px)',
    top: 'calc(50% + 428px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% - 13.06vh)',
      top: 'calc(50% + 39.63vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #D1FFF8 0%, #00FFD8 100%) 0% 0% no-repeat padding-box',
    },
  },
  mathsStatsContainer: {
    position: 'absolute',
    left: 'calc(50% - 395px)',
    top: 'calc(50% + 290px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% - 36.57vh)',
      top: 'calc(50% + 27vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #FFD9EE 0%, #FF3EA7 100%) 0% 0% no-repeat padding-box',
    },
  },
  spaceSciencesContainer: {
    position: 'absolute',
    left: 'calc(50% - 483px)',
    top: 'calc(50% + 8px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% - 44.72vh)',
      top: 'calc(50% + 0.74vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #FFC2C2 0%, #FF332A 100%) 0% 0% no-repeat padding-box',
    },
  },
  biologyContainer: {
    position: 'absolute',
    left: 'calc(50% - 366.5px)',
    top: 'calc(50% - 239.5px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% - 33.94vh)',
      top: 'calc(50% - 22.18vh)',
    },
    '@media (max-height:720px)': {
      left: 'calc(50% - 33.94vh)',
      top: 'calc(50% - 15vh)',
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 50% 50%, #D8FFF4 0%, #3EFFCB 100%) 0% 0% no-repeat padding-box',
    },
  },
  chemistryContainer: {
    position: 'absolute',
    left: 'calc(50% - 160px)',
    top: 'calc(50% - 371.5px)',
    '@media (max-height:1080px)': {
      left: 'calc(50% - 15vh)',
      top: 'calc(50% - 34.3vh)',
    },
    '@media (max-height:915px)': {
      left: 'calc(50% - 15vh)',
      top: "140px",
    },
    '&:hover p': {
      background:
        'transparent radial-gradient(closest-side at 45% 50%, #E7E5FF 0%, #AAA5FF 59%, #867EFF 100%) 0% 0% no-repeat padding-box',
    },
  },
  center: {
    margin: '0 auto',
    maxWidth: 966,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 92,
    paddingBottom: 92,
  },
  pageTitle: {
    marginTop: 78,
  },
  subheading: {
    margin: '68px 0',
  },
  subheadingParagraph: {
    paddingBottom: 48,
  },
}))

export default () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const fields = [
    {
      path: paths.medicine,
      containerClass: classes.medicineContainer,
      label: 'MEDICINE',
      index: 1,
    },
    {
      path: paths.physics,
      containerClass: classes.physicsContainer,
      label: 'PHYSICS',
      index: 2,
    },
    {
      path: paths.earthSciences,
      containerClass: classes.earthSciencesContainer,
      label: 'EARTH SCIENCES',
      index: 3,
    },
    {
      path: paths.engineeringAndTech,
      containerClass: classes.engineeringTechnologyContainer,
      label: 'ENGINEERING AND TECHNOLOGY',
      index: 4,
    },
    {
      path: paths.computerScience,
      containerClass: classes.computerScienceContainer,
      label: 'COMPUTER SCIENCE',
      index: 5,
    },
    {
      path: paths.socialSciences,
      containerClass: classes.socialSciencesContainer,
      label: 'SOCIAL SCIENCES',
      index: 6,
    },
    {
      path: paths.mathsAndStats,
      containerClass: classes.mathsStatsContainer,
      label: 'MATHEMATICS AND STATISTICS',
      index: 7,
    },
    {
      path: paths.spaceSciences,
      containerClass: classes.spaceSciencesContainer,
      label: 'SPACE SCIENCES',
      index: 8,
    },
    {
      path: paths.biology,
      containerClass: classes.biologyContainer,
      label: 'BIOLOGY',
      index: 9,
    },
    {
      path: paths.chemistry,
      containerClass: classes.chemistryContainer,
      label: 'CHEMISTRY',
      index: 10,
    },
  ]

  useEffect(() => {
    dispatch(setPageDarkTheme(true))
    return () => {
      dispatch(setPageDarkTheme(false))
    }
  }, [dispatch])

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.pageHeader}>
          <div className={classes.mockAppBarLayout} />
          <div className={classes.fieldLinks}>
            {fields.map((field) => {
              const itemClasses = `${field.containerClass} ${classes.item}`
              const labelWords = field.label.split(' ')
              const brokenLabel = labelWords.map((word, index) => (
                <>
                  <span key={index}>{word}</span>
                  <br />
                </>
              ))
              return (
                <RouterLink to={field.path} className={itemClasses}>
                  <p className={classes.fieldText} key={field.index}>
                    {brokenLabel}
                  </p>
                  <p className={classes.blurredLink}>{brokenLabel}</p>
                </RouterLink>
              )
            })}
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <Typography variant="h1" className={classes.pageTitle}>
          Welcome to the Explore Section
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          How it works:
        </Typography>
        <Typography variant="body1" className={classes.subheadingParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          SuperNova's Featured Projects:
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          Science and the world of research:
        </Typography>
        <Typography variant="body1" className={classes.subheadingParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          Educational Resources:
        </Typography>
      </div>
    </>
  )
}

// Note: At <1200px, switch to mobile design