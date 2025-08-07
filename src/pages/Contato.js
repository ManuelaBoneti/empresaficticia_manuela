
import NavBar from '../componentes/NavBar/index.js';

const Contato = () => {

    const aoClicar = () => {
        alert("Seus dados foram enviados");
    };
    
    return (
        <div>
            <NavBar />
            <div className='container'>
            <h1>Contato</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor='nome'>Nome:</label><br/>
                        <input type='text' id='nome' name='nome' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label><br/>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='mensagem'>Mensagem:</label><br/>
                        <textarea id='mensagem' name='mensagem' required></textarea>
                    </div>
                    <button className="btn-enviar" onClick={aoClicar} type='submit'>Enviar</button>
                </form>
            
            </div>
        </div>
    );
}

export default Contato