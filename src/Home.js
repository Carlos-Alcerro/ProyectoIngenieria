import React from 'react'
import AppBar from '@material-ui/core/AppBar' 
import Toolbar from '@material-ui/core/Toolbar'
import Typograpgy from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { Button, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles =makeStyles(theme=>({
  offset: theme.mixins.toolbar,
  menuButton:{
    marginRight:theme.spacing(2),
  },title:{
    flexGrow:1,
  }
}))

const Home = () => {
  const classes=useStyles()
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton color='inherit' aria-label='menu' className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typograpgy variant='h6' className={classes.title}>
            Neptuno Ventas
          </Typograpgy>
          <Button type='text' color='inherit'>Productos</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}

export default Home

