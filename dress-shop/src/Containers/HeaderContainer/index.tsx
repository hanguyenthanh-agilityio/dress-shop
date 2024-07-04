import { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import { Header } from "@/components";

// Routes
import { ROUTES } from "@/constants/routes";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );

  // Handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key == "Enter") {
      navigate(ROUTES.PRODUCT_SEARCH);

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
    }
  };

  return (
    <Header
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={searchValue}
    />
  );
};

export default HeaderContainer;
