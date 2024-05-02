import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductGallery1 from "./Components/ProductGallery1";

const Cuidados_diarios = () => {
    return (
        <div className="conteudo">
            <Slider />
            <div className="produtos">
                <ProductGallery1 />
            </div>
        </div>

    )
}

export default Cuidados_diarios;