import React from 'react'
import paths from '../../../../../../../constants/paths'
import Item from './Item'
import { makeStyles } from '@material-ui/core'

const linksList = [
  {
    to: paths.profile,
    children: 'My Profile',
  },
  {
    to: paths.myProjects,
    children: 'My Projects',
  },
  {
    to: paths.activity,
    children: 'Activity',
  },
  {
    to: paths.logout,
    children: 'Logout',
  },
]

const renderLink = (linkData, index) => <Item {...linkData} key={index} />

const renderLinks = () => linksList.map(renderLink)

const useStyles = makeStyles({
  list: {
    position: 'absolute',
    top: '100%',
    right: '50%',
    backgroundColor: 'white',
    padding: '0 0.5rem 1rem',
    minWidth: '10rem',
  },
})

export default function Links() {
  const classes = useStyles()
  return <ul className={classes.list}>{renderLinks()}</ul>
}
