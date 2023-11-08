import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/ProductList/productList";
import ProductDetail from "./pages/ProductDetail/productDetail";
import { ChakraProvider } from "@chakra-ui/react";
import CHAKRA_THEME_DEFAULT from "./themes/chakra";
import SearchInput from "./components/SearchInput";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import Footer from "./components/Footer";
import Card from "./components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
]);

// Data Mock - will remove when have a real data
const data = {
  isNew: true,
  imageURL:
    "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158167%2Fsbiuoziiqi5gkuvrsymv.jpg&w=1080&q=75",
  name: "Long Sleeves Polka Dots",
  price: "P800",
};

function App() {
  return (
    <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
      <RouterProvider router={router} />
      <SearchInput onChange={() => {}} />
      <Header />
      <Footer />
      <GlobalStyles />
      <Card
        src={data.imageURL}
        altText={data.name}
        name={data.name}
        price={data.price}
      />
    </ChakraProvider>
  );
}

export default App;
