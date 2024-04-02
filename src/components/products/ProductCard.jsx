import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { products } from "../../helper/data";

const ProductCard = ({selectedCategory, input} ) => {
  const [liked, setLiked] = useState(Array(products.length).fill(true));
  console.log(selectedCategory);

  const handleLiked = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };
  
  // const [filteredProducts, setFilteredProducts] = useState(products);
  // console.log(filteredProducts);


  const filteredProducts =selectedCategory === "all" ? products : products.filter((item) => item.category === selectedCategory)
  
   
  // const filterCategory = () => {
  //   // setSelectedCategory(selectedCategory)
  //   if (selectedCategory === "all") {
  //     setFilteredProducts(products)
  //     return;
  //   } else {
  //     const newCategory = products.filter(
  //       (item) => item.category === selectedCategory
  //     );
  //     setFilteredProducts(newCategory);
  //   }
  // };

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-5">
      {filteredProducts
      .filter((item) => item.title.toLocaleLowerCase().includes(input.trim()))
      
      
      .map((product, index) => (
        <Card className="rounded-2 m-auto card" role="button">
          <Card.Header className="d-flex justify-content-between">
            <Card.Title>{product.price} $</Card.Title>
            {!liked[index] ? (
              <MdFavorite
                size={30}
                onClick={() => handleLiked(index)}
                color="red"
              />
            ) : (
              <MdFavorite size={30} onClick={() => handleLiked(index)} />
            )}
          </Card.Header>
          <Card.Img src={product.image} className="player-logo" />
          <Card.Footer className="card__over">
            <Card.Title>{product.title}</Card.Title>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
