import { useCallback, useState } from "react";

export const List = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const handleClickReverseButton = useCallback(() => {
    setItems([...items.reverse()]);
  }, []);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClickReverseButton}>リバース</button>
    </>
  );
};
