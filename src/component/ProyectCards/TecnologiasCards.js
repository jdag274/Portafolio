import React from 'react';
import styled from "styled-components";
import Css from "../../pages/img/Recurso 4.svg";
import JS from "../../pages/img/Recurso 5.svg";
import HTML from "../../pages/img/Recurso 3.svg";
import ReactLogo from "../../pages/img/Recurso 6.svg";
import SASSLOGO from "../../pages/img/Recurso 7.svg";
import GITHUBLOGO from "../../pages/img/Recurso 8.svg";




const TecnologiasCard = () => {
    return (
        <div>
        <ProyectTitle>TECNOLOGIAS</ProyectTitle>
       <ProyectCardsContainer>
           <ProyecCard>
               <ProyectCardImgC  src={HTML} alt="" />              
               <ProyectCardTitle>HTML</ProyectCardTitle>
              
            
           </ProyecCard>
           
           <ProyecCard>
               <ProyectCardImgS  src={Css} alt="" />
               <ProyectCardTitle>CSS</ProyectCardTitle>
              
           </ProyecCard>

           <ProyecCard>
               <ProyectCardImgP  src={JS} alt="" />
               <ProyectCardTitle>JAVASCRIPT</ProyectCardTitle>
              
           </ProyecCard>

           <ProyecCard>
               <ProyectCardImgP  src={ReactLogo} alt="" />
               <ProyectCardTitle>REACT</ProyectCardTitle>
              
           </ProyecCard>

           <ProyecCard>
               <ProyectCardImgP  src={SASSLOGO} alt="" />
               <ProyectCardTitle>SASS</ProyectCardTitle>
              
           </ProyecCard>

           <ProyecCard>
               <ProyectCardImgP  src={GITHUBLOGO} alt="" />
               <ProyectCardTitle>GITHUB</ProyectCardTitle>
              
           </ProyecCard>

       </ProyectCardsContainer>
       </div>
    )
}

export const ProyectCardsContainer  = styled.div`
width: 100vw;
margin-top:35px;
display:flex;
justify-content:center;
flex-direction: column;
align-items:center;
transition: 500ms;


@media screen and (min-width: 768px) {
  flex-direction:row ;
  margin-top:75px;
  justify-content:space-around;
  &:hover{
  transition: 400ms;
  transform: scale(0.9);
}
  
}



`

export const ProyectTitle  = styled.h1`
margin-top:115px;
text-align: center;
color:  #92FFD1;
`

export const ProyecCard  = styled.div`
width: 240px;
height: 275px;
border: #92FFD1 1px solid; 
display:flex;
justify-content: center;
margin-bottom:35px;




`


export const ProyectCardImgC = styled.img`
margin-top: 25px;
width:180px;
height:130px;
position:absolute;

`


export const ProyectCardImgP = styled.img`
margin-top:25px;
width:180px;
height:130px;
position:absolute;

`

export const ProyectCardImgS = styled.img`
margin-top:25px;
width:170px;
height:125px;
position:absolute;

`


export const ProyectCardTitle = styled.h1`
font-size:30px;
color: white;
position: absolute;
margin-top:190px;

`
export default TecnologiasCard;
