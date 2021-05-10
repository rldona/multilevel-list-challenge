import { useSelector, useDispatch } from "react-redux";
import { emptySubItems, toggleExpandAllItems } from '../../redux/actions';

import './Header.css';

export default function Header () {
  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  const emptyAll = () => {
    dispatch(emptySubItems());
  }

  const expandAll = () => {
    dispatch(toggleExpandAllItems());
  }

  const totalSubLists = () => {
    return list.length;
  }

  const totalElements = () => {
    let counterItems = 0;

    list.forEach(element => {
      element.sublist.forEach((element) => {
        element.sublist.forEach(() => {
          counterItems++;
        });
      });
    });

    return counterItems;
  }

  return (
    <>
      <div className="Header">
        <h1>Multilevel Infinite List</h1>
        <div className="actions">
          <button className="control-button" onClick={emptyAll}>Empty all</button>
          <button className="control-button" onClick={expandAll}>Expand all</button>
        </div>
      </div>
      <div className="Subheader">
        <p>Total sublists: <span>{totalSubLists()}</span></p>
        <p>Total elements: <span>{totalElements()}</span></p>
      </div>
    </>
  );
}
