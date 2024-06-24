import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: String }) => {
  const [products, setProducts] = useState<String[]>([]);

  useEffect(() => {
    console.log("Fetching products... in ,", category);
    setProducts(["clothes", "shoes", "bags"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
