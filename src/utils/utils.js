import * as Yup from "yup";

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "object" && Object.entries(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const wait = (duration = 1000) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

export const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

export const validationSchemaRegister = Yup.object().shape({
  organization: Yup.string().required("The name of organization is required"),
  country: Yup.string().required("Select the country"),
  firstname: Yup.string()
    .required("First Name is required")
    .min(2, "The first name must have at least 2 caractors"),
  lastname: Yup.string()
    .required("Last Name is required")
    .min(2, "The last name must have at least 2 caractors"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "The password must have at least 6 caractors"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "The password must match!"
  ),
  gcu: Yup.boolean().oneOf(
    [true],
    "You have to be agree with the terms and privacy of using."
  ),
});

export const validationSchemaLogin = Yup.object().shape({
  username: Yup.string().required(
    "Username or telephone or E-mail is required."
  ),
  password: Yup.string().required("Password is required."),
});

export const validationCompleteInscriptionStepOne = Yup.object().shape({
  firstname: Yup.string()
    .required("Provide firstname")
    .min(2, "Firstname requires at least 2 caractors"),
  lastname: Yup.string()
    .required("Provide lastname")
    .min(2, "Lastname requires at least 2 caractors"),
  gender: Yup.string().required("Gender is required"),
  telephone: Yup.number()
    .typeError("You should specify a phone number")
    .required("Phone number is required")
    .min(8, "Input a valid phone number"),
  mail: Yup.string().email("Input a valid address e-mail"),
  birth: Yup.string().required("Provide the date of your Birth"),
  birth_location: Yup.string().required("Birth location is required"),
  nationality: Yup.string().required("nationality is required"),
});

export const validationCompleteInscriptionStepTwo = Yup.object().shape({
  orga_name: Yup.string()
    .required("organization's name is required")
    .min(2, "organization's name require at least 2 caractors"),
  orga_type: Yup.string().required("organization's type is required"),
  entity_telephone: Yup.string().required("organization's telephone is required"),
  entity_mail: Yup.string().required("organization's e-mail is required"),
  entity_address: Yup.string().required("organization's address is required"),
  orga_country: Yup.string().required("organization based country is required"),
  orga_description: Yup.string().required("organization's description is required"),
});

export const validationCompleteInscriptionStepThree = Yup.object().shape({
  department_title: Yup.string().required("Department title is required."),
  service_title: Yup.string().required("Service title is required"),
});

export const validationCompleteInscriptionStepFour = Yup.object().shape({
  confirmation_code: Yup.string().required("Input confirmation's code"),
});


export const validationExtension = Yup.object().shape({
  telephone: Yup.string().required("Extension's telephone is required"),
  mail: Yup.string().email("Extension's invalid e-mail"),
  address: Yup.string().required("Extension's address is required"),
});

export const validationDepartment = Yup.object().shape({
  entity_id: Yup.string().required("Extension's is required"),
  title: Yup.string().required("Department's title is required"),
});

export const validationService = Yup.object().shape({
  entity_id: Yup.string().required("Select Extension"),
  department_id: Yup.string().required("Select department"),
  title: Yup.string().required("Service's title is required"),
});

export const validationPartner = Yup.object().shape({
  partner_type: Yup.string().required("Partner's type is required"),
  partner_form: Yup.string().required("Partne's form is required"),
  names: Yup.string().required("Partner's names is required"),
  telephone: Yup.string().required("Partner's telephone is required"),
  mail: Yup.string().email("Input a valid address e-mail"),
  address: Yup.string().required("Partner's address is required"),
  description: Yup.string().required("Partner's description is required"),
});
