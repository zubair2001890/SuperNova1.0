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

const useStyles = makeStyles(() => {
  const paddingRight = '1rem'
  return {
    list: {
      position: 'absolute',
      top: '100%',
      right: `calc(50% - ${paddingRight})`,
      backgroundColor: 'white',
      padding: `0 ${paddingRight} 1rem`,
      minWidth: '10rem',
      marginTop: 0,
      borderRadius: '0.25rem',
    },
  }
})

export default function Links() {
  const classes = useStyles()
  return <ul className={classes.list}>{renderLinks()}</ul>
}
