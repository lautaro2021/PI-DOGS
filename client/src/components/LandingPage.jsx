import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'

import { StyledLanding } from './styles/StyledLandingPage';


export default function LandingPage(){
    return (
        <StyledLanding>
            {/* <img src={perris}></img> */}
            <img src={logo} height="350" weight="200" className = "logo"></img>
            <div className = "Landing_button">
                <Link to = '/home'>
                    <button>Home</button>
                </Link>
            </div>
        </StyledLanding>
    )
}