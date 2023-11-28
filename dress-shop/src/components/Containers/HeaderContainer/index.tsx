import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import Header from "@/components/Header";
import { ROUTES } from "@/constants/routes";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");

  // Handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    navigate(ROUTES.PRODUCT_SEARCH);
    setSearchValue(e.target.value);
  };

  // Handle search product
  const handleSearch = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (searchValue.length === 0) {
        searchParams.delete("search");
        setSearchParams(searchParams, {
          replace: true,
        });
      } else {
        searchParams.set("search", searchValue);
        setSearchParams(searchParams, {
          replace: true,
        });
      }
    },
    [searchParams, searchValue, setSearchParams],
  );

  return <Header onChange={handleChange} onSubmit={handleSearch} />;
};

export default HeaderContainer;
