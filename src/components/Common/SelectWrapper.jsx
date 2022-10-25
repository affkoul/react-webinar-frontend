import React from 'react'
import PropTypes from 'prop-types'

// material-ui/core
import { FormControl, InputLabel, Select } from '@material-ui/core'

function SelectWrapper({
  label,
  labelId,
  id,
  name,
  value,
  onChange,
  children,
  ...other
}) {
  return (
    <FormControl variant="outlined" margin="normal" fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        {...other}
      >
        {children}
      </Select>
    </FormControl>
  )
}

SelectWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
}

SelectWrapper.defaultProps = {
  children: <div />,
}

export default SelectWrapper
