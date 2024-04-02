import ProductList from "./components/products/ProductsList";
import { Header } from "./components/header/Header";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}

export default App;