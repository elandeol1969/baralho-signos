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

export default function Home() {
  return (
    <div>
      <Topo />
      <main className={estilos.main_container}>
        <section>
          <Card elemento={'ar'} signo={"Aquário"} dataInicio={"21/01"}
            dataFim={"19/02"} imagem={Aquario} />
          <Card elemento={'agua'} signo={"Peixes"} dataInicio={"20/02"}
            dataFim={"20/03"} imagem={Peixes} />
          <Card elemento={'fogo'} signo={"Áries"} dataInicio={"21/03"}
            dataFim={"20/04"} imagem={Aries} />
          <Card elemento={'terra'} signo={"Touro"} dataInicio={"21/04"}
            dataFim={"21/05"} imagem={Touro} />
          <Card elemento={'ar'} signo={"Gêmeos"} dataInicio={"22/05"}
            dataFim={"21/06"} imagem={Gemeos} />
          <Card elemento={'agua'} signo={"Câncer"} dataInicio={"21/06"}
            dataFim={"23/07"} imagem={Cancer} />
          <Card elemento={'fogo'} signo={"Leão"} dataInicio={"24/07"}
            dataFim={"23/08"} imagem={Leao} />
          <Card elemento={'terra'} signo={"Virgem"} dataInicio={"24/08"}
            dataFim={"23/09"} imagem={Virgem} />
          <Card elemento={'ar'} signo={"Libra"} dataInicio={"24/09"}
            dataFim={"23/10"} imagem={Libra} />
          <Card elemento={'agua'} signo={"Escorpião"} dataInicio={"24/10"}
            dataFim={"22/11"} imagem={Escorpiao} />
          <Card elemento={'fogo'} signo={"Sagitário"} dataInicio={"23/11"}
            dataFim={"21/12"} imagem={Sagitario} />
          <Card elemento={'terra'} signo={"Capricórnio"} dataInicio={"22/12"}
            dataFim={"20/01"} imagem={Capricornio} />
        </section>
      </main>
    </div>
  );
}
