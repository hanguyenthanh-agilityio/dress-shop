import { Grid } from "@chakra-ui/react";
import Card from "../Card";
import { Products } from "../../types/common";

interface ProductListProps {
  products: Products[];
}

const ProductList = ({products}: ProductListProps) => {
  return (
    <Grid
      w="full"
      gridGap="5"
      gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
  >
      {products.map(({ src, altText, name, price }) => (
        <Card src={src} altText={altText} name={name} price={price} />
      ))}
    </Grid>
  );
};

export default ProductList;
