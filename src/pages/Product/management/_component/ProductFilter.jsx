import { useEffect, useState } from "react";
import { SvgSearch } from "../../../../assets/icons/SvgSearch";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useSearchParams } from "react-router";
export const ProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    search: searchParams.get("search") || "",
    status: searchParams.get("status") || "all",
    start: searchParams.get("start") || "",
    end: searchParams.get("end") || "",
  });

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setFilter((prev) => ({ ...prev, search: newSearch }));
  };

  const handleStatus = (newStatus) => {
    setFilter((prev) => ({ ...prev, status: newStatus }));
  };
  const handelDate = (value) => {
    console.log(value);
    if (Array.isArray(value) && value?.[1]) {
      let start = value[0];
      let end = value[1];
      setFilter((prev) => ({
        ...prev,
        start: start?.format("YYYY/MM/DD"),
        end: end?.format("YYYY/MM/DD"),
      }));
    }
  };
  useEffect(() => {
    let validParams = {};
    // console.log("filter is:", filter);
    for (let key in filter) {
      let value = filter[key];
      if (value) {
        validParams[key] = value;
      }
    }
    setSearchParams(validParams);
  }, [filter]);
  return (
    <>
      <div className="product-filter">
        {/* <button onClick={() => console.log(filter)}>show</button> */}
        <div className="product-filter-search">
          <form>
            <input
              type="text"
              placeholder="جستجو کنید..."
              value={filter?.search}
              onChange={handleSearch}
            />
            <div className="product-filter-search-icon">
              <SvgSearch />
            </div>
          </form>
        </div>
        <div className="product-filter-status">
          <button
            className={`product-filter-status-btn ${
              filter?.status === "active" && "product-filter-status-btn-active"
            }`}
            onClick={() => handleStatus("active")}
          >
            فعال
          </button>
          <button
            className={`product-filter-status-btn ${
              filter?.status === "deactive" &&
              "product-filter-status-btn-active"
            }`}
            onClick={() => handleStatus("deactive")}
          >
            غیرفعال
          </button>
          <button
            className={`product-filter-status-btn ${
              filter?.status === "all" && "product-filter-status-btn-active"
            }`}
            onClick={() => handleStatus("all")}
          >
            همه
          </button>
        </div>
        <div className="product-filter-date">
          <DatePicker
            placeholder="انتخاب تاریخ"
            range
            calendar={persian}
            locale={persian_fa}
            value={[filter?.start, filter?.end]}
            onChange={handelDate}
          />
        </div>
      </div>
    </>
  );
};
