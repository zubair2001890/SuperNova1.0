import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
  item: {
    margin: '.6rem 0',
  },
}

export class Item extends Component {
  render() {
    const { classes, children } = this.props
    return <span className={classes.item}>{children}</span>
  }
}

export default withStyles(styles)(Item)
