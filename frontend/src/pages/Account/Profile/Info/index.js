import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Item from './Item'

const styles = (theme) => ({
  info: {
    fontFamily: 'Montserrat',
    fontSize: '1.25rem',
    letterSpacing: '1.8px',
    fontWeight: 600,
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      marginBottom: '0',
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '2rem',
      borderRight: '2px solid black',
    },
  },
})

export class Info extends Component {
  render() {
    const { classes, user } = this.props
    return (
      <div className={classes.info}>
        <Item>{user.first_Name}</Item>
        <Item>University: {user.university}</Item>
        <Item>Field: {user.field_name}</Item>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Info)
