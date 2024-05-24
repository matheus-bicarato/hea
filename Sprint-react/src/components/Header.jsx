import { Link } from "react-router-dom";
import logo from '../assets/Hea.png'
import './Header.css'


const Header = () => {
    return (
        <header>
            <nav className="nav-cima">
                <ul className="nav">
                    <Link to={"/"}><li>Fale Conosco</li></Link>
                    |
                    <Link to={"/"}><li>Atendimento por e-mail</li></Link>
                    |
                    <Link to={"/"}><li>Nossas Lojas</li></Link>
                    |
                    <Link to={"/"}><li>Acompanhe seu pedido</li></Link>
                </ul>
                <div className="icon-perfil">
                <i class="bi bi-person-fill perfil"></i>
                     <p className="apresentacao">ola, Bem vindo! <br /><Link to={'/Cadastro'}><span>Entre </span></Link>ou <Link to={'/Cadastro'}><span>Cadastre</span></Link> aqui!</p>           </div>
            </nav>
            <hr />
            <nav className="nav-baixo">
                <Link to={'/'}><img className="logo" src={logo} alt="logo" /></Link>

                <div classNames="container-fluid">
                    <form>
                        <input className="search" type="search" placeholder="Procure aqui!" />
                    </form>
                </div>
                <Link to={"*"}><i className="bi bi-basket carrinho"></i></Link>
            </nav>
            <hr />
            <ul className="conteudo">
                |
                <Link to={"/Medicamentos"}><li>Medicamentos</li></Link>
                |
                <Link to={"/Generico"}><li>Genéricos</li></Link>
                |
                <Link to={"/SaudeBemEstar"}><li>Saúde e Bem Estar</li></Link>
                |
                <Link to={"/Beleza"}><li>Beleza</li></Link>
                |
                <Link to={"/Cuidados_diarios"}><li>Cuidados Diários</li></Link>
                |
                <Link to={"/Infantil"}><li>Infantil</li></Link>
                |
            </ul>
        </header>
    );
}

export default Header;