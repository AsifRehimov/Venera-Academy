import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents } from '../redux/component/language'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, TextField } from '@mui/material';
import { EducationAbroadDiv, FormError, FormInfo } from './EducationAbroadStyle.style';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {  useSnackbar } from 'notistack';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EducationAbroad() {
  const dispatch = useDispatch()
  const students = useSelector(state => state.students.students)
  const status = useSelector(state => state.students.status)
  const error = useSelector(state => state.students.error)

  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])

  const { enqueueSnackbar } = useSnackbar();


  const [open, setOpen] = React.useState(false);
  const [universitet, setUniversitet] = useState();
  const [nameSurname, setNameSurname] = useState("");
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [nowUniversitet, setNowUniversitet] = useState('');
  const [profession, setProfession] = useState('');
  const [emptyPlace, setEmptyPlace] = useState(false);

  const handleClickOpen = (item) => {
    setOpen(true);
    setUniversitet(item);
  };

  const handleClose = () => {
    setOpen(false);
    setEmptyPlace(false)
    setNameSurname('')
    setNumber('')
    setMail('')
    setNowUniversitet('')
    setProfession('')
  };

const sendClick = () =>{
  if((universitet && nameSurname && number && mail && nowUniversitet && profession) === '') {
     setEmptyPlace(true) 
   }else{
     setOpen(false)
    setEmptyPlace(false)
     setNameSurname('')
    setNumber('')
    setMail('')
    setNowUniversitet('')
    setProfession('')
    enqueueSnackbar('Uğurla qeydə alındı ', { variant: 'success' });

   }
}


  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  } else if (status === 'failed') {
    return <div>Error: {error}</div>
  } else {
    return (
      <EducationAbroadDiv>
        <p className='title'>Xaricdə təhsil</p>
        <p className='educationarea'>Biz hələki yalnız Türkiyə universitet və kollecləri ilə əməkdaşlıq edirik. Ən tez bir zamanda avropa ölkələrinədə əlçatanlıq mümkün olacaq.</p>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16}>

            {students.map((item, index) => {
              return (
                <Card sx={{ maxWidth: 345 }} key={index} className="card" onClick={() => handleClickOpen(item.name)}> 
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://wiki.documentfoundation.org/images/1/1c/Metu5.jpg"
                      alt="university"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>)
            })}
          </Grid>
        </Grid>
        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} style={{background:"#0B2D4D"}}>
          <Toolbar >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          <Typography>Qeydiyyat</Typography>
       
          </Toolbar>
        </AppBar>
        <List>
          <FormInfo>Formu tam və diqqətlə doldurun.</FormInfo>
          {emptyPlace ? <FormError>Bütün xanaları doldurun</FormError> : ""}
        <form style={{width:"200px", margin:"20px auto"}}>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Universitet"
          variant="outlined"
          value={universitet}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Ad,Soyad"
          variant="outlined"
          value={nameSurname}
          onChange={e => setNameSurname(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Mob.nömrə"
          variant="outlined"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="E-poçt"
          variant="outlined"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Cari universitet"
          variant="outlined"
          value={nowUniversitet}
          onChange={e => setNowUniversitet(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="İxtisas"
          variant="outlined"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        />
        <br />
        <Button variant="contained" color="primary" style={{margin:"10px auto", display:"block"}} onClick={sendClick}>
          Göndər
        </Button>
      </form>
        </List>
      </Dialog>
      </EducationAbroadDiv>
    )
  }
}

export default EducationAbroad;
