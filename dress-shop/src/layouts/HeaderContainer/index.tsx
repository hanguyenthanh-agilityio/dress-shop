import Header from "@/components/Header";
import { ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const HeaderContainer = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams({});

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const search = searchParams.get("name");
    searchParams.set("search", e.target.value);
    setSearchParams(searchParams);
    console.log(search);
    navigate(`/search?search=${e.target.value}`);
  };

  return (
    <Header
      onChange={(e) => setSearchParams({ search: e.target.value })}
      onSubmit={handleSearch}
    />
  );
};
export default HeaderContainer;
