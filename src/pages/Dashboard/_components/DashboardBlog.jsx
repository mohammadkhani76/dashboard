import ImgBlog from "../../../assets/pic/blog.png";
import style from "./../Dashboard.module.css";

export const DashboardBlog = () => {
  return (
    <>
      <div className={style.dashLeft}>
        <div className={style.dashLeftItem}>
          <img src={ImgBlog} alt="blog" />
          <div className={style.dashLeftItemDes}>
            <h4>آزمون‌های تمرینی: کلیدی برای موفقیت</h4>
            <p>
              آزمون‌های تمرینی ابزارهای ضروری برای تقویت دانش و بهبود مهارت‌های
              آزمون‌دهی هستند. با شبیه‌سازی شرایط واقعی امتحان، این آزمون‌ها کمک
              می‌کنند تا نقاط قوت و ضعف شناسایی شوند، اعتماد به نفس افزایش یابد
              و اضطراب کاهش پیدا کند.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
