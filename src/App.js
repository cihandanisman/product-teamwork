import ProductList from "./components/products/ProductsList";
import { Header } from "./components/header/Header";
import "./App.scss";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all")
 
  
  return (
    <div>
      <Header setSelectedCategory={setSelectedCategory} />
      <ProductList setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;