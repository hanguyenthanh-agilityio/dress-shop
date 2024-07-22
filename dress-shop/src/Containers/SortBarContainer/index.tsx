import { ChangeEvent, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import { SortBar } from "@/components";

// Constants
import { OPTION_SORT } from "@/constants";
import { MainCategories } from "@/utils";

const SortBarContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterCategory = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  // Handle sort product
  const handleChangeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      searchParams.set("order", value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return (
    <SortBar
      categories={MainCategories()}
      options={OPTION_SORT}
      onChangeSelect={handleChangeSelect}
      filterCategory={filterCategory}
      order={order}
    />
  );
};

export default SortBarContainer;
