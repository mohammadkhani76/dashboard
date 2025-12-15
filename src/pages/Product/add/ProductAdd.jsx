import { useEffect } from "react";
import { UseLayoutStore } from "../../../store/LayoutStore";
import "./ProductAdd.css";
import { ProductAddForm } from "./_component/ProductAddForm";
import { ProductAddRoles } from "./_component/ProductAddRoles";
export const ProductAdd = () => {
  const { setTitle } = UseLayoutStore();
  useEffect(() => {
    setTitle("افزودن محصولات");
  }, []);

  return (
    <>
      <div className="product-add">
        <ProductAddRoles />
        <ProductAddForm />
      </div>
    </>
  );
};
