import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import { getAccountUrl } from '../../../helpers/createPaths'

const styles = {
  button: {
    background: '#000000 0% 0% no-repeat padding-box',
    border: '1px solid #DADCE0',
    borderRadius: '0.5rem',
    color: 'white',
    textTransform: 'uppercase',
    padding: '0.625rem 0.9375rem',
    textDecoration: 'none',
    font: 'Bold 1rem/1.8125rem Montserrat',
    letterSpacing: '0.96px',
    margin: '3.125rem 0',
  },
}

export class Edit extends Component {
  render() {
    const { classes } = this.props
    const editPath = getAccountUrl('edit')
    return (
      <Link className={classes.button} to={editPath}>
        Edit Profile
      </Link>
    )
  }
}

export default withStyles(styles)(Edit)
