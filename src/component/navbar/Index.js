import React, {useState} from 'react'
import { 
    Nav,
    NavLink,
    Bars, 
    NavMenu 
} from "./NavbarElements"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Nav>
               <Bars onClick={() => setIsOpen(!isOpen)} />
               <NavMenu isOpen={isOpen} >
                   <NavLink to="/home" activeStyle>
                       Inicio
                   </NavLink>
                   <NavLink to="/proyectos" activeStyle>
                       Proyectos
                   </NavLink>
                   <NavLink to="/equipos" activeStyle>
                       Equipos
                   </NavLink>
                   <NavLink to="/tecnologias" activeStyle>
                       Tecnologias
                   </NavLink>
               </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

