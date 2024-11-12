// src/pages/Home.js
import React from 'react';
import Map from 'pages/Map'; // Certifique-se de que a importação está correta
import styles from '../index.css'

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à página inicial</h1>
      <Map />
    </div>
  );
}

export default Home;
