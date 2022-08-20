import * as Yup from "yup"

export const signUpSchema = Yup.object( {
  name:Yup.string().min(3).max(25).required("please enter your name"),
  emali:Yup.string().email().required("plz enter your email"),
  password:Yup.string().min(7).required("please enter the pasword"),
  conform_password:Yup.string().required().oneOf([Yup.ref("password"),null] ,"passwprd must match")
})