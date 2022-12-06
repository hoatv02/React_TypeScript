import React, { useEffect, useState } from "react";
import { ICategory } from "../../../interface/category";
import axios from "axios";
import { useCategoryStore } from "../../../Store/category.store";
type Props = {};

const ListCategory = (props: Props) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const setCategoryName = useCategoryStore(
    (state: any) => state.setCategoryName
  );

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3001/category`);
      setCategory(data.data);
    })();
  }, []);
 
  return (
    <ul className="filters_menu">
      <li className="active"  onClick={() => setCategoryName('')}>
        ALL
      </li>
      {category.map((item, index) => {
        return (
          <li
            className="active"
            data-filter="*"
            key={index}
            onClick={() => setCategoryName(item.categoryName)}
          >
            {item.categoryName}
          </li>
        );
      })}
    </ul>
  );
};

export default ListCategory;
