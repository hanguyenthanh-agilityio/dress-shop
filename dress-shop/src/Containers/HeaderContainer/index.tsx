import { ChangeEvent, memo, useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import { Header } from "@/components";

// Routes
import { ROUTES } from "@/constants";

const HeaderContainer = memo(() => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );

  // Handle change
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
    <Header
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={searchValue}
    />
  );
});

export default HeaderContainer;
