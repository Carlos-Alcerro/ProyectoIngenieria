import React from 'react'
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useForm} from './useForm'
import {motion} from 'framer-motion'
import {Outlet,Link} from 'react-router-dom'

const initialForm={
    email:"",
    password:""
}
const validationsForm=(form)=>{
    let errors={}
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   /*  La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
Puede tener otros símbolos. */
    let regexpassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,100}$/

    if(!form.email.trim()){
        errors.email="";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email="El campo 'Email' es incorrecto"
    }
        if(!form.password.trim()){
            errors.password="";
        }else if(!regexpassword.test(form.password.trim())){
            errors.password="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula"
        }

    return errors;
}
let estiloError={
FontWeight:"bold",
color:"#dc3545"
}

function Iniciosesion(){
    const{form,errors,handleChange,handleBlur,handleSubmit,cargando,respuesta}=useForm(initialForm,validationsForm)
    const estiloPapel={padding :60,height:'70vh',width:350, margin:"60px 130vh", backgroundColor:'#f5f5f5', borderRadius:'10%'}
    const avatarEstilo={backgroundColor:'#f50057'}
    const btnestilo={margin:'10px 0'}
    const tituloEstilo={fontFamily:"sans-serif", color:"#424242"}
    return(
        <div>
        <motion.form initial={{scale:0}} animate={{scale:1}} transition={{duration:2, ease:'easeIn', type:'spring'}}>
             <Paper elevation={20} style={estiloPapel}>
                <Grid align='center'>
                     <Avatar style={avatarEstilo}><LockOutlinedIcon/></Avatar>
                    <h2>Iniciar Sesion</h2>
                </Grid>
                <TextField label='Correo Usuario' placeholder='Enter Correo' type='email' variant="outlined" fullWidth autoFocus value={form.email} required onChange={handleChange} name='email' onBlur={handleBlur} margin='dense' helperText={errors.email && <p style={estiloError}> {errors.email}</p>} hel />
                <TextField label='Contraseña' placeholder='Enter Contraseña' inputProps={{minLength:6}} required type='password' variant="outlined" fullWidth
                value={form.password} onChange={handleChange} onBlur={handleBlur} name='password' margin='dense' helperText= {errors.password && <p style={estiloError}> {errors.password}</p>} />
                <Button className='BtnSubmit' type='submit' color='primary' variant="contained" style={btnestilo} fullWidth margin="normal" onClick={handleSubmit}>Iniciar Sesion</Button>
                <hr/>
                <Link to="/Registro" style={{textDecoration:"none"}}>
                <Button className='BtnRegistro' color='secondary' variant="contained" style={btnestilo} fullWidth margin="normal">Registrarte</Button>
                </Link>
            </Paper>
            <div style={{margin:'-400px 50vh', maxWidth:'400px'}}>
                <h1 style={{color:'#64b5f6'}}>Neptuno Ventas</h1>
                <h3 style={tituloEstilo}>Neptuno Ventas te ayuda a crecer como empresario y 
                poder mostrar tus productos e interactuar con nuestros usuarios.</h3>
            </div>
        </motion.form>
        <Outlet/>
        {cargando}
        {respuesta}
        </div>
    )
}
export default Iniciosesion;
