import { ChangeEvent, useCallback, useState } from "react";
import { Container, Flex } from "@chakra-ui/react";

// Constants
import { OPTION_SORT } from "@/constants/common";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SortBar from "@/components/SortBar";
import SearchInput from "@/components/SearchInput";
import ProductList from "@/components/ProductList";

// Hooks
import { useBreakPoints } from "@/hooks/useBreakPoints";

// Mocks
import { useSearchParams } from "react-router-dom";

// APIs
import { useProductList } from "@/apis/app";

// Types
import { Params } from "@/types/common";

const ProductSearch = () => {
  const { isLargeThanTablet } = useBreakPoints();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("")
  console.log("search", searchValue);

  // Handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  // Handle search product
  const handleSearch = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const search = searchParams.get("search");

    if (searchValue.length === 0) {
      searchParams.delete('search');
      setSearchParams(searchParams, {
        replace: true
      })
    } else {
      searchParams.set("search", searchValue);
      setSearchParams(searchParams, {
        replace: true
      });
    }

    console.log(search);
  },[searchParams, searchValue, setSearchParams])

  // Handle filter by men category
  const handleClickMenCategories = useCallback(() => {
    searchParams.set("category", 'm')
    setSearchParams(searchParams)
  }, [searchParams, setSearchParams]);

  // Handle filter by women category
  const handleClickWomenCategories = useCallback(() => {
    searchParams.set("category", 'f')
    setSearchParams(searchParams)
  }, [searchParams, setSearchParams]);

  // Handle sort product
  const handleChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    searchParams.set('sortby', '');
    searchParams.set('order', value);
    setSearchParams(searchParams)
  }, [searchParams, setSearchParams])

  const categories = [
    { id: "men-categories", label: "Men", action: handleClickMenCategories },
    {
      id: "women-categories",
      label: "Women",
      action: handleClickWomenCategories,
    },
  ];

  const params: Params = {
    limit: 10,
    page: 1,
    search: searchParams.get('search') || "",
    category: searchParams.get('category') || "",
    order: searchParams.get('order') || "",
  }
console.log('searchParam', params);


  const {data: products} = useProductList(params, () => {})


  return (
    <>
     <Header
      onChange={handleChange}
      onSubmit={handleSearch}
    />
      <Container minH="90vh" mb={{ xs: "50px", lg: "0px" }}>
        {!isLargeThanTablet && (
          <Flex p="16px">
            <SearchInput onChange={handleChange} onSubmit={handleSearch} />
          </Flex>
        )}
        <SortBar
          categories={categories}
          options={OPTION_SORT}
          onChangeSelect={handleChangeSelect}
        />
        <ProductList products={products} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductSearch;
