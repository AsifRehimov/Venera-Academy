import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents } from '../redux/component/language'
import { Carousel, LanguageDiv } from './HomePageStyle.style';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Homepage() {
  const dispatch = useDispatch()
  const students = useSelector(state => state.students.students)
  const status = useSelector(state => state.students.status)

  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])


  const [currentIndex, setCurrentIndex] = useState(0);
 


  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex(currentIndex === students.length - 1 ? 0 : currentIndex + 1);
    };
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, students]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? students.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === students.length - 1 ? 0 : currentIndex + 1);
  };

  if (status === 'loading') {
    return  (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )

  } else {
    return (
      <div>
        <Carousel>
          <Link className='passtolink' to='/education_abroad'>Xaricdə Təshil <FaLongArrowAltRight className='iconlink' /></Link>



          <div className="carousel-wrapper">
            <div
              className="carousel-slide"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {students.map((slide, index) => (
                <div key={index} className="carousel-slide-item">
                  <img src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/Hogwarts-Castle.jpg' alt='University' />
                  <div className="carousel-slide-caption">{slide.name}</div>
                </div>
              ))}
            </div>
            <button className="carousel-prev" onClick={handlePrev}>
              <FiChevronLeft className='nextprevicon' />
            </button>
            <button className="carousel-next" onClick={handleNext}>

              <FiChevronRight className='nextprevicon' />
            </button>
          </div>


        </Carousel>
        <LanguageDiv>
          <Link className='languagelink' to={'/languages'}>Dil Kursları<FaLongArrowAltRight className='iconlink' /></Link>
          <div className='languageitem' >
           <img className='imglanguage' src='https://media.istockphoto.com/id/1313088031/vector/english.jpg?s=612x612&w=0&k=20&c=Mslm0FNFCeExaXw1B-aNSY89W_cB3emg03CkUDHeIbU=' alt='sxas'/>
           <div className='languageshadow'>
            <p className='shadowtitle'>İngilis dili kursları</p>
            <p className='shadowinfo'>Yerli və xarici müəllimlər vasitəsilə siz ən tez zamanda bir ingilis qədər səlis danışa biləcəksiz</p>
           </div>
          </div>
          <div className='languageitem' >
           <img className='imglanguage' src='https://dp4g669tqdae4.cloudfront.net/content/uploads/2019/09/12161658/Espanol.-Translation-Spanish.-Language-hand-drawn-doodles-and-lettering.-1087621188_7013x4954.jpg' alt='sxas'/>
           <div className='languageshadow'>
            <p className='shadowtitle'>İspan dili kursları</p>
            <p className='shadowinfo'>Yerli və xarici müəllimlər vasitəsilə siz ən tez zamanda bir ispan qədər səlis danışa biləcəksiz</p>
           </div>
          </div>
          <div className='languageitem' >
           <img className='imglanguage' src='https://www.gtalent.jp/blog/wp-content/uploads/2019/08/japanese1.jpg' alt='sxas'/>
           <div className='languageshadow'>
            <p className='shadowtitle'>Yapon dili kursları</p>
            <p className='shadowinfo'>Yerli və xarici müəllimlər vasitəsilə siz ən tez zamanda bir yapon qədər səlis danışa biləcəksiz</p>
           </div>
          </div>
          <div className='languageitem' >
           <img className='imglanguage' src='https://media.istockphoto.com/id/1054778956/vector/french.jpg?s=612x612&w=0&k=20&c=9a1NhaM32UxzNEeskX7gzOWDxccSWJFbJSQmUcV52gs=' alt='sxas'/>
           <div className='languageshadow'>
            <p className='shadowtitle'>Fransız dili kursları</p>
            <p className='shadowinfo'>Yerli və xarici müəllimlər vasitəsilə siz ən tez zamanda bir fransız qədər səlis danışa biləcəksiz</p>
           </div>
          </div>
        </LanguageDiv>
      </div>
    )
  }
}

export default Homepage;
