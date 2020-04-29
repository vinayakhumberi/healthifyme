export const EMAIL_REGEX = new RegExp(
  /^(?=.{5,}$)[A-Za-z0-9!#$%^&*()_+-=]+[.]{0,3}[A-Za-z0-9!#$%^&*()_+-=]+[@]{1}[a-zA-Z]+[.]{1}[a-zA-Z]+[.]{0,1}[a-zA-Z]+$/
);

export const PASSWORD_REGEX = new RegExp(
  /^(?=.{6,}$)(?=.*?[A-Z]).*$/
);

export const OTP_REGEX = new RegExp(
  /^[0-9]{6}$$/
);