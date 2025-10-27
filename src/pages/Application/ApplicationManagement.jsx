import { useEffect } from "react";
import { UseLayoutStore } from "../../store/LayoutStore";

export const ApplicationManagement = () => {
  const { setTitle } = UseLayoutStore();

  useEffect(() => {
    setTitle(" مدیریت اپلیکیشن");
  }, []);
  return (
    <>
      <h1>محتوا صفحه مدیریت اپلیکیشن</h1>
    </>
  );
};
