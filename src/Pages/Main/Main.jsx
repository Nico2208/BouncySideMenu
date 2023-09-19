import { styled } from "styled-components"
import { Background } from "../../Components/Background/Background"
import { SideBarMenu } from "../../Components/SideBarMenu/SideBarMenu";
import BackgroundImagen from "../../Images/starryNight.jpeg"
import { useState } from "react";


export const Main = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);

    const handleShowSideMenu = () => {

        const menuIcon = document.querySelector('.menu');
        const menu = document.querySelector('.ContainerSBM');
        const item = document.querySelectorAll('.Item');

        if ( menuIcon.classList.contains('menuClicked') ) {
            menuIcon.classList.remove('menuClicked');
            menu.classList.toggle('sideMenuNotActive');
            menu.classList.remove('sideMenuActive');
            item.forEach(items => items.classList.remove('ItemShown'))
        } else {
            menuIcon.classList.toggle('menuClicked') 
            menu.classList.remove('sideMenuNotActive');
            menu.classList.toggle('sideMenuActive');
            item.forEach(items => items.classList.toggle('ItemShown'))
        }
    }

    return (
        <>
            <Container style={{backgroundImage:{BackgroundImagen}}}>
                <NavBar>
                    <Titulo>
                        Homero!
                    </Titulo>
                    <Icono onClick={handleShowSideMenu}>
                        <span class="material-symbols-outlined menu">
                            expand_more
                        </span>
                    </Icono>
                </NavBar>
                <div>
                    <img src={BackgroundImagen} style={{width:'100vw', height:'95vh'}} />
                </div>
                <SideBarMenu/>
                
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1;
`
const NavBar = styled.div`
    height: 5vh;
    width: 100vw;
    background-color: grey;
    display: flex;
    flex-direction: row;
    z-index: 3;
`
const Icono = styled.div`
    margin: 1vh;
    &:hover {
        cursor: pointer;
    }
`
const Titulo = styled.div`
    width: 7vw;
    margin-left: 1vw;
    font-size: x-large;
    height: 5vh;
`

