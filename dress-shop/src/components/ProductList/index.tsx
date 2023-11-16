import { Flex, Grid, Heading } from "@chakra-ui/react";
import Card from "../Card";
// Config Alias
import { Product } from "../../types/common";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({products}: ProductListProps) => {
  return (
    <>
      <Heading>Product Overview</Heading>
      <Flex
        direction="column"
        justifyContent="start"
        maxW={{ xl: "1200px" }}
      >
        <Grid
          w="full"
          gridGap="5"
          gridTemplateColumns={{
            xs: "repeat( auto-fit, minmax(100px, 1fr))",
            sm: "repeat( auto-fit, minmax(160px, 1fr))",
            md: "repeat( auto-fit, minmax(200px, 1fr))",
            lg: "repeat( auto-fit, minmax(300px, 1fr))",
            xl: "repeat( auto-fit, minmax(250px, 1fr))"}}
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
      </Flex>

    </>

  );
};

export default ProductList;
