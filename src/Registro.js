import React from 'react'
import { Grid,Paper, Avatar, TextField, Button,Typography, Checkbox} from '@material-ui/core'
import LockOpenTwoTone from '@material-ui/icons/LockOpenTwoTone';
import { useForm } from './useForm';
import {motion} from 'framer-motion'
import {Outlet,Link} from 'react-router-dom'

const initialForm={
    name:"",
    apellido:"",
    email:"",
    tel:"",
    password:"",
    direccion:""
}
const validationsForm=(form)=>{
    let errors={}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexDireccion=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexpassword = /^.{1,100}$/;
    let regexTel=/^[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/;

    if(!form.name.trim()){
        errors.name="";
    }else if(!regexName.test(form.name.trim())){
        errors.name="solo acepta letras y espacios en Blanco"
    }
    if(!form.apellido.trim()){
        errors.apellido="";
    }else if(!regexApellido.test(form.apellido.trim())){
        errors.apellido="El campo 'Apellidos' solo acepta letras y espacios en Blanco"
    }

    if(!form.email.trim()){
        errors.email="";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email="El campo 'Email' es incorrecto"
    }
    if(!form.tel.trim()){
        errors.tel="";
    }else if(!regexTel.test(form.tel.trim())){
        errors.tel="El campo 'Tel' solo acepta numeros"
    }
    if(!form.password.trim()){
        errors.password="";
    }else if(!regexpassword.test(form.password.trim())){
        errors.password="El campo 'Contraseña' no debe exceder 100 caracteres"
    }
    if(!form.direccion.trim()){
        errors.direccion="";
    }else if(!regexDireccion.test(form.direccion.trim())){
        errors.direccion="El campo 'Apellidos' solo acepta letras y espacios en Blanco"
    }

    return errors;
}
let estiloError={
    FontWeight:"bold",
    color:"#dc3545"
}
function Registro() {
 
    const{form,errors,handleChange,handleBlur,handleSubmit,cargando,respuesta}=useForm(initialForm,validationsForm)

    const estiloPapel={padding :60,height:'100vh',width:350, margin:"50px auto", backgroundColor:'#f5f5f5', borderRadius:'10%'}
    const avatarEstilo={backgroundColor:'#f50057'}
    const btnestilo={margin:'10px 0'}
    return(
        <div>
        <motion.form  initial={{scale:0}} animate={{scale:1}} transition={{duration:2, ease:'easeIn', type:'spring'}}>
            <Paper elevation={20} style={estiloPapel}>
                <Grid align='center'>
                     <Avatar style={avatarEstilo}><LockOpenTwoTone/></Avatar>
                    <h2>Registro Neptuno</h2>
                </Grid>
                <TextField className='NombreUsuario' label="Nombres Usuario" placeholder='Nombre Completo' type='text' variant="outlined" fullWidth required autoFocus value={form.name} helperText={errors.name && <p style={estiloError}> {errors.name}</p>} onChange={handleChange} onBlur={handleBlur} name='name' margin='dense'/>
                <TextField className='ApellidoUsuario' label='Apellidos Usuario' placeholder='Apellido Completo' type='text' variant="outlined" fullWidth required value={form.apellido} onChange={handleChange} onBlur={handleBlur} name='apellido' margin='dense' helperText={errors.apellido && <p style={estiloError}> {errors.apellido}</p>}/>
                <TextField className='CorreoUsuario' label='Correo Usuario' placeholder='Enter Correo' type='email' variant="outlined" fullWidth required name='email' margin='dense'  value={form.email} onChange={handleChange} onBlur={handleBlur} helperText={errors.email && <p style={estiloError}> {errors.email}</p>}/>
                <TextField className='TelUsuario' label='Tel.' placeholder='Telefono' type='tel' variant="outlined" fullWidth required   value={form.tel} onChange={handleChange} margin='dense' onBlur={handleBlur} name='tel' inputProps={{maxLength:11}} helperText={errors.tel && <p style={estiloError}> {errors.tel}</p>}/>
                <TextField className='ContraUsuario'  label='Contraseña' placeholder='Enter Contraseña' type='password' variant="outlined" fullWidth required   value={form.password} onChange={handleChange} onBlur={handleBlur} margin='dense' name='password' helperText={errors.password && <p style={estiloError}> {errors.password}</p>}/>
                <TextField className='DireccionUsuario' label="Direccion" placeholder='Direccion' type='text' variant="outlined" fullWidth required value={form.direccion} helperText={errors.direccion && <p style={estiloError}> {errors.direccion}</p>} onChange={handleChange} onBlur={handleBlur} name='direccion' margin='dense'/>
                <Typography style={{fontSize:12, margin:'10px'}} >Al Registrarte, aceptas nuestros terminos y condiciones, y nuestras politicas de privacidad.<Link target={'_blank'} style={{fontSize:12}}  to="https://www.termsfeed.com/live/39d9721c-2c67-47d4-ae4f-75a2c6ccdedd">Mas informacion</Link></Typography>
                <Typography style={{fontSize:13}}>Acepto Terminos y condiciones<Checkbox name='Checked'></Checkbox></Typography>
                <Button className='BtnSubmitReg' type='submit' color='primary' variant="contained" style={btnestilo} fullWidth margin="normal" onClick={handleSubmit}>Registrarte</Button>
                <Typography style={{margin:"10px"}} > ¿Tienes una cuenta?
                     <Link to="/" >
                         Iniciar Sesion
                </Link>
                </Typography>
            </Paper>
        </motion.form>
        <Outlet/>
        {cargando}
        {respuesta}
        </div>
    )
}

export default Registro;