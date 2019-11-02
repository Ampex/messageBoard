import React from 'react'
import { TextField, IconButton } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { indigo } from '@material-ui/core/colors'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const theme = createMuiTheme ({

    palette: {
        primary: {
            light: 'white',
            main: indigo[50],
            dark: '#d2d2d2',
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

                <TextField
                required
                multiline
                fullWidth={true}
                name='message'
                label='message'
                variant='outlined'
                onChange={props.change}
                value={props.value}
                ></TextField>

                <IconButton color='primary' onClick={props.submit}>
                    <ArrowUpwardIcon />
                </IconButton>
            
            </div>
        </ThemeProvider>
    )
}
 
export default Header