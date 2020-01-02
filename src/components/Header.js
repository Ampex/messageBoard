import React from 'react'
import {
  IconButton,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Backdrop
} from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { indigo, red } from '@material-ui/core/colors'
import SendIcon from '@material-ui/icons/Send'

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
  // overrides: {
  //   MuiInput: {
  //     root: {
  //       color: 'white'
  //     }
  //   },
  //   MuiFormLabel: {
  //     root: {
  //       fontFamily: 'Source Code Pro, monospace',
  //       color: 'white'
  //     }
  //   },
  //   MuiFormHelperText: {
  //     root: {
  //       fontFamily: 'Source Code Pro, monospace',
  //       color: 'white'
  //     }
  //   }
  // }
})

const Header = props => {
  const { error, submit, change, value, helperText } = props

  return (
    <ThemeProvider theme={theme}>
      <div className='header'>
        <FormControl required fullWidth error={error}>
          <InputLabel>Your message</InputLabel>
          <Input
            inputProps={{ maxLength: 160 }}
            multiline
            onChange={change}
            value={value}
          />

          <FormHelperText>
            {helperText ? helperText : `${props.length} / 160`}
          </FormHelperText>
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
