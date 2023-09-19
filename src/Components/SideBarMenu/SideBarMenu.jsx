import { styled } from 'styled-components';
import './styles.scss';

export const SideBarMenu = () => {

    return(
        <Container className='ContainerSBM'>
            <div className='ListadoItems'>
                <Item index='1'/>
                <Item index='2'/>
                <Item index='3'/>
                <Item index='4'/>
            </div>
            
        </Container>
    )
}

function Item ({index}) {
    return(
        <div className='Item'>
            <span class="material-symbols-outlined">
                home
            </span>
            Titulo {index}
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const RowBoton = styled.div`
    heigth: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`
