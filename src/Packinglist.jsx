import Item from "./Item";
import "./index1.css";
import React, { useState } from "react";

export default function Packinglist({
  items,
  ondeleteitem,
  ontoggleitem,
  onclear,
}) {
  // 使用 useState 鉤子來跟踪排序選項的狀態
  const [sort, Setsort] = useState("input");

  let sortItem;
  // 根據排序選項選擇要顯示的項目
  if (sort === "input") {
    sortItem = items;
  } else if (sort === "description") {
    // 按照描述文字排序
    sortItem = items.slice().sort((a, b) => {
      const descriptionA = a.description || "";
      const descriptionB = b.description || "";
      return descriptionA.localeCompare(descriptionB);
    });
    /* 使用 slice() 方法來創建 items 數組的副本，以避免修改原始數組。然後使用 sort() 方法對副本數組進行排序。
在排序的比較函式中，我們定義了兩個變量 descriptionA 和 descriptionB，它們分別表示兩個項目的描述文字。
如果某個項目的描述為 null 或 undefined，我們將其視為空字符串。
然後我們使用 localeCompare() 方法對 descriptionA 和 descriptionB 進行字典排序，這會根據字母順序比較兩個字符串，
並返回一個數值，表示它們的相對順序。如果 descriptionA 在 descriptionB 前面，則返回負數；如果它們相等，則返回 0；
如果 descriptionA 在 descriptionB 後面，則返回正數 */
  } else if (sort === "packed") {
    // 按照包裝狀態排序
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {/* 將排序後的項目映射為 Item 元件 */}
        {sortItem.map((item) => (
          <Item
            key={item.id}
            ondeleteitem={ondeleteitem}
            item={item}
            ontoggleitem={ontoggleitem}
          />
        ))}
      </ul>
      {/* 排序和清空操作 */}
      <div className="actions">
        {/* 下拉菜單選擇排序方式 */}
        <select value={sort} onChange={(e) => Setsort(e.target.value)}>
          <option value="input">透過id排序</option>
          <option value="description">透過文字排序</option>
          <option value="packed">透過包裝排序</option>
        </select>
        {/* 清空列表按鈕 */}
        <button onClick={onclear}>全部清空</button>
      </div>
    </div>
  );
}
