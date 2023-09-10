import * as Yup from "yup";
export const SchemaListado = {
  name: Yup.string().required("Campo requerido"),
  email: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
};

export const SchemaForm = Yup.object().shape(SchemaListado);

type user = {
  name: string
  email: string
  phone: string
}

export const InitialValue: user = {
  name: "",
  email: "",
  phone: "",
};
