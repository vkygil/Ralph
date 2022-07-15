export default function validateInfo(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Correo electronico requerido'
    } else if (!/^[A-Z0-9._%=-])
};