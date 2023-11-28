// import { ChangeEvent, useCallback } from "react";
// import { useSearchParams } from "react-router-dom";

// Components
import SortBar from "@/components/SortBar";

// Constants
import { OPTION_SORT } from "@/constants/common";

const SortBarContainer = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const filterCategory = searchParams.get("category") || "";
  // const order = searchParams.get("order") || "";

  // // Handle filter by men category
  // const handleClickMenCategories = useCallback(() => {
  //   searchParams.set("category", "m");
  //   setSearchParams(searchParams);
  // }, [searchParams, setSearchParams]);
  const handleClickMenCategories = () => {};

  // // Handle filter by women category
  // const handleClickWomenCategories = useCallback(() => {
  //   searchParams.set("category", "f");
  //   setSearchParams(searchParams);
  // }, [searchParams, setSearchParams]);
  const handleClickWomenCategories = () => {};

  // // Handle sort product
  // const handleChangeSelect = useCallback(
  //   (e: ChangeEvent<HTMLSelectElement>) => {
  //     const value = e.target.value;

  //     searchParams.set("sortby", "");
  //     searchParams.set("order", value);
  //     setSearchParams(searchParams);
  //   },
  //   [searchParams, setSearchParams],
  // );
  const handleChangeSelect = () => {};

  const categories = [
    {
      id: "men-categories",
      label: "Men",
      action: handleClickMenCategories,
      // value: "m",
    },
    {
      id: "women-categories",
      label: "Women",
      action: handleClickWomenCategories,
      // value: "f",
    },
  ];

  return (
    <SortBar
      categories={categories}
      options={OPTION_SORT}
      onChangeSelect={handleChangeSelect}
      // filterCategory={filterCategory}
      // order={order}
    />
  );
};

export default SortBarContainer;
