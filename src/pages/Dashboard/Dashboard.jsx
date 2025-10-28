import { useEffect } from "react";
import { UseLayoutStore } from "../../store/LayoutStore";
import style from "./Dashboard.module.css";
import { DashboardSummary } from "./_components/DashboardSummary";
import { DashboardChart } from "./_components/DashboardChart";
import { DashboardOrder } from "./_components/DashboardOrder";
import { DashboardBlog } from "./_components/DashboardBlog";
export const Dashboard = () => {
  const { setTitle } = UseLayoutStore();

  useEffect(() => {
    setTitle(" داشبورد ");
  }, []);
  return (
    <>
      <div className={style.dashboard}>
        <DashboardBlog />
        <div className={style.dashRight}>
          <DashboardSummary />
          <div className={style.dashRightBottom}>
            <DashboardOrder />
            <DashboardChart />
          </div>
        </div>
      </div>
    </>
  );
};
