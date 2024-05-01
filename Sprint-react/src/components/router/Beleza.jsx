import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductGallery from "./Components/ProductGallery";

const Beleza = () => {
    return (
        <div className="conteudo">
            <Slider />
            <div className="produtos">
                <ProductGallery />
            </div>
        </div>

    )
}

export default Beleza;