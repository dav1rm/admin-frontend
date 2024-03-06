import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email().required("Email é obrigatório"),
  password: Yup.string().min(6).required("Senha é obrigatório"),
  repeat_password: Yup.string().oneOf(
    [Yup.ref("password")],
    "As senhas devem ser iguais"
  ),
  cpf: Yup.string().max(14).required("CPF é obrigatório"),
  rg: Yup.string().optional(),
  cellphone: Yup.string().max(20).optional(),
  telephone: Yup.string().max(20).required("Telefone é obrigatório"),
  birthday: Yup.string().required("Data de nascimento é obrigatório"),
  postcode: Yup.string().required("CEP é obrigatório"),
  street: Yup.string().required("Rua é obrigatório"),
  number: Yup.string().required("Número é obrigatório"),
  neighborhood: Yup.string().optional(),
  city: Yup.string().required("Cidade é obrigatório"),
  state: Yup.string().max(2).required("UF é obrigatório"),
  mother: Yup.string().optional(),
  father: Yup.string().optional(),
  sign: Yup.string().optional(),
  height: Yup.string().optional(),
  weight: Yup.string().optional(),
  gender: Yup.string().optional(),
  blood_type: Yup.string().optional(),
  color: Yup.string().optional(),
});
