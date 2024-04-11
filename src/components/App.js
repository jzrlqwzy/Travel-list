import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = function (item) {
    setItems((items) => [...items, item]);
  };

  const handlerDeleteItems = function (id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handlerToggleItems = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handlerClearList = function () {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handlerDeleteItems}
        onToggleItem={handlerToggleItems}
        onClearList={handlerClearList}
      />
      <Stats items={items} />
    </div>
  );
}
