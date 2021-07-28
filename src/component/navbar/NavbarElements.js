import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

import { GiBackpack } from "react-icons/gi";



export const Nav = styled.nav`
background: #1B2027;
height: 80px;
display: flex;
justify-content: center;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;


`

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

@media screen and (max-width: 768px) {
    justify-content:center;
    margin-bottom:15px;
}

@media screen and (min-width: 768px) {
    padding: 0 3rem;
}


&:hover{
    transition: ease-in 2ms ;
    color: #ED6D75;
}

&.active {
    color: #ED6D75
}
`

export const Bars = styled(GiBackpack)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
    display: block;
    justify-self: center;
    top: 0;
    right: 0;
    transform: translate(-0%, 75%);
    font-size:3rem;
    cursor: pointer;
    fill:white;
}

&active{
    fill:red;
}
`

export const NavMenu = styled.div`
margin-right: -24px;
display:flex;

@media screen and (max-width: 768px) {
    justify-content:center;
    margin-right:0;
    width:100vw;
    background-color:#1B2027;
    overflow:hidden;
    position:absolute;
    margin-top:127px;
    max-height: ${({isOpen}) => ( isOpen ? "300px" : "0px") };
    transition:400ms;
}
`
