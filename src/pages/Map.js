import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Estilos do Leaflet

const Map = () => {
  // Defina as coordenadas do mapa para o Hospital de Viamão
  const hospitalPosition = [-30.0820288, -51.0303334];
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);

  // Função para centralizar o mapa no ponto escolhido
  const ChangeView = ({ coords }) => {
    const map = useMap();
    useEffect(() => {
      if (coords) {
        map.setView(coords, 13);
      }
    }, [coords, map]);
    return null;
  };

  // Função para buscar coordenadas (simula uma busca)
  const handleSelect = (inputValue, isStartPoint) => {
    if (!inputValue) return;

    // Para fins de simulação, vamos usar valores fixos baseados no texto inserido
    let coords;
    if (inputValue.toLowerCase().includes('hospital')) {
      coords = hospitalPosition;
    } else {
      // Simulando a escolha de outro local com uma coordenada fixa
      coords = [-30.0330, -51.2345];
    }

    if (isStartPoint) {
      setStartPoint(inputValue);
      setStartCoords(coords);
    } else {
      setEndPoint(inputValue);
      setEndCoords(coords);
    }
  };

  return (
    <div>
      <h1>Selecione os pontos no mapa</h1>

      {/* Entradas de dados para os pontos de partida e destino */}
      <div>
        <label>Ponto de Partida</label>
        <input
          type="text"
          placeholder="Digite o ponto de partida"
          onBlur={(e) => handleSelect(e.target.value, true)} // Ação ao perder o foco
        />
      </div>

      <div>
        <label>Ponto de Destino</label>
        <input
          type="text"
          placeholder="Digite o ponto de destino"
          onBlur={(e) => handleSelect(e.target.value, false)} // Ação ao perder o foco
        />
      </div>

      {/* Exibição do mapa com pontos de partida e destino */}
      <MapContainer center={hospitalPosition} zoom={13} style={{ width: '100%', height: '500px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Adiciona o marcador para o Hospital de Viamão */}
        <Marker position={hospitalPosition}>
          <Popup>
            Hospital de Viamão<br />
            Localização exata do hospital.
          </Popup>
        </Marker>

        {/* Adiciona o marcador para o ponto de partida, se houver */}
        {startCoords && (
          <Marker position={startCoords}>
            <Popup>{startPoint || 'Ponto de Partida'}</Popup>
          </Marker>
        )}

        {/* Adiciona o marcador para o ponto de destino, se houver */}
        {endCoords && (
          <Marker position={endCoords}>
            <Popup>{endPoint || 'Ponto de Destino'}</Popup>
          </Marker>
        )}

        {/* Centraliza o mapa no ponto de partida, se houver */}
        {startCoords && <ChangeView coords={startCoords} />}
        {/* Centraliza o mapa no ponto de destino, se houver */}
        {endCoords && <ChangeView coords={endCoords} />}
      </MapContainer>
    </div>
  );
};

export default Map;
