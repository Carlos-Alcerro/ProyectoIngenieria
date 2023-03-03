import React from 'react'
import { Grid,Paper, Avatar, TextField, Button,Typography, Checkbox} from '@material-ui/core'
import LockOpenTwoTone from '@material-ui/icons/LockOpenTwoTone';
import { useForm } from './useForm';
import {motion} from 'framer-motion'
import {Outlet,Link} from 'react-router-dom'

const initialForm={
    firstname:"",
    secondname:"",
    firstsurname:"",
    secondsurname:"",
    addres:"",
    phone:"",
    password:"",
    email:"",
    birthdate:"",
    dni:""
}
const validationsForm=(form)=>{
    let errors={}
    let regexPname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexSname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPapellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexSapellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexDireccion=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexpassword = /^.{1,100}$/;
    let regexTel=/^[0-9]/;
    let regexDni=/^[0-9]/;

    if(!form.firstname.trim()){
        errors.nameuno="";
    }else if(!regexPname.test(form.firstname.trim())){
        errors.firstname="solo acepta letras y espacios en Blanco"
    }
    if(!form.secondname.trim()){
        errors.secondname="";
    }else if(!regexSname.test(form.secondname.trim())){
        errors.secondname="solo acepta letras y espacios en Blanco"
    }
    if(!form.firstsurname.trim()){
        errors.firstsurname="";
    }else if(!regexPapellido.test(form.firstsurname.trim())){
        errors.firstsurname="El campo 'Apellidos' solo acepta letras y espacios en Blanco"
    }
    if(!form.secondsurname.trim()){
        errors.secondsurname="";
    }else if(!regexSapellido.test(form.secondsurname.trim())){
        errors.secondsurname="El campo 'Apellidos' solo acepta letras y espacios en Blanco"
    }

    if(!form.email.trim()){
        errors.email="";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email="El campo 'Email' es incorrecto"
    }
    if(!form.phone.trim()){
        errors.phone="";
    }else if(!regexTel.test(form.phone.trim())){
        errors.phone="El campo 'Tel' solo acepta numeros"
    }
    if(!form.password.trim()){
        errors.password="";
    }else if(!regexpassword.test(form.password.trim())){
        errors.password="El campo 'Contraseña' no debe exceder 100 caracteres"
    }
    if(!form.addres.trim()){
        errors.addres="";
    }else if(!regexDireccion.test(form.addres.trim())){
        errors.addres="El campo 'Direccion' solo acepta letras y espacios en Blanco"
    }
    if(!form.dni.trim()){
        errors.dni="";
    }else if(!regexDni.test(form.dni.trim())){
        errors.dni="DNI incorrecta"
    }

    return errors;
}
let estiloError={
    FontWeight:"bold",
    color:"#dc3545"
}
function Registro() {
 
    const{form,errors,handleChange,handleBlur,handleSubmit,cargando,respuesta}=useForm(initialForm,validationsForm)

    const estiloPapel={padding :60,height:'140vh',width:350, margin:"50px auto", backgroundColor:'#f5f5f5', borderRadius:'10%'}
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
                <TextField className='Primernombre' label="Primer Nombre" placeholder='Primer Nombre' type='text' variant="outlined" fullWidth required autoFocus value={form.firstname} helperText={errors.firstname && <p style={estiloError}> {errors.firstname}</p>} onChange={handleChange} onBlur={handleBlur} name='firstname' margin='dense'/>
                <TextField className='Segundonombre' label="Segundo Nombre" placeholder='Segundo Nombre' type='text' variant="outlined" fullWidth value={form.secondname} helperText={errors.secondname && <p style={estiloError}> {errors.secondname}</p>} onChange={handleChange} onBlur={handleBlur} name='secondname' margin='dense'/>
                <TextField className='Primerapellido' label='Primer Apellido' placeholder='Primer Apellido' type='text' variant="outlined" fullWidth required value={form.firstsurname} onChange={handleChange} onBlur={handleBlur} name='firstsurname' margin='dense' helperText={errors.firstsurname && <p style={estiloError}> {errors.firstsurname}</p>}/>
                <TextField className='Segundoapellido' label='Segundo Apellido' placeholder='Segundo Apellido' type='text' variant="outlined" fullWidth required value={form.secondsurname} onChange={handleChange} onBlur={handleBlur} name='secondsurname' margin='dense' helperText={errors.secondsurname && <p style={estiloError}> {errors.secondsurname}</p>}/>
                <TextField className='CorreoUsuario' label='Correo Usuario' placeholder='Enter Correo' type='email' variant="outlined" fullWidth required name='email' margin='dense'  value={form.email} onChange={handleChange} onBlur={handleBlur} helperText={errors.email && <p style={estiloError}> {errors.email}</p>}/>
                <TextField className='TelUsuario' label='Tel.' placeholder='Telefono' type='tel' variant="outlined" fullWidth required   value={form.phone} onChange={handleChange} margin='dense' onBlur={handleBlur} name='phone' inputProps={{maxLength:8}} helperText={errors.phone && <p style={estiloError}> {errors.phone}</p>}/>
                <TextField className='ContraUsuario'  label='Contraseña' placeholder='Enter Contraseña' type='password' variant="outlined" fullWidth required   value={form.password} onChange={handleChange} onBlur={handleBlur} margin='dense' name='password' helperText={errors.password && <p style={estiloError}> {errors.password}</p>}/>
                <TextField className='DireccionUsuario' label="Direccion" placeholder='Direccion' type='text' variant="outlined" fullWidth required value={form.addres} helperText={errors.addres && <p style={estiloError}> {errors.addres}</p>} onChange={handleChange} onBlur={handleBlur} name='addres' margin='dense'/>
                <Typography style={{fontSize:13}}>Fecha de Nacimiento</Typography>
                <TextField className='Fecha'  type='date' variant="outlined" fullWidth required value={form.birthdate} onChange={handleChange} onBlur={handleBlur} name='birthdate' margin='dense'/>
                <TextField className='DNI'  label='DNI' placeholder='DNI' type='text' variant="outlined" fullWidth required   value={form.dni}  onChange={handleChange} onBlur={handleBlur} margin='dense' name='dni' inputProps={{maxLength:13}} helperText={errors.dni && <p style={estiloError}> {errors.dni}</p>}/>
                <Typography style={{fontSize:12, margin:'10px'}} >Al Registrarte, aceptas nuestros terminos y condiciones, y nuestras politicas de privacidad.<Link target={'_blank'} style={{fontSize:12}}  to="https://www.termsfeed.com/live/39d9721c-2c67-47d4-ae4f-75a2c6ccdedd">Mas informacion</Link></Typography>
                <Typography style={{fontSize:13}}>Acepto Terminos y condiciones<Checkbox name='Checked'  onChange={handleChange}></Checkbox></Typography>
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
