import clsx from "clsx";
import { useFieldArray, useForm } from "react-hook-form";
import { SyntheticEvent } from "react";

export const FieldArrayForm = () => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      test: [{ name: "" }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "test",
    }
  );

  const handleSubmitPrevent = handleSubmit((data, event) => {
    event?.preventDefault();
  });

  const handleClickAdd = (e: SyntheticEvent) => {
    append({
      name: "",
    });
  };

  return (
    <div className={clsx("container")}>
      <form onSubmit={handleSubmitPrevent}>
        {fields.map((field, index) => (
          <div className={clsx(["first:mt-0 mt-2"])} key={field.id}>
            <input
              className={clsx("form-input")}
              type="text"
              {...register(`test.${index}.name` as const)}
            />
          </div>
        ))}

        <div>
          <button
            type="button"
            className={clsx("rounded-full")}
            onClick={handleClickAdd}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};
