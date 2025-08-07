import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";

const Home = () => {
    return (
        <div>
            <Banner/>
            <NavBar />
            <div className="container-home">
                <h1 className="titulo">Home</h1>
                <p className="paragrafo">Imagine um mundo onde decisões são mais rápidas, processos mais inteligentes e resultados mais precisos. Esse mundo já
                    existe — e começa com a <strong>TechWorld</strong>, uma referência em soluções de Inteligência Artificial para empresas que desejam
                    liderar a nova era digital.
                    Seja você uma startup em crescimento ou uma empresa consolidada, nossos serviços são desenhados para automatizar,
                    prever, analisar e transformar o seu negócio com tecnologia de ponta — sem perder a essência humana.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home