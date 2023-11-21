import { Grid, useToast } from "@chakra-ui/react";

// Components
import Card from "@/components/Card";

import { useCallback } from "react";
import { useProductList } from "@/apis/app";

const ProductList = () => {
  const toast = useToast();
  const initial = {
    page: 1,
    limit: 8,
  }

  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  const { data: products} = useProductList(initial , handleError)
  console.log(products);

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
      {products.map(({ id, imageURL, altText = "Product image", name, price }) => (
        <Card key={id} src={imageURL} altText={altText} name={name} price={price} />
      ))}
    </Grid>
  );
};

export default ProductList;
