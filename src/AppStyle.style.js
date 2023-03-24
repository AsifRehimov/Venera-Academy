import styled from 'styled-components';


export const AppDiv = styled.div`
margin: 0;
width: 100%;
height: auto;
background: #a1b7b7;

.navbar-toggler:focus {
    box-shadow: none;
}
.navlink:hover{
    color: lightgray;
}
.navlink{
    text-decoration: none;
    color: white;
    margin-right: 20px;
    font-size: 20px;    
    margin: 3px 0 0 20px;
    
}
.hamburgerButton{
    height: 50px;
    width: 50px;
    background: white;
    margin: 20px;
    padding: 10px;
}
@media  screen and (max-width: 780px) {
    .navlink{
        text-decoration: none;
       margin: 250px;
       color: black;

    }
}
`
export const Footerdiv = styled.footer`

width: 100%;
height: 200px;
background-color: #2C5A8A;
.footertitle{
    text-decoration: none;
    color: white;
    font-size: 25px;
    display: inline-table;
    margin: 40px;
}
.contactfooter{
    text-decoration: none;
    color: #aaeffd;
    font-size: 20px;
    display: inline-table;
    margin: 40px 0 0 2.8%;
}
.socialdiv{
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    float: right;
    margin: 40px 1% 0 0 ;
}
.socialnetwork{
    font-size: 40px;
    color: white;
}
.createdbyAsif{
    height: 50px;
    width: 100%;
    border-top: 1px solid white;
    margin-top:33px;
    text-align: center;
    color: white;
    font-size: 18px;
    padding-top: 10px;
}
@media  screen and (max-width: 780px) {
    display: flow-root;
    .footertitle{
        display: none;
    }
    .contactfooter{
        display: none;
    }
    .createdbyAsif{
        height: 55px;
        width: 100%;
        border-top: 1px solid white;
        margin-top: 65px;
        text-align: center;
        color: white;
        font-size: 18px;
        display: inline-block;
        padding-top: 15px;
    }
    .socialdiv{
        margin: 40px auto 0px auto;
        float: none;
    }

}
`