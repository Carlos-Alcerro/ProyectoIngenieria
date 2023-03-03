import {useState} from 'react'
import { helpHttp } from './helpHttp'

export const useForm=(initialForm, validateForm)=> {
const [form, setForm]=useState(initialForm)
const [errors, setErrors]=useState({})
const [cargando, setCargando]=useState(false)
const [respuesta, setRespuesta]=useState(null)


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

const handleSubmit=(e)=>{
    e.preventDefault()
    setErrors(validateForm(form));

    if(Object.keys(errors).length===0){
        alert('Enviando Formulario')
        setCargando(true)
        helpHttp().post("https://formsubmit.co/ajax/carlosalcerrolainez2017@gmail.com",{
            body:form,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
            },
        }).then((res)=>{
            setCargando(false)
            setRespuesta(true)
            setForm(initialForm)
        })
    }else{
        return;
    }
}
  
return{
    form,errors,handleChange,handleBlur,handleSubmit,cargando,respuesta
}
}
