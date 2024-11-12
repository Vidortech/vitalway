import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importando Routes e Route
import Home from './pages/Home'; // Exemplo de importação do componente Home
import About from './pages/About'; // Exemplo de importação de outro componente

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
