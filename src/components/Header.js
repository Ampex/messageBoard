import React from 'react'
import {
  IconButton,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core'
import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { indigo, red } from '@material-ui/core/colors'
import SendIcon from '@material-ui/icons/Send'

const PrimaryInput = withStyles(theme => ({
  root: {
    color: '#ffffff',
    fontSize: 14
  }
}))(Input)
const PrimaryInputLabel = withStyles(theme => ({
  root: {
    color: '#ffffff',
    fontFamily: 'Source Code Pro, monospace'
  }
}))(InputLabel)
const FormHelper = withStyles(theme => ({
  root: {
    color: '#ffffff',
    fontFamily: 'Source Code Pro, monospace'
  }
}))(FormHelperText)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5682fb'
    },
    secondary: {
      light: '#ffffff',
      main: indigo[50],
      dark: 'white',
      contrastText: '#fff'
    },
    error: { main: red[400] }
  }
})

const Header = props => {
  const { error, submit, change, value, helperText } = props

  return (
    <ThemeProvider theme={theme}>
      <div className='header'>
        <FormControl required fullWidth error={error}>
          <PrimaryInputLabel>Your message</PrimaryInputLabel>
          <PrimaryInput
            inputProps={{ maxLength: 160 }}
            multiline
            onChange={change}
            value={value}
          />
          <FormHelper>
            {helperText ? helperText : `${props.length} / 160`}
          </FormHelper>
        </FormControl>
        <IconButton
          style={{ marginLeft: 15 }}
          disabled={error}
          color='secondary'
          onClick={submit}
        >
          <SendIcon />
        </IconButton>
      </div>
    </ThemeProvider>
  )
}

export default Header
