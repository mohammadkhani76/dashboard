import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { object, string, number, array } from "yup";

export const ProductAddForm = () => {
  const [file, setFile] = useState(null);
  let schema = object({
    title: string()
      .required("فیلد نام محصول اجباریست")
      .min(2, "حتما نام باید 2 کاراکتر باشد"),
    price: number()
      .required("قیمت اجباریست")
      .positive("بیشتر صفر باشد")
      .typeError("حتما عدد باشد"),
    quantity: number()
      .required("موجودی اجباریست")
      .positive("بیشتر صفر باشد")
      .typeError("حتما عدد باشد"),
    tools: array().of(
      object({
        name: string().required(" نام اجباریست"),
        value: string().required(" مقدار اجباریست"),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="product-form-item">
        <p>نام محصول</p>
        <input
          type="text"
          placeholder="نام محصول را وارد کنید..."
          {...register("title")}
        />
        {errors.title && (
          <span className="product-form-item-error">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="product-form-item">
        <p>قیمت محصول</p>
        <input
          type="number"
          placeholder="قیمت محصول را وارد کنید..."
          {...register("price")}
        />
        {errors.price && (
          <span className="product-form-item-error">
            {errors.price.message}
          </span>
        )}
      </div>

      <div className="product-form-item">
        <p>موجودی محصول</p>
        <input
          type="number"
          placeholder="موجودی محصول را وارد کنید..."
          {...register("quantity")}
        />
        {errors.quantity && (
          <span className="product-form-item-error">
            {errors.quantity.message}
          </span>
        )}
      </div>
      <div className="product-form-item">
        <p>ویژگی های محصول</p>
        {fields.map((item, index) => (
          <div key={item.id} className="product-form-daynamic">
            <div className="product-form-daynamic-item">
              <input
                {...register(`tools.${index}.name`)}
                placeholder="نام ویژگی"
              />
              {errors?.tools?.[index]?.name && (
                <span className="product-form-item-error">
                  {errors?.tools?.[index]?.name.message}
                </span>
              )}
            </div>
            <div className="product-form-daynamic-item">
              <input
                {...register(`tools.${index}.value`)}
                placeholder="مقدار ویژگی"
              />
              {errors?.tools?.[index]?.value && (
                <span className="product-form-item-error">
                  {errors?.tools?.[index]?.value.message}
                </span>
              )}
            </div>
            <button type="button" onClick={() => remove(index)}>
              حذف
            </button>
          </div>
        ))}
        <button
          className="product-form-item-btn"
          type="button"
          onClick={() => append({ name: "", value: "" })}
        >
          افزودن ویژگی جدید
        </button>
      </div>

      <div className="product-form-item">
        <p>تصویر محصول</p>
        <input
          {...register("image")}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          placeholder="تصویر محصول را وارد کنید..."
        />
      </div>
      {file && (
        <img
          className="product-add-form-img"
          src={URL.createObjectURL(file)}
        ></img>
      )}
      <button className="product-form-btn">افزودن</button>
    </form>
  );
};
