import { Grid } from "@chakra-ui/react";
import Card from "../Card";
import { Product } from "../../types/common";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({products}: ProductListProps) => {
  return (
    <Grid
      w="full"
      gridGap="5"
      gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
  >
      {products.map(({ id, src, altText, name, price }) => (
        <Card key={id} src={src} altText={altText} name={name} price={price} />
      ))}
    </Grid>
  );
};

export default ProductList;
