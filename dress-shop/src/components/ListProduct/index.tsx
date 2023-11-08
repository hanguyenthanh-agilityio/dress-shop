import { Flex, SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
// import { Product } from "@/types/common";
import { PRODUCT } from "../../constants/common";

// interface ListProductsProps {
//   product: Product[];
// }

const ListProducts = () => {
  return (
    <SimpleGrid>
      {PRODUCT.map(({ src, altText, name, price }) => (
        <Flex>
          <Card src={src} altText={altText} name={name} price={price} />
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default ListProducts;
