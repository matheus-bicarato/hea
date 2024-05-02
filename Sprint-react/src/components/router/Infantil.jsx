import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductGallery3 from "./Components/ProductGallery3";

const Infantil = () => {
    return (
        <div className="conteudo">
            <Slider />
            <div className="produtos">
                <ProductGallery3 />
            </div>
        </div>

    )
}

export default Infantil;