import styled from "styled-components";

export const LanguageCourseDiv = styled.div`

  width: 100%;
  height: auto;
  margin: 30px 0 30px 0;
  .card{
    margin: 20px 0 0 20px;
    display: inline-flex;
  }
  .title{
    font: 500 30px tahoma;
    margin: 30px auto;
    width: fit-content;
  }
  .educationarea{
    font: 400 20px tahoma;
    width: fit-content;
    margin: 0 20px 30px 20px;
  }
  `
  export const FormInfo = styled.p`
   width: fit-content;
   margin: 20px auto;
   font: 400 20px tahoma;
   color: #0B2D4D;
  `
  
  export const FormError = styled.p`
   width: fit-content;
   margin: 20px auto;
   font: 300 18px tahoma;
   color: red;
  `