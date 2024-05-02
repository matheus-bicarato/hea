import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductGallery5 from "./Components/ProductGallery5";

const SaudeBemEstar = () => {
    return (
        <div className="conteudo">
            <Slider />
            <div className="produtos">
                <ProductGallery5 />
            </div>
        </div>

    )
}

export default SaudeBemEstar;