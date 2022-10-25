import React from 'react'

// material-ui/core
import { TextField } from '@material-ui/core'

function TextFieldWrapper({ ...props }) {
  return <TextField variant="outlined" margin="normal" fullWidth {...props} />
}

export default TextFieldWrapper
