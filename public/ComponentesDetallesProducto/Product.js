import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import {Grid, Typography } from '@material-ui/core';

const Product = () => {
    const {id}=useParams()
    const [product, setProduct]=useState([])
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        const getProduct =  async ()=>{
            setLoading(true)
            const response= await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[id]);

    const Loading= ()=>{
        return(
            <>
            Loading....
      </>
        )
    }

    const ShowProducts= ()=>{
        return(
            <Grid columns={{xs:4,sm:8,md:12}}>
                <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
            <ImageListItem key={product.image}>
            <img
              src={product.image}
              srcSet={product.image}
              alt={product.name}
            />
            </ImageListItem>
      </ImageList>
    </Box>
    <hr/>
    <div conrainer  style={{margin:'-450px 510px', width:'50%',height:'50%'}}>
            <Typography style={{marginBottom:'10px', wordBreak:'break-all'}}><b  style={{color:'firebrick'}}>Descripcion del producto :</b>bdjhbfwrfbjhwbfj D jf  Fk fJ FDFJj fkkFanaf aKFBBdkaf DKA  Akaf  KKADFBkadf  KDF kjkfbbJAF kfbAFBAjfska SFAjafa JF </Typography>
            <hr/>
            <Typography style={{marginBottom:'10px', color:'black', fontFamily:'sans-serif', fontWeight:'bold'}} variant='h5'>Detalles del Producto</Typography>
            <Typography style={{marginBottom:'10px',maxHeight:'500px', maxWidth:'500px',fontFamily:'sans-serif'}} ><b  style={{color:'firebrick'}}>Nombre del Producto:</b> {product.name}</Typography>
            <Typography style={{marginBottom:'10px',fontFamily:'sans-serif'}}><b style={{color:'firebrick'}}>Precio:</b>${product.status}</Typography>
            <Typography style={{marginBottom:'10px',fontFamily:'sans-serif'}}><b style={{color:'firebrick'}}>Departamento:</b>{product.species}</Typography>
            <Typography style={{marginBottom:'10px',fontFamily:'sans-serif'}}><b style={{color:'firebrick'}}>Estado:</b>Excelente</Typography>
            <Typography style={{marginBottom:'10px',fontFamily:'sans-serif'}}><b style={{color:'firebrick'}}>Fecha de publicacion:</b>{product.created}</Typography>
        </div>
            </Grid>
        )
    }

  return (
    <div>
      <div className='container'>
        <div>
            {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>
    </div>
  )
}

export default Product
