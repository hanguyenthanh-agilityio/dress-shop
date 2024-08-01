import { MEN_CATEGORY, ROUTES, WOMEN_CATEGORY } from "@/constants";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const MainCategories = () => {
  const navigate = useNavigate();

  // Handle filter by category
  const handleClickCategories = useCallback(
    (value: string) => {
      navigate(`${ROUTES.PRODUCT_SEARCH}?category=${value}`, {
        state: {
          category: value,
        },
      });
    },
    [navigate],
  );

  const categories = [
    {
      id: WOMEN_CATEGORY.id,
      img: WOMEN_CATEGORY.img,
      alt: WOMEN_CATEGORY.alt,
      label: WOMEN_CATEGORY.label,
      action: handleClickCategories,
      value: WOMEN_CATEGORY.value,
    },
    {
      id: MEN_CATEGORY.id,
      img: MEN_CATEGORY.img,
      alt: MEN_CATEGORY.label,
      label: MEN_CATEGORY.label,
      action: handleClickCategories,
      value: MEN_CATEGORY.value,
    },
  ];

  return categories;
};
