import { Link } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductGallery2 from "./Components/ProductGallery2";

const Generico = () => {
    return (
        <div className="conteudo">
            <Slider />
            <div className="produtos">
                <ProductGallery2 />
            </div>
        </div>

    )
}

export default Generico;