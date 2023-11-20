import { Grid } from "@chakra-ui/react";
import Card from "../Card";
// Config Alias
import { Product } from "../../types/common";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
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
        {/* Set default value */}
        {products.map(({ id, src, altText, name, price }) => (
          <Card
            key={id}
            src={src}
            altText={altText}
            name={name}
            price={price}
          />
        ))}
      </Grid>
  );
};

export default ProductList;
