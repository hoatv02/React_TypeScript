import React, { useEffect, useState } from 'react'
import { ICategory } from '../../../interface/category';
import axios from 'axios';
type Props = {}

const Category = (props: Props) => {
    const [category, setCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        (async () => {
          const { data } = await axios.get(
            `https://6348bde0a59874146b0fee0c.mockapi.io/categoy`
          );
          setCategory(data);
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

export default Category