import styled from 'styled-components';
export const Carousel = styled.div`
 margin: 0 47px 0 50px;
 margin-top: 100px;
 /* position: absolute; */
.passtolink:hover{
  color: darkcyan;
}
.passtolink{
  font: 500 30px tahoma;
  text-decoration: none;
  color: #0B2D4D;
}
.iconlink{
    margin-bottom: 2px;
}
.carousel-wrapper {
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide-item {
  flex: 1 0 100%;
  height: 500px;
  position: relative;
}

.carousel-slide-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: none;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.nextprevicon{
    font-size:27px;
}

.carousel-prev {
  left: 0;
  border-radius: 20px 3px 3px 20px;
}

.carousel-next {
  right: 0;
  border-radius: 3px 20px 20px 3px;
}
@media (max-width: 480px) {
  margin: 0 20px 0 20px;
  .carousel-slide-item {
    height: 300px;
  }
}
`

export const LanguageDiv = styled.div`
 /* position: absolute; */
margin: 150px 20px 0 20px;
height: 1140px;


.languagelink:hover{
  color: darkcyan;
}
.languagelink{
  font: 500 30px tahoma;
  text-decoration: none;
  color: #0B2D4D;
  float: left;
  width: 100%;
  margin-bottom: 20px;
}
.iconlink{
    margin: 0 0 2px 7px;
}
.languageitem {
  width: 100%;
  margin: 20px auto;
  height: auto;
  background-color: #a1b7b7;
  height: 250px;
  display: flow-root;

}
.imglanguage{
  width: 100%;
  height: 250px;
}
.languageshadow{
  display: none;
}
.languageshadow{
  width: 100%;
  height: 125px;
  background: black;
  opacity: 0.7;
  margin-top: -125px;
  display: block;
}
.shadowtitle{
  font: 500 25px Helvetica;
  color: white;
  padding: 10px;
  font-family: Helvetica;
}
.shadowinfo{
    margin-top: -30px;
    font: 400 18px Helvetica;
    color: white;
    padding: 10px;
}
/* Styles for screens wider than 768px (tablet and desktop) */
@media (min-width: 768px) {
  margin: 150px 0 0 50px;
  height: 640px;

  .languageitem {
    width: 47%;
    height: 250px;
    float: left;
    background-color: #a1b7b7;
    margin-right: 1.3%;
    display: flow-root;

  }
  .shadowinfo{
    margin-top: -30px;
    font: 400 20px Helvetica;
    color: white;
    padding: 10px;
}
}

/* Styles for screens wider than 992px (desktop) */
@media (min-width: 992px) {
  margin: 150px 0 0 50px;
  height: 640px;
  .languageshadow{
    display: none;
  }
  .languageitem:hover .languageshadow {
    display: block;
    width: 100%;
  height: 125px;
  background: black;
  opacity: 0.7;
  margin-top: -125px;
  display: block;
  }
  .languageitem {
    width: 47%;
    height: 250px;
    float: left;
    background-color: #a1b7b7;
    margin-right: 2.3%;
    display: flow-root;
}
.shadowinfo{
    margin-top: -30px;
    font: 400 20px Helvetica;
    color: white;
    padding: 10px;
}
}
   
`