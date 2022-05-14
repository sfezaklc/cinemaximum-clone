import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Header from '../Components/Header/Header';
import { UserContext } from '../Contexts/UserContext';

export default function Login() {
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext);
  const users = [
    {
      id: 1,
      email: 'serife@gmail.com',
      password: '123'
    },
    {
      id: 2,
      email: 'feza@gmail.com',
      password: 'feza'
    },
    {
      id: 1,
      email: 'leyla@gmail.com',
      password: 'leylo'
    }
  ]
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      //const userValues = JSON.stringify(values)
      console.log("uservalues", values)

      if (!values)
        return

      let a = users.filter(element => element.email === values.email && element.password === values.password)
      console.log("a", a)
      a.length > 0 ? setUser(a[0]) : alert('Hatalı Kullanıcı adı veya Şifre')
      
    },
  });
  useEffect(() => {
    console.log(user)
    if (user){
      localStorage.setItem('User', user.email);
      navigate('/',{state: user.email})
    }
  }, [user])
  return (
    <div>
      <Header />
      <div className='container text-start mt-5' style={{ width: '400px' }}>
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
