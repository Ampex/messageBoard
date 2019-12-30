import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default function User() {
  const [isLogged, setLogged] = useState(false)

  return (
    <div className='menu'>
      <Fab>
        <AddIcon />
      </Fab>
    </div>
  )
}
