import React from 'react'
import { reduxForm } from 'redux-form'
import axios from 'axios'
import { makeStyles } from '@material-ui/core'
import StripeCheckout from 'react-stripe-checkout'

import CardSection from './CardSection'

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingBottom: theme.spacing(10),
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  pledgeButton: {
    backgroundColor: 'rgb(0, 158, 116)',
    border: 'none',
    color: 'white',
    fontSize: 16,
    height: 50,
  },
}))

const handleToken = (token) => axios.post('/api/payment', token)

const CheckoutForm = ({ price }) => {
  const classes = useStyles()

  const billingDetails = {
    name: 'John Doe',
    email: 'example@domain.com',
    address: {
      city: 'City',
      line1: 'Address',
      state: 'State',
      postal_code: 'ZIP',
    },
  }

  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <CardSection />
        <StripeCheckout
          amount={price * 100}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          description="Donation for Supernova"
          token={handleToken}
          billingAddress={billingDetails}
          currency="gbp"
        >
          <button className={classes.pledgeButton}>Pledge</button>
        </StripeCheckout>
      </form>
    </div>
  )
}

export default reduxForm({ form: 'checkoutForm' })(CheckoutForm)
