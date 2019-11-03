import React from 'react'
import { IconButton } from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { indigo } from '@material-ui/core/colors'
import SendIcon from '@material-ui/icons/Send'

const theme = createMuiTheme ({

    palette: {
        primary: {
            light: 'white',
            main: indigo[50],
            dark: '#d2d2d2',
            contrastText: '#fff'
        },
        secondary: {
            light: '#385efb',
            main: indigo[50],
            dark: 'white',
            contrastText: '#fff'
        }
    },
    overrides: {
        MuiFormLabel: {
            root: {
                fontFamily: 'Source Code Pro, monospace',
                color: 'white'
            }
        },
        MuiInputBase: {
            root: {
                fontFamily: 'Source Code Pro, monospace',
                color: 'white'
            }
        }
    }
})

const Header = props => {
    
    return (
        <ThemeProvider theme={theme}>
            <div className='header'>
                <ValidatorForm
                    onSubmit={props.submit}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                    multiline
                    fullWidth={true}
                    name='message'
                    label='Your message'
                    variant='outlined'
                    onChange={props.change}
                    value={props.value}
                    validators={['minStringLength:3']}
                    errorMessages={['this field is required', 'email is not valid']}
                    ></TextValidator>

                    <IconButton style={{marginLeft: 10}} color='primary' type='submit'>
                        <SendIcon />
                    </IconButton>
                </ValidatorForm>
            </div>
        </ThemeProvider>
    )
}
 
export default Header