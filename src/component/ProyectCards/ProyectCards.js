import React from 'react'
import styled from "styled-components";
import Space from "../../pages/img/recurso 14.svg";
import Portafolio from "../../pages/img/funkolitoM.svg";
import Cloud from "../../pages/img/recurso 15.svg";
import  {  Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";



const ProyectCards = () => {
    return (
        <div>
         <ProyectTitle>PROYECTOS</ProyectTitle>
        <ProyectCardsContainer>
            <ProyecCard>
                <ProyectCardImgC  src={Cloud} alt="" />              
                <ProyectCardTitle>Weatherapp</ProyectCardTitle>
                <ProyectCardText>App del clima <br /> consumiendo API <br /> (OpenWeather) </ProyectCardText>
               
              <ButtonsContainer>
                <GithubLink href="https://github.com/jdag274/climaapp" >
                    <GitHub />
                </GithubLink>

                <EyeLink href="https://jdag274.github.io/climaapp/" >
                    <Eye />
                </EyeLink>
              </ButtonsContainer> 
            </ProyecCard>
            
            <ProyecCardS>
                <ProyectCardImgS  src={Space} alt="" />
                <ProyectCardTitle>Space-Jam</ProyectCardTitle>
                <ProyectCardText>Landingpage <br /> de space-jam <br /> new legacy </ProyectCardText>
               
              <ButtonsContainer>
                <GithubLink href="https://github.com/jdag274/landingapp" >
                    <GitHub />
                </GithubLink>

                <EyeLink href="https://www.youtube.com/watch?v=RMRM742P2Ro" >
                    <Eye />
                </EyeLink>
              </ButtonsContainer> 
            </ProyecCardS>

            <ProyecCard>
                <ProyectCardImgP  src={Portafolio} alt="" />
                <ProyectCardTitle>Portafolio</ProyectCardTitle>
                <ProyectCardText>El portafolio <br /> en el que estas <br /> actualmente </ProyectCardText>
               
              <ButtonsContainer>
                <GithubLink href="https://github.com/jdag274/portafolio" >
                    <GitHub />
                </GithubLink>

                <EyeLink to="#" >
                    <Eyep />
                </EyeLink>
              </ButtonsContainer> 
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
height: 355px;
border: #92FFD1 1px solid; 
display:flex;
justify-content: center;
margin-bottom:35px;



`

export const ProyecCardS  = styled.div`
width: 240px;
height: 355px;
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
margin-top: 15px;
width:180px;
height:130px;
position:absolute;

`


export const ProyectCardImgP = styled.img`
margin-top:15px;
width:180px;
height:130px;
position:absolute;

`

export const ProyectCardImgS = styled.img`
margin-top:15px;
width:170px;
height:125px;
position:absolute;

`


export const ProyectCardTitle = styled.h1`
font-size:30px;
color: #92FFD1;
position: absolute;
margin-top:160px;

`

export const ProyectCardText = styled.p`
font-size:17px;
text-align:center;
color: white;
position: absolute;
margin-top:205px;

`

export const ButtonsContainer = styled.div`
display:flex;
justify-content:center;
margin-top:285px;
`


export const GithubLink = styled.a`

`

export const GitHub = styled(FaGithubAlt)`
width: 50px;
height: 50px;
fill:white;
margin-right:20px ;
transition:400ms;


&:hover{
  transition:400ms;
  fill:#ED6D75;
}


`

export const EyeLink = styled.a`

`

export const Eye = styled(FaLaptop)`
width: 50px;
height: 50px;
fill:white;
transition:400ms;


&:hover{
  transition:400ms;
  fill:#ED6D75;
}

`
export const Eyep = styled(FaLaptop)`
width: 50px;
height: 50px;
fill:#92FFD1;
`




export default ProyectCards

