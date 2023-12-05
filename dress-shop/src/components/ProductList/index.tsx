import { Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Components
import Card from "@/components/Card";

// Types
import { Product } from "@/types/common";
import { memo } from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList = memo<ProductListProps>(({ products }: ProductListProps) => {
  return (
    <Grid
      w="full"
      gridGap="5"
      gridTemplateColumns={{
        xs: "repeat( auto-fit, minmax(120px, 1fr))",
        sm: "repeat( auto-fit, minmax(160px, 1fr))",
        md: "repeat( auto-fit, minmax(220px, 1fr))",
        lg: "repeat( auto-fit, minmax(250px, 1fr))",
      }}
      py="15px"
    >
      {products.map(
        ({ id, imageURL, altText = "Product image", name, price }: Product) => (
          <Link key={id} to={`/products/${id}`}>
            <Card src={imageURL} altText={altText} name={name} price={price} />
          </Link>
        ),
      )}
    </Grid>
  );
});

export default ProductList;
