import React, { useEffect, useState } from 'react'
import { ICategory } from '../../../interface/category';
import axios from 'axios';
type Props = {}

const ListCategory = (props: Props) => {
    const [category, setCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(
            `http://localhost:3001/category`
          );
          setCategory(data.data);
        })();
      }, []);
    
  return (
        <ul className="filters_menu">
            {category.map((item, index) => {
              return (
                <li className="active" data-filter="*" key={index}>
                  {item.categoryName}
                </li>
              );
            })}
          </ul>
  )
}

export default ListCategory