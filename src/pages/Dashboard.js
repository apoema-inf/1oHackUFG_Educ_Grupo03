import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import CALENDARIO from '../dashboard-imgs/CALENDARIO.png'
import HOME from '../dashboard-imgs/HOME.png'
import JORNADA from '../dashboard-imgs/JORNADA.png'
import PROFILE from '../dashboard-imgs/PROFILE.png'

export default function Dashboard({activeNav, setActiveNav}) {
  const navigation = [
    {
      text: "HOME",
      image: HOME,
      backgroundColor: "#9F74FF"
    },
    {
      text: "JORNADA",
      image: JORNADA,
      backgroundColor: "#F42D22"
    },
    {
      text: "CALENDARIO",
      image: CALENDARIO,
      backgroundColor: "#FFCB58"
    },
    {
      text: "PROFILE",
      image: PROFILE,
      backgroundColor: "#1EC5FF"
    }
  ]

  return (
    <div>
      <img src={navigation[activeNav].image} alt="navIcon" style={{height: "100vh", width: "100vw"}}/>
      <NavBar activeNav={activeNav} setActiveNav={setActiveNav}/>
    </div>
  );
}
