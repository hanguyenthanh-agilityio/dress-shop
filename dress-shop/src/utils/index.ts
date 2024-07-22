import { MEN_CATEGORY, ROUTES, WOMEN_CATEGORY } from "@/constants";
import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const MainCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Handle filter by men category
  const handleClickMenCategories = useCallback(() => {
    navigate(ROUTES.PRODUCT_SEARCH);
    searchParams.set("category", "m");
    setSearchParams(searchParams);
  }, [navigate, searchParams, setSearchParams]);

  // Handle filter by women category
  const handleClickWomenCategories = useCallback(() => {
    navigate(ROUTES.PRODUCT_SEARCH);
    searchParams.set("category", "f");
    setSearchParams(searchParams);
  }, [navigate, searchParams, setSearchParams]);

  const categories = [
    {
      id: WOMEN_CATEGORY.id,
      img: WOMEN_CATEGORY.img,
      alt: WOMEN_CATEGORY.alt,
      label: WOMEN_CATEGORY.label,
      action: handleClickWomenCategories,
      value: WOMEN_CATEGORY.value,
    },
    {
      id: MEN_CATEGORY.id,
      img: MEN_CATEGORY.img,
      alt: MEN_CATEGORY.label,
      label: MEN_CATEGORY.label,
      action: handleClickMenCategories,
      value: MEN_CATEGORY.value,
    },
  ];

  return categories;
};
