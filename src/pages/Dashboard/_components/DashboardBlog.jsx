import ImgBlog from "../../../assets/pic/blog.png";
import style from "./../Dashboard.module.css";

export const DashboardBlog = () => {
  const handelTextLimit = (text, maxlength) => {
    if (!text) return "";
    return text.length > maxlength ? text.slice(0, maxlength) + "..." : text;
  };
  const text = `آزمون‌های تمرینی ابزارهای ضروری برای تقویت دانش و بهبود مهارت‌های
  آزمون‌دهی هستند. با شبیه‌سازی شرایط واقعی امتحان، این آزمون‌ها کمک
  می‌کنند تا نقاط قوت و ضعف شناسایی شوند، اعتماد به نفس افزایش یابد
  و اضطراب کاهش پیدا کند.`;
  return (
    <>
      <div className={style.dashLeft}>
        <div className={style.dashLeftItem}>
          <img src={ImgBlog} alt="blog" />
          <div className={style.dashLeftItemDes}>
            <h4>آزمون‌های تمرینی: کلیدی برای موفقیت</h4>
            <p>{handelTextLimit(text, 81)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
