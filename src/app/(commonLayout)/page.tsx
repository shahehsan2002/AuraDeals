import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

const HomePage = () => {
  return <div>
    <Slider/>
    <h1 className="text-2xl" >Featured Products</h1>
    <ProductList/>
  </div>;
};

export default HomePage;
