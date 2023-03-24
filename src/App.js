import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './home/HomePage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AppDiv, Footerdiv } from './AppStyle.style';
import ErrorPage from './error/ErrorPage';
import { BsInstagram, BsFacebook, BsTiktok, BsYoutube } from 'react-icons/bs';
import EducationAbroad from './educationabroad/EducationAbroad';
import LanguageCourse from './languagescourse/LanguagesCourse';
import Contact from './contact/Contact';




export default function App() {

  return (

    <AppDiv>
      {['lg'].map((expand) => (
        <Navbar key={expand} style={{ background: "#0B2D4D" }} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand ><Link style={{ textDecoration: "none", color: "white", fontSize: "25px", marginLeft: "40px" }} to='/'>VENERA Academy</Link></Navbar.Brand>
            <Navbar.Toggle className='hamburgerButton' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header style={{ fontSize: "35px", margin: "30px 0 0 30px" }} closeButton>

              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link style={{ color: "black", textDecoration: "none", fontSize: '25px', marginLeft: "30px" }} to={"/"}><p className='navlink' >Ana Səhifə</p></Link>
                  <Link style={{ color: "black", textDecoration: "none", fontSize: '25px', marginLeft: "30px" }} to={"/education_abroad"}><p className='navlink' >Xaricdə Təhsil</p></Link>
                  <Link style={{ color: "black", textDecoration: "none", fontSize: '25px', marginLeft: "30px" }} to={"/languages"}><p className='navlink' >Dil Kursları</p></Link>
                  <Link style={{ color: "black", textDecoration: "none", fontSize: '25px', marginLeft: "30px" }} to={"/contact"}><p className='navlink' >Əlaqə</p></Link>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Routes>
        {/* <Homepage /> */}

        <Route path="/" element={<Homepage />} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path="/education_abroad" element={<EducationAbroad/>} />
        <Route path="/languages" element={<LanguageCourse/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footerdiv>
        <Link className='footertitle' style={{ textDecoration: "none", color: "white", fontSize: "25px", marginLeft: "40px" }} to='/'>VENERA Academy</Link>
        <a href="tel:+994556616793" className='contactfooter'>ƏLAQƏ: *0000</a>
        <div className='socialdiv'> 
          <a href='https://www.instagram.com'><BsInstagram className='socialnetwork'/></a>
          <a href='https://www.facebook.com'><BsFacebook className='socialnetwork'/></a>
          <a href='https://www.youtube.com'><BsYoutube className='socialnetwork'/></a>
          <a href='https://www.tiktok.com'><BsTiktok className='socialnetwork'/></a>
        </div>
        <div className='createdbyAsif'>Created by Asif Rahimov</div>
      </Footerdiv>

    </AppDiv>
  );
}
