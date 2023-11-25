// retorna true si todos los campos no son vacios

export const validarCampos = (campos) => {
  let valid = true;
  campos.forEach((campo) => {
    if (campo === "") {
      valid = false;
    }
  });
  return valid;
};
