import React from 'react'
import styled from "styled-components";
import  funkolitoM  from "./img/funkolitoM.svg";
import  {  Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";


const Home = () => {
    return (
      <div>
        <MainContainer>
           <MainText>
             <SmallTitle>SOBRE MI</SmallTitle>
             <Presentation>Hola, soy <br /> Jose Daniel Aguilera</Presentation>
             <Title>JR FRONTED DEVELOPER</Title>
             <Description>Soy un desarrollador web venezolano, que <br /> se especializa en React</Description>
           </MainText>

           <MainImg> 
                <picture>
                    <FunkoImg src={ funkolitoM } alt="" />
                </picture>
            </MainImg> 


            <MainButton>
                <LinkEmail href="https://linktr.ee/JoseAguilera">
                  <Email />  
                </LinkEmail>
                <LinkGithub href="https://github.com/jdag274">
                    <GitHub />
                </LinkGithub >
            </MainButton>

        </MainContainer>
        
        <MainButtonE>
                <LinkEmail href="https://linktr.ee/JoseAguilera">
                  <Email />  
                </LinkEmail>
                <LinkGithub href="https://github.com/jdag274">
                    <GitHub />
                </LinkGithub >
            </MainButtonE>
      </div>
    )
}


export const MainContainer = styled.main`
transition: 500ms;
margin-top:115px;

@media screen and (min-width: 768px) {
  margin-top:60px ;
  display:flex;
  justify-content:center;
  align-items:center;
  
  
}


&:hover{
  transition: 400ms;
  transform: scale(1.01);
}
`


export const MainText = styled.div`
margin-top: 60px;
width: 100vw;
text-align: center;

@media screen and (min-width: 768px) {
  width: 50vw;
  text-align:left;
  order:2;
  margin-left:80px;
}

`
export const SmallTitle = styled.h3`
font-family: Segoe UI,bold;
font-size: 12px;
color: #92FFD1;
margin-bottom: 6px;

@media screen and (min-width: 768px) {
font-size: 28px;

}

`
export const Presentation = styled.h1`
font-family: Segoe UI, bold;
font-size: 19px;
margin-bottom: 6px;

@media screen and (min-width: 768px) {
font-size: 46px;

}

`
export const Title = styled.h1`
font-family: Segoe UI, semibold;
font-size: 17px;
color: #92FFD1;
margin-bottom: 6px;


@media screen and (min-width: 768px) {
font-size: 36px;

}
`

export const Description = styled.p`
font-family: Segoe Ui, bold;
font-size: 12px;
margin-top:5px;


@media screen and (min-width: 768px) {
font-size: 27px;

}
`


export const MainImg = styled.div`
width: 100vw;
display:flex;
justify-content:center;

@media screen and (min-width: 768px) {
  width: 50vw;
  order:1;
  justify-content: flex-end;
  

}

`

export const FunkoImg = styled.img`
margin-top: 38px;

@media screen and (max-width: 768px){ 
  margin-top:60px
}

@media screen and (min-width: 768px){
  height:370px;
}


`

export const MainButton = styled.div`
display:flex;
justify-content:center;
transform: translateY(-40px); 

@media screen and (min-width: 768px) {
display:none;
}

`
export const MainButtonE = styled.div`
display:none;


@media screen and (min-width: 768px) {
  display:flex;
 justify-content:center;
  margin-top:100px;
}

`



export const LinkEmail = styled.a`
display: flex;
justify-content: center;

`

export const Email = styled(FaEnvelope)`
width:50px;
  height:50px; 
  fill:white;
  margin-top:55px;
  transition: 400ms;
  
  @media screen and (min-width: 768px) {
    width:100px;
    height:100px; 
    margin-top:0px;
    
    
}

  &:hover{
    transition: 400ms;
      fill:#ED6D75;
  }
`


export const LinkGithub = styled.a`
display: flex;
justify-content: center;

`

export const GitHub = styled(FaGithubAlt)`
    width:50px;
    height:50px; 
    fill:white;
    margin-top:55px;
    margin-left: 24px;
    transition:400ms;

    

  @media screen and (min-width: 768px) {
    width:100px;
    height:100px; 
    margin-top:0px;
    margin-left: 100px;
    
    
}

  &:hover{
      transition: 400ms;
      fill:#ED6D75;
  }
`






export default Home
