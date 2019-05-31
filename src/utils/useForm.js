import { useState } from 'react';

const useForm = callback => {
    
    //initial state is an object
    const [values, setValues] = useState({});

    //simply prevents form refresh and uses whatever callback we provide
    const handleSubmit = e => {
        if (e) e.preventDefault();
        callback();
    }

    const handleChange = e => {
        e.persist();
        //will update the values object and maintain state via spread ... operator!
        //it will use the e.target.name to generate the key for the input
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    //return our object for this hook
    return {
        handleChange,
        handleSubmit,
        values
    }

}

export default useForm;