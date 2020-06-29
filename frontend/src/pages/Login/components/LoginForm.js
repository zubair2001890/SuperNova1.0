<InputLabel
className={classes.textField}
htmlFor="standard-adornment-email"
>
Email
</InputLabel>
<Input
onChange={handleChange("email")}
id="standard-adornment-email"
value={values.email}
fullWidth
endAdornment={
  <InputAdornment position="end">
    <AccountCircle />
  </InputAdornment>
}
/>
<InputLabel
className={classes.textField}
htmlFor="standard-adornment-password"
>
Password
</InputLabel>
<Input
fullWidth
onChange={handleChange("password")}
id="standard-adornment-password"
type={values.showPassword ? "text" : "password"}
value={values.password}
endAdornment={
  <InputAdornment>
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
    >
      {values.showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>
}
/>
</>