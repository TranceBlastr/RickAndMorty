const validation = (data) => {
  let errors = {};

  if (!data.email.includes("@")) {
    errors.e1 = "Email invalido";
  }
  if (!data.email) {
    errors.e2 = "Ingrese email";
  }
  if (data.email.length > 35) {
    errors.e3 = "El email debe ser menor a 36 caracteres";
  }
  if (!/\d/.test(data.password)) {
    errors.p1 = "La contraseña debe tener al menos un numero.";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = "La password debe tener entre 6 y 10 caracteres.";
  }
  return errors;
};

export default validation;