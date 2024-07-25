import { useNavigate, useSearchParams } from "react-router-dom";
import { ChangeEvent, useCallback, useState } from "react";

// Components
import { SearchInput } from "@/components";

// Constants
import { ROUTES } from "@/constants";

const SearchProduct = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: { key: string }) => {
      if (e.key == "Enter") {
        navigate(ROUTES.PRODUCT_SEARCH);

        if (searchValue.length === 0) {
          searchParams.delete("search");
        } else {
          searchParams.set("search", searchValue);
        }

        searchParams.delete("category");

        setSearchParams(searchParams, {
          replace: true,
        });
      }
    },
    [navigate, searchParams, searchValue, setSearchParams],
  );
  return (
    <SearchInput
      value={searchValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchProduct;
