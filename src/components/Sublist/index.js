import { useSelector, useDispatch } from "react-redux";
import { addSubItem, toggleExpandItem } from '../../redux/actions';
import { IoIosArrowDown, IoIosAddCircle } from "react-icons/io";

import Item from '../Item';

import './Sublist.css';

export default function Sublist ({ item }) {
  const dispatch = useDispatch();
  const currentParentLevel = useSelector((state) => state.currentParentLevel);

  const toggleInfiniteList = () => {
    dispatch(toggleExpandItem(item.id, item.level, currentParentLevel));
  }

  const loadMore = () => {
    dispatch(addSubItem(item.id, item.level));
  }

  if (!item.visible) return null;

  return (
    <div className="Sublist">
      <div className="Sublist-header">
        <button className="button" onClick={toggleInfiniteList}><p>{item.title} {} - {item.id}</p> <IoIosArrowDown size={18} /></button>
      </div>
      { item.expand &&
        <div className="Sublist-content">
          {
            item.sublist.map((element) => {
              return <Item key={element.id} id={element.id} level={item.level} />
            })
          }
          <button className="button-plus" onClick={loadMore}>
            <IoIosAddCircle size={22} />
          </button>
        </div>
      }
    </div>
  );
}
