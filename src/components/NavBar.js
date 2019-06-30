import React from 'react';
import HOME from "../img/HOME.svg";
import MAPADAJORNADA from '../img/MAPADAJORNADA.svg';
import CALENDARIO from '../img/CALENDARIO.svg';
import PROFILE from '../img/PROFILE.svg';
import CustomButton from '../components/CustomButton';
// import { Container } from './styles';

export default function NavBar() {
  return (
    <div>
      <div style={{display: 'flex', marginTop: "87.7vh"}}>
        <CustomButton style={{margin: 0}}>
          <img src={HOME} alt="home" width="80%"/>
        </CustomButton>
        <CustomButton style={{margin: 0}}>
          <img src={MAPADAJORNADA} alt="jornada" width="80%"/>
        </CustomButton>
        <CustomButton style={{margin: 0}}>
          <img src={CALENDARIO} alt="calendario" width="80%"/>
        </CustomButton>
        <CustomButton style={{margin: 0}}>
          <img src={PROFILE} alt="profile" width="80%"/>
        </CustomButton>
      </div>
    </div>
  );
}
