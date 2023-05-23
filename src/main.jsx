import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  HomePage,
  AboutPage,
  Cart,
  Products,
  ProductDetail,
  NotFound,
} from "./pages/index";
import { Layout } from "./components/index";
import Error from "./components/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} errorElement={<NotFound />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<Products />} errorElement={<Error />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="checkout" element={<Cart />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
