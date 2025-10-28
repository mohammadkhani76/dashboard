import style from "./../Dashboard.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const DashboardChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { font: { family: "Vazirmatn" } },
      },
      title: {
        display: true,
        text: "نمودار درآمد ماهانه",
      },
    },
  };
  const data = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
    datasets: [
      {
        label: "درآمد ماهانه (میلیون تومان)",
        data: [12, 19, 8, 15, 22, 100, 80],
        borderColor: "#42ade2",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };
  return (
    <>
      <div className={style.dashRightBottomChart}>
        <Line options={options} data={data} />
      </div>
    </>
  );
};
