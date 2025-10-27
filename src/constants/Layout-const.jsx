import { SvgApplication } from "../assets/icons/SvgApplication";
import { SvgDashboard } from "../assets/icons/SvgDashboard";
import { SvgMap } from "../assets/icons/SvgMap";
import { SvgSetting } from "../assets/icons/SvgSetting";
import { SvgTools } from "../assets/icons/SvgTools";

export const menu = [
  {
    title: "داشبورد",
    icon: <SvgDashboard />,
    path: "/panel/dashboard",
  },
  {
    title: "اپلیکیشن",
    icon: <SvgApplication />,
    subMenu: [
      { title: "مدیریت اپلیکیشن ", path: "/panel/application/management" },
      { title: "صفحه دوم" },
      { title: "صفحه سوم" },
    ],
  },
  {
    title: "ابزارها",
    icon: <SvgTools />,
    subMenu: [
      { title: "صفحه اول" },
      { title: "صفحه دوم" },
      { title: "صفحه سوم" },
    ],
  },
  {
    title: "نقشه",
    icon: <SvgMap />,
    subMenu: [
      { title: "صفحه اول" },
      { title: "صفحه دوم" },
      { title: "صفحه سوم" },
    ],
  },

  {
    title: "تنظیمات",
    icon: <SvgSetting />,
    path: "/panel/setting",
  },
];
