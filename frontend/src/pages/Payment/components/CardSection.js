import React from 'react'
import { Field } from 'redux-form'
import clsx from 'clsx'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  inputField: {
    border: '1px solid',
    borderColor: 'rgb(200, 200, 200)',
    padding: theme.spacing(1.5),
  },
  inputArea: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
  expirationAndSecurity: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  expiration: {
    width: '49%',
  },
  security: {
    width: '49%',
  },
}))

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#000',
      '::placeholder': {
        color: `rgb(150, 150, 150)`,
      },
    },
    invalid: {
      color: `#e63939`,
      iconColor: `#e63939`,
    },
    complete: {},
  },
  hidePostalCode: true,
}

const ElementAsFieldInput = ({ Element, input: { onChange }, options }) => (
  <Element onChange={onChange} options={options} />
)

const getElementAsField = (Element) => ({ name, ...other }) => (
  <Field
    component={(props) => (
      <ElementAsFieldInput Element={Element} {...other} {...props} />
    )}
  />
)

const CardNumberField = getElementAsField(CardNumberElement)

const CardExpiryField = getElementAsField(CardExpiryElement)

const CardCvcField = getElementAsField(CardCvcElement)

export default function CardSection() {
  const classes = useStyles()
  // return <CardElement options={cardElementOptions} />;
  return (
    <>
      <div className={classes.inputArea}>
        <label>
          <div className={classes.label}>Card number</div>
        </label>
        <div className={classes.inputField}>
          <CardNumberField options={cardElementOptions} />
        </div>
      </div>
      <div className={classes.inputArea}>
        <label htmlFor="name">
          <div className={classes.label}>Cardholder name</div>
        </label>
        <div className={classes.inputField}>
          <Field
            component="input"
            name="name"
            type="text"
            placeholder="Cardholder name"
            style={{ border: 'none', width: 'calc(100% - 2px)', fontSize: 16 }}
            required
          />
        </div>
      </div>
      <div className={classes.expirationAndSecurity}>
        <div className={clsx(classes.inputArea, classes.expiration)}>
          <label>
            <div className={classes.label}>Expiration</div>
          </label>
          <div className={classes.inputField}>
            <CardExpiryField options={cardElementOptions} />
          </div>
        </div>
        <div className={clsx(classes.inputArea, classes.security)}>
          <label>
            <div className={classes.label}>Security code</div>
          </label>
          <div className={classes.inputField}>
            <CardCvcField options={cardElementOptions} />
          </div>
        </div>
      </div>
      <div className={classes.inputArea}>
        <label htmlFor="zip">
          <div className={classes.label}>Zip/Postal Code</div>
        </label>
        <div className={classes.inputField}>
          <Field
            component="input"
            name="zip"
            type="text"
            placeholder="Zip/Postal Code"
            style={{ border: 'none', width: 'calc(100% - 2px)', fontSize: 16 }}
            required
          />
        </div>
      </div>
    </>
  )
}
