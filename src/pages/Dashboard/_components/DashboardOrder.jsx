import style from "./../Dashboard.module.css";

export const DashboardOrder = () => {
  return (
    <>
      <div className={style.dashRightBottomOrder}>
        {fakeData.map((item, index) => (
          <div key={index} className={style.dashRightBottomOrderItem}>
            <div className={style.dashRightBottomOrderItemLeft}>
              {item.profit}
            </div>
            <div className={style.dashRightBottomOrderItemRight}>
              <div>
                <p>{item.name}</p>
                <span>{item.date}</span>
              </div>
              <img src={item.img} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

let fakeData = [
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-2.jpg",
    name: "مریم حیدری",
    profit: "23.65",
    date: "16 فروردین",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-3.jpg",
    name: "الناز حبیبی",
    profit: "87.56",
    date: "11 تیر",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-4.jpg",
    name: "نازنین نادری",
    profit: "76.32",
    date: "28 مهر",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-5.jpg",
    name: "مبینا قاسمی",
    profit: "87.90",
    date: "20 بهمن",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-6.jpg",
    name: "مهشید نادری",
    profit: "65.76",
    date: "21 آذر",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-7.jpg",
    name: "خاور مشایخی",
    profit: "43.65",
    date: "16 فروردین",
  },
];
