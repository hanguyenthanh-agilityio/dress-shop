import { ChangeEvent, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import { SortBar } from "@/components";

// Constants
import { MEN_CATEGORY, OPTION_SORT, WOMEN_CATEGORY } from "@/constants/common";

const SortBarContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterCategory = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  // Handle filter by men category
  const handleClickMenCategories = () => {
    searchParams.set("category", "m");
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  // Handle filter by women category
  const handleClickWomenCategories = () => {
    searchParams.set("category", "f");
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  // Handle sort product
  const handleChangeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;

      searchParams.set("sortby", "price");
      searchParams.set("order", value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const categories = [
    {
      id: MEN_CATEGORY.id,
      label: MEN_CATEGORY.label,
      action: handleClickMenCategories,
      value: MEN_CATEGORY.value,
    },
    {
      id: WOMEN_CATEGORY.id,
      label: WOMEN_CATEGORY.label,
      action: handleClickWomenCategories,
      value: WOMEN_CATEGORY.value,
    },
  ];

  return (
    <SortBar
      categories={categories}
      options={OPTION_SORT}
      onChangeSelect={handleChangeSelect}
      filterCategory={filterCategory}
      order={order}
    />
  );
};

export default SortBarContainer;
