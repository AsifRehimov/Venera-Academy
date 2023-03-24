import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, TextField } from '@mui/material';
import { LanguageCourseDiv, FormError, FormInfo } from './LanguageCourse.style';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {  useSnackbar } from 'notistack';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function LanguageCourse() {
 
    const { enqueueSnackbar } = useSnackbar();


    const [open, setOpen] = React.useState(false);
    const [nameSurname, setNameSurname] = useState("");
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    const [age, setAge] = useState('');
    const [emptyPlace, setEmptyPlace] = useState(false);

   

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
        setEmptyPlace(false)
        setNameSurname('')
        setNumber('')
        setMail('')
        setAge('')
    };

    const sendClick = () => {
        if ((nameSurname && number && mail && age) === '') {
            setEmptyPlace(true)
        } else {
            setOpen(false)
            setEmptyPlace(false)
            setNameSurname('')
            setNumber('')
            setMail('')
            setAge('')
            enqueueSnackbar('Uğurla qeydə alındı ', { variant: 'success' });

        }
    }



  const handleChange = (event) => {
    setAge(event.target.value);
  };


        return (
            <LanguageCourseDiv>
                
                <p className='title'>Dil Kursları</p>
                <p className='educationarea'>Xarici dillər təlabata uyğun olaraq seçilib. İngilis və rus dillərində təkcə danışıq yox abituriyentdə hazırlanır.</p>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={16}>

                   
                                <Card sx={{ maxWidth: 345 }} className="card" onClick={handleOpen}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image='https://media.istockphoto.com/id/1313088031/vector/english.jpg?s=612x612&w=0&k=20&c=Mslm0FNFCeExaXw1B-aNSY89W_cB3emg03CkUDHeIbU='
                                            alt="university"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                İngilis dili
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }} className="card" onClick={handleOpen}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image='https://dp4g669tqdae4.cloudfront.net/content/uploads/2019/09/12161658/Espanol.-Translation-Spanish.-Language-hand-drawn-doodles-and-lettering.-1087621188_7013x4954.jpg'e
                                            alt="university"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Ispan dili
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }} className="card" onClick={handleOpen}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image='https://www.gtalent.jp/blog/wp-content/uploads/2019/08/japanese1.jpg'
                                            alt="university"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Yapon dili
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }} className="card" onClick={handleOpen}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image='https://media.istockphoto.com/id/1054778956/vector/french.jpg?s=612x612&w=0&k=20&c=9a1NhaM32UxzNEeskX7gzOWDxccSWJFbJSQmUcV52gs='
                                            alt="university"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Fransız dili
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }} className="card" onClick={handleOpen}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://media.istockphoto.com/id/537474066/photo/russian-language.jpg?s=612x612&w=0&k=20&c=JzrnR7h13taBQNIPQDavi1nafwYfrjPlLpVD1SxZxeU="
                                            alt="university"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Rus dili
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }} className="card" onClick={handleOpen}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://blog.keatschinese.com/wp-content/uploads/2020/12/learning-the-chinese-language.jpg"
                                            alt="university"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Çin dili
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }} className="card" onClick={handleOpen}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://images.verbling.com/convert/w_1000/https%3A%2F%2Fverbling-user-uploads.s3.amazonaws.com%2F75736031415276259819%2F134fe6d9-35f7-49f7-9088-00d21599e535%2Fweb2_0.jpg"
                                            alt="university"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Ərəb dili
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                    </Grid>
                </Grid>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }} style={{ background: "#0B2D4D" }}>
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
                        <form style={{ width: "200px", margin: "20px auto" }}>
                        
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
                           
                            <FormControl fullWidth style={{ width: "200px", margin: "5px" }}>
                                <InputLabel id="demo-simple-select-label">Dil</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Rus</MenuItem>
                                    <MenuItem value={20}>İngilis</MenuItem>
                                    <MenuItem value={30}>Fransız</MenuItem>
                                    <MenuItem value={40}>İspan</MenuItem>
                                    <MenuItem value={50}>Yapon</MenuItem>
                                    <MenuItem value={60}>Ərəb</MenuItem>
                                    <MenuItem value={70}>Çin</MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            <Button variant="contained" color="primary" style={{ margin: "10px auto", display: "block" }} onClick={sendClick}>
                                Göndər
                            </Button>
                        </form>
                    </List>
                </Dialog>
            </LanguageCourseDiv>
        )
    }


export default LanguageCourse;
