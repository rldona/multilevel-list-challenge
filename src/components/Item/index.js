import { useSelector, useDispatch } from "react-redux";
import { setCurrentParentLevel, toggleVisibleItem } from '../../redux/actions';
import { IoMdEye } from "react-icons/io";

import './Item.css';

export default function Item ({ id, level }) {
  const dispatch = useDispatch();
  const currentParentLevel = useSelector((state) => state.currentParentLevel);

  const itemSelected = () => {
    if (typeof level === 'undefined') {
      dispatch(setCurrentParentLevel(id));
    }
    dispatch(toggleVisibleItem(id, level, currentParentLevel));
  }

  const hasNested = level !== 3 ? true : false;

  return (
    <div className="Item">
      <p>Item {id}</p> { hasNested && <IoMdEye size={20} onClick={itemSelected} /> }
    </div>
  );
}
