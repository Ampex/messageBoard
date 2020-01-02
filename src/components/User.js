import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { IconButton, Tooltip, Zoom } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[3],
    fontSize: 12
  }
}))(Tooltip)

export default function User() {
  const [isLogged, setLogged] = useState(false)

  return (
    <div className='user'>
      <Zoom in>
        <LightTooltip title='Login / Register' placement='left'>
          <IconButton color='secondary'>
            <AccountCircleIcon />
          </IconButton>
        </LightTooltip>
      </Zoom>
    </div>
  )
}
