import React from 'react'
import { makeStyles } from '@material-ui/core'

const circleSize = '0.625rem'
const borderPadding = '0.25rem'
const padding = `calc(${circleSize} + ${borderPadding})`

const useStyles = makeStyles({
  link: {
    fontFamily: 'Montserrat',
    fontSize: '1.125rem',
    fontWeight: 600,
    letterSpacing: '1.26px',
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    textAlign: 'right',
    padding: `1rem ${padding}`,
    position: 'relative',
    borderRight: '1px solid black',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '&::after': {
      borderRadius: '50%',
      border: '1px solid black',
      width: circleSize,
      height: circleSize,
      content: "''",
      display: 'block',
      position: 'absolute',
      right: `calc(-1 * ${padding})`,
      top: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
    },
  },
  active: {
    color: '#FF0000',
    '&::after': {
      backgroundColor: '#FF0000',
    },
  },
})

export default function NavItem({ Component, ...other }) {
  const classes = useStyles()
  return (
    <Component
      className={classes.link}
      activeClassName={classes.active}
      {...other}
    />
  )
}
