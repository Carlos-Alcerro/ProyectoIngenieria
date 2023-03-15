//componentes para Login
import {useState} from 'react'
import axios from 'axios'
export const useForminicio=(initialForm, validateForm)=> {
const [form, setForm]=useState(initialForm)
const [errors, setErrors]=useState({})

const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({
        ...form,
        [name]:value
    })
}
const handleBlur=(e)=>{
    handleChange(e);
    setErrors(validateForm(form));
}

const handleSubmit= async e=>{
    e.preventDefault()
    setErrors(validateForm(form));

    if(Object.keys(errors).length===0){
        alert('Enviando Formulario')
       await axios.post("http://localhost:3000/api/user/login",{
            email:form.email,
            password:form.password       
        }).then(res=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
            setForm(initialForm)
        }).catch((err)=>{
            console.log(err.response.data)
        })
}
}
  
return{
    form,errors,handleChange,handleBlur,handleSubmit
}
}