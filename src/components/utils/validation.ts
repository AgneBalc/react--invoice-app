import * as Yup from "yup";

const addressSchema = Yup.object({
  street: Yup.string()
    .trim()
    .min(2, "Too short! Must be at least 2 characters")
    .required("Required"),
  city: Yup.string()
    .trim()
    .min(2, "Too short! Must be at least 2 characters")
    .required("Required"),
  postCode: Yup.string()
    .trim()
    .min(2, "Too short! Must be at least 2 characters")
    .required("Required"),
  country: Yup.string()
    .trim()
    .min(2, "Too short! Must be at least 2 characters")
    .required("Required"),
});

export const invoiceSchema = Yup.object({
  description: Yup.string()
    .trim()
    .min(2, "Too short! Must be at least 2 characters")
    .required("Required"),
  paymentTerms: Yup.string(),
  clientName: Yup.string()
    .trim()
    .min(2, "Too short! Must be at least 2 characters")
    .required("Required"),
  clientEmail: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Invalid Email!"
    )
    .required("Required"),
  senderAddress: addressSchema,
  clientAddress: addressSchema,
  items: Yup.array()
    .min(1, "An item must be added")
    .of(
      Yup.object({
        name: Yup.string()
          .trim()
          .min(2, "Too short! Must be at least 2 characters")
          .required("Required"),
        quantity: Yup.number()
          .positive("Quantity must be a positive number")
          .integer("Quantity must be an integer number")
          .required("Required"),
        price: Yup.number()
          .positive("Price must be a positive number")
          .required("Required"),
      })
    ),
});
