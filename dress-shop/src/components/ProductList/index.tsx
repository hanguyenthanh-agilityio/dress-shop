import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { memo } from "react";

// Components
import { Card } from "@/components";

// Types
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
}

const ProductList = memo<ProductListProps>(({ products }: ProductListProps) => {
  return (
    <SimpleGrid
      minChildWidth={{ xs: "150px", sm: "175px", md: "200px", lg: "250px" }}
      spacing="20px"
      mt={{ xs: "20px", lg: "0px" }}
      pb="80px"
    >
      {products.map(({ id, imageURL, altText, name, price }: Product) => (
        <Link key={id} to={`/products/${id}`}>
          <Card src={imageURL} altText={altText} name={name} price={price} />
        </Link>
      ))}
    </SimpleGrid>
  );
});

export default ProductList;
