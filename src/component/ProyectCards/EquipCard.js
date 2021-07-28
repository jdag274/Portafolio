import React from 'react';
import styled from "styled-components";
import Ram from "../../pages/img/recurso12.svg";
import Cpu from "../../pages/img/recurso 13.svg";
import Grafica from "../../pages/img/recurso 11.svg";

const EquipCard = () => {
    return (
        <div>
        <ProyectTitle>EQUIPOS</ProyectTitle>
       <ProyectCardsContainer>
           <ProyecCard>
               <ProyectCardImgC  src={Grafica} alt="" />              
               <ProyectCardTitle>Radeon AMD <br /> 5600xt OC</ProyectCardTitle>
              
            
           </ProyecCard>
           
           <ProyecCardR>
               <ProyectCardImgS  src={Ram} alt="" />
               <ProyectCardTitle>Vengenace <br /> pro 16gb</ProyectCardTitle>
              
           </ProyecCardR>

           <ProyecCard>
               <ProyectCardImgP  src={Cpu} alt="" />
               <ProyectCardTitle>Ryzen 5 <br />5400g</ProyectCardTitle>
              
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
transition:500ms;

@media screen and (min-width: 768px) {
  flex-direction:row ;
  margin-top:75px;
}

&:hover{
  transition: 300ms;
  transform: scale(1.01);
}
`

export const ProyectTitle  = styled.h1`
margin-top:115px;
text-align: center;
color:  #92FFD1;
`

export const ProyecCard  = styled.div`
width: 240px;
height: 295px;
border: #92FFD1 1px solid; 
display:flex;
justify-content: center;
margin-bottom:35px;


`

export const ProyecCardR  = styled.div`
width: 240px;
height: 295px;
border: #92FFD1 1px solid; 
display:flex;
justify-content: center;
margin-bottom:35px;

@media screen and (min-width: 768px) {
  margin-left:30px;
  margin-right:30px;
}

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
margin-top:180px;

`




export default EquipCard
