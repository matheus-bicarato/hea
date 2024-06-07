import { Link } from "react-router-dom";
import logo from '../assets/Hea.png'
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-cima">
                <div className="footer-cima-esquerda">
                    <ul className="sociais">
                        <h1>Redes Sociais:</h1>
                        <a href="https://web.whatsapp.com/"><i class="bi bi-whatsapp"></i></a>
                        <a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
                        <a href="https://twitter.com/"><i class="bi bi-twitter-x"></i></a>
                        <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
                    </ul>
                </div>
                <div className="footer-cima-direita">
                    <Link to={'/'}><img className="logo-footer" src={logo} alt="logo" /></Link>
                </div>
            </div>
            <hr className="barra" />
            <div className="footer-baixo">
                <div className="texto">
                    <p>
                        Copyright © 2014 - 2024 - Health Point Saúde EIRELI. <br /> Todos os direitos reservados.
                        Health Point Saúde EIRELI - CNPJ: 02.543.945/0006-90 | Santa Isabel/SP | IE: 130.762.850.113 | AFE: 780.2129 | SIVISA: 354680110-477-000062-1-1 - Farmacêuticas Responsáveis: Dra. Rose de Jesus Assis CRF-SP: 63.178 | Dra. Anadia Terezinha Barbosa CRF-SP 87.005 - End.: Est. Municipal Dep. Est. Francisco Franco, N° 1363-A – Santa Isabel – SP | Horários de Funcionamento: Loja CD - atendimento das 7h00 às 21h00 de segunda a sexta-feira, sábado das 07h00 às 13h00, localizada na Est. Municipal Dep. Est. Francisco Franco, 1363 – Santa Isabel – SP | Loja 3 - atendimento 24h, localizada na Av. Jabaquara, 1524 | Loja 7 – atendimento das 6h00 às 23h00, localizada na Av. Jabaquara 1583 | Outras lojas - atendimento das 7h00 às 22h00, localizadas na Av. Jabaquara, 1546 e 1625 | Site - 24 horas por dia, todos os dias da semana. As informações contidas neste site como promoções e ofertas, não devem ser usadas para automedicação e não substituem, em hipótese alguma, a medicação prescrita pelo profissional da área médica. Somente o médico está em condições de diagnosticar qualquer problema de saúde e prescrever o tratamento adequado. Qualquer dúvida sobre prescrição médica e produtos divulgados em nosso site, entre em contato através do atendimento por e-mail ou chat online. Se preferir, você poderá se dirigir a uma de nossas lojas, pois contamos com um profissional da área para maiores esclarecimentos.
                        As fotos contidas em nosso site são meramente ilustrativas. Os preços e as promoções, são válidos apenas para compras via Internet. Preços e disponibilidade sujeitos a alterações no decorrer do dia ** As parcelas mínimas nos cartões que aceitam parcelamento são de R$ 20,00.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;