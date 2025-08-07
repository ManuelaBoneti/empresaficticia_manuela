import Banner from '../componentes/Banner/index.js';
import NavBar from '../componentes/NavBar/index.js';
import Footer from '../componentes/Footer/index.js';

const Servicos = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <div className='container-home'>
        <h1 className='titulo'>Serviços</h1>
        <p className='paragrafo'>Esperamos uma ótima experiência para você! 
        Esses são os nossos serviços:</p>
        <ul>
          <li>Consultoria em Inteligência Artificial</li>
          <li>Desenvolvimento de Modelos Preditivos</li>
          <li>Automação de Processos com IA</li>
          <li>Análise de Dados Avançada</li>
          <li>Treinamentos e Workshops em IA</li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default Servicos