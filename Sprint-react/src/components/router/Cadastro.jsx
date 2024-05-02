import { Link } from "react-router-dom";
import './style/Cadastro.css'


const Cadastro = () => {
    return (
        <div className="conteudo">
            <div className="conteiner">
                <div className="">
                    <div className="cadastro">
                        <div className="a">
                        <h1>Crie sua conta</h1>
                        <h2>Entre com o seu E-mail</h2>
                        <form className="formulario">
                            <label>Nome completo:</label>
                            <input type="text" name="nome" placeholder="Digite o seu nome!" required/>
                            <label>E-mail:</label>
                            <input type="email" name="email" placeholder="Digite seu E-mail!" required/>
                            <label>Senha:</label>
                            <input type="password" name="pass" placeholder="DIgite uma senha confiavel!" required/>
                            <input className="enviar" type="submit" value="Entrar" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cadastro;