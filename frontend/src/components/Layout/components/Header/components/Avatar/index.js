import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Links from './Links'
import { useAuth0 } from '@auth0/auth0-react'

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

function Avatar() {
  const { user } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles()
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <button onClick={toggleOpen} className={classes.avatar}>
      <img src={user.picture} alt={user.given_name} className={classes.image} />
      {isOpen && <Links />}
    </button>
  )
}

export default Avatar
