import { SvgDashboard } from "../../../assets/icons/SvgDashboard";
import style from "./../Dashboard.module.css";

export const DashboardSummary = () => {
  const cartItem = [
    { title: "میزان فروش", price: "120,000", percentage: "25%" },
    { title: "میزان خرید", price: "200,000", percentage: "85%" },
    { title: "میزان فروش", price: "120,000", percentage: "25%" },
    { title: "میزان خرید", price: "200,000", percentage: "85%" },
  ];
  return (
    <>
      <div className={style.dashRightSummary}>
        {cartItem.map((item, index) => (
          <div key={index} className={style.dashRightSummaryItem}>
            <div className={style.dashRightSummaryItemIcon}>
              <SvgDashboard />
            </div>
            <div className={style.dashRightSummaryItemDescription}>
              <p>{item.title} </p>
              <h4>{item.price} تومان</h4>
              <span>{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
