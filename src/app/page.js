'use client';
import { useState, useRef } from 'react';
import estilos from './page.module.css';
import Topo from './componentes/Topo';
import Card from './componentes/Card';

import Aquario from '/public/aquario.jpg';
import Peixes from '/public/peixes.jpg';
import Aries from '/public/aries.jpg';
import Touro from '/public/touro.jpg';
import Gemeos from '/public/gemeos.jpg';
import Cancer from '/public/cancer.jpg';
import Leao from '/public/leao.jpg';
import Virgem from '/public/virgem.jpg';
import Libra from '/public/libra.jpg';
import Escorpiao from '/public/escorpiao.jpg';
import Sagitario from '/public/sagitario.jpg';
import Capricornio from '/public/capricornio.jpg';

// Array original dos signos
const signosOriginais = [
  { elemento: 'ar', signo: "Aquário", dataInicio: "21/01", dataFim: "19/02", imagem: Aquario },
  { elemento: 'agua', signo: "Peixes", dataInicio: "20/02", dataFim: "20/03", imagem: Peixes },
  { elemento: 'fogo', signo: "Áries", dataInicio: "21/03", dataFim: "20/04", imagem: Aries },
  { elemento: 'terra', signo: "Touro", dataInicio: "21/04", dataFim: "21/05", imagem: Touro },
  { elemento: 'ar', signo: "Gêmeos", dataInicio: "22/05", dataFim: "21/06", imagem: Gemeos },
  { elemento: 'agua', signo: "Câncer", dataInicio: "21/06", dataFim: "23/07", imagem: Cancer },
  { elemento: 'fogo', signo: "Leão", dataInicio: "24/07", dataFim: "23/08", imagem: Leao },
  { elemento: 'terra', signo: "Virgem", dataInicio: "24/08", dataFim: "23/09", imagem: Virgem },
  { elemento: 'ar', signo: "Libra", dataInicio: "24/09", dataFim: "23/10", imagem: Libra },
  { elemento: 'agua', signo: "Escorpião", dataInicio: "24/10", dataFim: "22/11", imagem: Escorpiao },
  { elemento: 'fogo', signo: "Sagitário", dataInicio: "23/11", dataFim: "21/12", imagem: Sagitario },
  { elemento: 'terra', signo: "Capricórnio", dataInicio: "22/12", dataFim: "20/01", imagem: Capricornio },
];

export default function Home() {
  const [signos, setSignos] = useState(signosOriginais);
  const dragCardIndex = useRef(null);

  // Quando começa a arrastar
  function handleDragStart(index) {
    dragCardIndex.current = index;
  }

  // Quando solta em cima de outro card
  function handleDrop(index) {
    const draggedIdx = dragCardIndex.current;
    if (draggedIdx === null || draggedIdx === index) return;

    const novosSignos = [...signos];
    const [removido] = novosSignos.splice(draggedIdx, 1);
    novosSignos.splice(index, 0, removido);
    setSignos(novosSignos);
    dragCardIndex.current = null;
  }

  // Permite soltar
  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Topo />
      <main className={estilos.main_container}>
        <section>
          {signos.map((s, idx) => (
            <div
              key={s.signo}
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDrop={() => handleDrop(idx)}
              onDragOver={handleDragOver}
              style={{ cursor: 'grab' }}
            >
              <Card
                elemento={s.elemento}
                signo={s.signo}
                dataInicio={s.dataInicio}
                dataFim={s.dataFim}
                imagem={s.imagem}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}