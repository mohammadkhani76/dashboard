import { useEffect } from "react";
import { UseLayoutStore } from "../../store/LayoutStore";
export const Settings = () => {
  const { setTitle } = UseLayoutStore();
  useEffect(() => {
    setTitle(" تنظیمات ");
  }, []);
  return (
    <>
      <h1>محتوا صفحه تنظیمات</h1>
    </>
  );
};
