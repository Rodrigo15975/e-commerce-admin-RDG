import { FormInputCoupon } from "../components"

export const formInputCoupon: FormInputCoupon[] = [
  {
    name: "code",
    text: "Code",
    type: "text",
    componenType: "Input",
    showButton: true,
  },

  {
    name: "discount",
    text: "Discount Amount",
    type: "text",
  },

  {
    name: "isGlobal",
    text: "Is this coupon global?",
    type: "checkbox",
  },
  {
    name: "isNew",
    text: "Is this a new coupon?",
    type: "checkbox",
  },

  {
    name: "espiryDate",
    text: "Select to date of expiry date",
    type: "date",
  },
]
