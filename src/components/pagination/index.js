import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import LeftPag from "../../assets/img/left_pag.svg";
import RightPag from "../../assets/img/right_pag.svg";

const Pagination = () => {
  return (
    <div>
      <ul className="pagination">
        <li>
          <NavLink to='/'><img src={LeftPag} alt="" /></NavLink>
        </li>
        <li><NavLink to='/'>1</NavLink></li>
        <li><NavLink to='/'>2</NavLink></li>
        <li><NavLink to='/'>3</NavLink></li>
        <li><NavLink to='/'>...</NavLink></li>
        <li><NavLink to='/'>245</NavLink></li>
        <li><NavLink to='/'><img src={RightPag} alt="" /></NavLink></li>
      </ul>
    </div>
  );
};

export default Pagination;
