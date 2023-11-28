import { Container } from "@chakra-ui/react";

// Components
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import HeaderContainer from "@/components/Containers/HeaderContainer";
import SortBarContainer from "@/components/Containers/SortBarContainer";

// Hooks

// Mocks
import { useSearchParams } from "react-router-dom";

// APIs
import { useProductList } from "@/apis/app";

// Types
import { Params } from "@/types/common";

const ProductSearch = () => {
  const [searchParams] = useSearchParams();

  const params: Params = {
    limit: 10,
    page: 1,
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    sortby: "price",
    order: searchParams.get("order") || "",
  };
  console.log("searchParam", params);

  const { data: products } = useProductList(params, () => {});

  return (
    <>
      <HeaderContainer />
      <Container minH="90vh" mb={{ xs: "50px", lg: "0px" }}>
        <SortBarContainer />
        <ProductList products={products} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductSearch;
