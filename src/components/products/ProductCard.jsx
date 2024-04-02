import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { products } from "../../helper/data";

const ProductCard = (index) => {
  const [liked, setLiked] = useState(Array(products.length).fill(true));
  console.log(liked);
  const handleLiked = (index) => {
    const newLiked = [...liked];
    console.log(newLiked);
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-5">
      {products.map((product, index) => (
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
