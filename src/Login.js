import React from 'react'
import "./index.css";
import * as Yup from "yup"
import { useFormik} from "formik"

const initial={
  email:"",
  name:"",
  password:"",
  password2:""
}

const Login = () => {
  const schema = Yup.object().shape({
      name: Yup.string().required("Required.").min(3,"Must have at least 2 characters."),
      email:Yup.string().required("Required.").email("Invalid Email."),
      password:Yup.string().required("Required.").min(8,"Must have minimum 8 characters."),
      password2:Yup.string().required("Required.").oneOf([Yup.ref("password"),null],"Passwords must match.")
  })
  const initialvalues= initial;
  const {values,errors,touched,handleChange,handleSubmit,handleBlur}=useFormik({
    initialValues:initial,
    validationSchema:schema,
    onSubmit:(values,action)=> {
      console.log(values)
      action.resetForm()
    }
  })
  console.log(errors)
  return (
    <div className='login'>
      <div className='form'>
        <form noValidate onSubmit={handleSubmit}>
          <p className='welcome'>Welcome</p>
          <label htmlFor='name'>Name</label>
          <input id="name" className="form-control inp_txt" type="name" name="name" autoComplete='off' 
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {errors.name&&touched.name ? (<p className='error'>{errors.name}</p>):null}
          <label htmlFor='email'>Email</label>
          <input id="email" className="form-control inp_txt" type="email" name="email" autoComplete='off'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {errors.email&&touched.email?(<p className='error'>{errors.email}</p>):null}
          <label htmlFor='pw'>Password</label>
          <input id="pw" className="form-control" type="password" name="password" autoComplete='off'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {errors.password&&touched.password ?(<p className='error'>{errors.password}</p>):null}
          <label htmlFor='conpw'>Confirm Password</label>
          <input id="conpw" className="form-control" type="password" name="password2" autoComplete='off'
          value={values.password2}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {errors.password2&&touched.password2?(<p className='error'>{errors.password2}</p>):null}
          <button type='submit'>Register</button>
          <p className='already'>Already Have an account ?<a href='#'> Sign In</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login
