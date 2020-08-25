import React from 'react'
import { TextField } from '@material-ui/core';
import { Field } from 'formik';

const MuiText = ({ name, label, required = "false", type = "text", variant }) => {
	return (
		<div>
			<Field
				as={TextField}
				name={name}
				label={label}
				required={required}
				type={type}
				variant={variant}
			/>
		</div>
	)
}

export default MuiText