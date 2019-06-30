import React from 'react';
import HOME from "../img/HOME.svg";
import MAPADAJORNADA from '../img/MAPADAJORNADA.svg';
import CALENDARIO from '../img/CALENDARIO.svg';
import PROFILE from '../img/PROFILE.svg';
import CustomButton from '../components/CustomButton';
// import { Container } from './styles';

export default function NavBar({activeNav, setActiveNav, backgroundColor}) {
  return (
    <div style={{position: 'absolute', backgroundColor}}>
      <div style={{display: 'flex', }}>
        <CustomButton style={{margin: 0}} onClick={() => setActiveNav(0)}>
          <img src={HOME} alt="home" width="80%"/>
        </CustomButton>
        <CustomButton style={{margin: 0}} onClick={() => setActiveNav(1)}>
          <img src={MAPADAJORNADA} alt="jornada" width="80%"/>
        </CustomButton>
        <CustomButton style={{margin: 0}} onClick={() => setActiveNav(2)}>
          <img src={CALENDARIO} alt="calendario" width="80%"/>
        </CustomButton>
        <CustomButton style={{margin: 0}} onClick={() => setActiveNav(3)}>
          <img src={PROFILE} alt="profile" width="80%"/>
        </CustomButton>
      </div>
    </div>
  );
}
