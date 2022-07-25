import { useState, useEffect } from 'react';

const useLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    // state with errors
    const [errors, setErrors] = useState({});



    // handle form change function (after a user introduce details)
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };
    return { handleChange, values, handleSubmit };
};

export default useLogin;