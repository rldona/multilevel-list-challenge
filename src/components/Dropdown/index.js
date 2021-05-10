import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from '../../redux/actions';
import { IoIosArrowDown, IoIosAddCircle } from "react-icons/io";

import Item from '../Item';

import './Dropdown.css';

export default function Dropdown ({ list }) {
  const [ isVisible, setIsvisible] = useState(true);

  const dispatch = useDispatch();

  const toggleInfiniteList = () => {
    setIsvisible(!isVisible);
  }

  const loadMore = () => {
    const newElement = {
      id: list.length,
      title: 'Open List',
      sublist: [
        {
          id: 0,
          title: 'Open Sublist',
          sublist: [
            { id: 0 }
          ],
          visible: false,
          expand: true,
          level: 3
        }
      ],
      visible: false,
      expand: true,
      level: 2
    };

    dispatch(addItem(newElement));
  }

  return (
    <div className="Dropdown">
      <div className="Dropdown-header">
        <button className="button" onClick={toggleInfiniteList}><p>Open</p> <IoIosArrowDown size={18} /></button>
      </div>
      { isVisible &&
        <div className="Dropdown-content">
          {
            list.map((element) => {
              return <Item key={element.id} id={element.id} />
            })
          }
          <button className="button-plus" onClick={loadMore}><IoIosAddCircle size={22} /></button>
        </div>
      }
    </div>
  );
}
