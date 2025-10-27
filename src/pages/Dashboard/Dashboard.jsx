import { useEffect } from "react";
import { UseLayoutStore } from "../../store/LayoutStore";
export const Dashboard = () => {
  const { setTitle } = UseLayoutStore();

  useEffect(() => {
    setTitle(" داشبورد ");
  }, []);
  return (
    <>
      <h1>محتوا صفحه داشبورد</h1>
    </>
  );
};
