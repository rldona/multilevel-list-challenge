import { useSelector } from "react-redux";

import Header from '../Header';
import Dropdown from '../Dropdown';
import Sublist from '../Sublist';

import './MultiLevelIniniteList.css';

export default function MultiLevelIniniteList () {
  const list = useSelector((state) => state.list);
  const currentParentLevel = useSelector((state) => state.currentParentLevel);

  return (
    <>
      <Header />
      <div className="MultiLevelIniniteList">
        <section className="level-1">
          <Dropdown list={list} />
        </section>
        <section className="level-2">
          {
            list.map((element) => {
              return <Sublist key={element.id} item={element} />
            })
          }
        </section>
        <section className="level-3">
          {
            list[currentParentLevel].sublist.map((element) => {
              return <Sublist key={element.id} item={element} />
            })
          }
        </section>
      </div>
    </>
  );
}
