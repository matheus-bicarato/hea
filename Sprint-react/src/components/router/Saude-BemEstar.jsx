import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductGallery from "./Components/ProductGallery";

const SaudeBemEstar = () => {
    return (
        <div className="conteudo">
            <Slider />
            <div className="produtos">
                <ProductGallery />
            </div>
        </div>

    )
}

export default SaudeBemEstar;