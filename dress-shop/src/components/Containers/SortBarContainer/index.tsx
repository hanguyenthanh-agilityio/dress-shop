import { ChangeEvent, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import SortBar from "@/components/SortBar";

// Constants
import { OPTION_SORT } from "@/constants/common";

const SortBarContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterCategory = searchParams.get("category") || "";

  // Handle filter by men category
  const handleClickMenCategories = useCallback(() => {
    searchParams.set("category", "m");
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  // Handle filter by women category
  const handleClickWomenCategories = useCallback(() => {
    searchParams.set("category", "f");
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  // Handle sort product
  const handleChangeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;

      searchParams.set("sortby", "");
      searchParams.set("order", value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const categories = [
    { id: "men-categories", label: "Men", action: handleClickMenCategories },
    {
      id: "women-categories",
      label: "Women",
      action: handleClickWomenCategories,
    },
  ];

  return (
    <SortBar
      categories={categories}
      options={OPTION_SORT}
      onChangeSelect={handleChangeSelect}
      filterCategory={filterCategory}
    />
  );
};

export default SortBarContainer;
