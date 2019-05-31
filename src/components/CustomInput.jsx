import React from 'react';

const CustomInput = ({ value, setValue, label, type, placeholder, required = false }) => {
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-10">
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    className="form-control p-1 my-1 shadow-sm" />
            </div>
        </div>
    );
}

export default CustomInput;