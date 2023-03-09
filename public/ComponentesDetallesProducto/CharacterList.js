import {useState,useEffect} from 'react'
import { Grid, Paper} from '@material-ui/core'
import {Outlet, Link} from 'react-router-dom'
function CharacterList() {
const [products,setProducts] =useState([])
    useEffect(()=>{
        async function fethData(){
            const response = await fetch(`https://rickandmortyapi.com/api/character/`)
            const data = await response.json()
            setProducts(data.results) 
        }
        fethData()
    }, []);
  return (
    <div style={{backgroundColor:'white'}}>
    <div >
    <h1 style={{textAlign:'center', display:'inherit', padding:{y:4}, color:'black', margin:'10px'}}>Posibles Productos</h1>
    </div>
    <Grid container columns={{xs:4,sm:8,md:12}} style={{padding:'50px 50px 300px'}} >
        {products.map(character=>{
            return(
                <Link key={character.id} to={`/productos/${character.id}`} target={'_blank'} style={{textDecoration:'none'}}>
                <Paper elevation={5} style={{height:'65vh',width:'250px', margin:'10px', borderRadius:'10px', backgroundColor:'whitesmoke', marginRight:'40px'}} >
                    <div style={{textAlign:'justify'}}>
                     <img style={{width:'250px', height:'250px' , borderRadius:'10px'}} src={character.image} alt={character.name} />
                    <h5 style={{margin:'5px'}}>{character.name}</h5>
                    <p style={{fontSize:10, margin:'5px'}}>Precio</p>
                     <h6 style={{margin:'5px'}}>${character.status}</h6>
                     <h6 style={{margin:'5px'}}>{character.created}</h6>
                     </div>
                </Paper>
                </Link>
            )
        })
    }
    <Outlet/>
    </Grid>
    </div>
  )
}

export default CharacterList
