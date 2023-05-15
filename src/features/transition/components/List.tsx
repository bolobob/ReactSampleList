import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Reorder } from "framer-motion";

export const List = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const handleClickReverseButton = useCallback(() => {
    setItems([...items.reverse()]);
  }, []);
  const handleChangeChecked = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (target.checked) {
        setCheckedItems((prevState) => {
          return [...new Set([...prevState, parseInt(target.value, 10)])];
        });
      } else {
        setCheckedItems((prevState) => {
          return prevState.filter(
            (value) => value !== parseInt(target.value, 10)
          );
        });
      }
    },
    []
  );

  const sortedItems = useMemo(() => {
    const notCheckedItems = items.filter(
      (value) => !checkedItems.includes(value)
    );

    return [...checkedItems, ...notCheckedItems];
  }, [checkedItems, items]);

  return (
    <>
      <Reorder.Group as="ul" axis="y" values={items} onReorder={setItems}>
        {sortedItems.map((item) => (
          <Reorder.Item key={item} value={item}>
            <label>
              <input
                type="checkbox"
                value={item}
                onChange={handleChangeChecked}
                checked={checkedItems.includes(item)}
              />
              {item}
            </label>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button onClick={handleClickReverseButton}>リバース</button>
    </>
  );
};
