import { useState } from 'react';
import { styled } from 'styled-components';
import BackgroundImg from '../../Images/starryNight.jpeg';
import './styles.scss'
import { SideBarMenu } from '../SideBarMenu/SideBarMenu';

export const Background = () => {
    return(
        <div className='Container totalBg'>
            <img src={BackgroundImg} className='bgImage totalBg' alt="" />
        </div>
    )
}




