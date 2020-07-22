import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Links from './Links'

const useStyles = makeStyles((theme) => {
  const size = '3.875rem'
  return {
    avatar: {
      border: 0,
      padding: 0,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      position: 'relative',
    },
    image: {
      width: size,
      height: size,
      borderRadius: '50%',
    },
  }
})

function Avatar({ user }) {
  const [isOpen, setIsOpen] = useState(true)
  const classes = useStyles()
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <button onClick={toggleOpen} className={classes.avatar}>
      <img
        src={user.imageURL}
        alt={user.first_Name}
        className={classes.image}
      />
      {isOpen && <Links />}
    </button>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Avatar)
