import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductGallery4 from './Components/ProductGallery4 '

const Medicamentos = () => {
    return (
        <div className="conteudo">
            <Slider />
            <div className="produtos">
                <ProductGallery4 />
            </div>
        </div>

    )
}

export default Medicamentos;