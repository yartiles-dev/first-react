import React from "react";

import './form-input.style.scss'

export interface PropsInput {
    type?: string;
    name?: string ;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    label?: string //LabelHTMLAttributes<HTMLLabelElement>
    required?: boolean
}

const FormInput = (Props: PropsInput) => {
    const {handleChange, label, ...otherProps} = Props
    return (
    <div className="group">
        <input {...otherProps} className="form-input" onChange={handleChange}/>
        {
            label ? (
                <label className={`${otherProps.value?.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
)
}

export default FormInput