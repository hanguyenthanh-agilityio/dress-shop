import { Grid } from "@chakra-ui/react";
import Card from "../Card";
import { Product } from "../../types/common";

interface ListProductsProps {
  product: Product[];
}

const ListProducts = ({product}: ListProductsProps) => {
  return (
    <Grid
      w="full"
      gridGap="5"
      gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
  >
      {product.map(({ src, altText, name, price }) => (
        <Card src={src} altText={altText} name={name} price={price} />
      ))}
    </Grid>
  );
};

export default ListProducts;
