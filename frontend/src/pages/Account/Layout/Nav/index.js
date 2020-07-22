import React from 'react'
import { makeStyles } from '@material-ui/core'
import Item from './Item'

const useStyles = makeStyles((theme) => ({
  nav: {
    marginBottom: '4rem',
    [theme.breakpoints.up('md')]: {
      flexBasis: '25%',
      borderRight: '2px solid black',
    },
  },
  list: {
    paddingLeft: '0',
  },
}))

const links = [
  {
    to: '/',
    children: 'Backed Projects',
  },
  {
    to: '/my-projects',
    children: 'My Projects',
  },
  {
    to: '/activity',
    children: 'Activity',
  },
  {
    to: '/profile',
    children: 'Profile',
  },
]

const renderLink = (linkData, index) => <Item {...linkData} key={index} />

const renderLinks = () => links.map(renderLink)

export function Nav() {
  const classes = useStyles()
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>{renderLinks()}</ul>
    </nav>
  )
}

export default Nav
