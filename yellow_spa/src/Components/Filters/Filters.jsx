import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Filters(props) {
    return (
<section className="filter__container__section">

<div className="filter__container">
  <div className="dropdown">
    <button className="dropbtn">Order by: Date
      <FontAwesomeIcon icon={faAngleDown} className="dropbtn__arrow" />
    </button>
    <div className="dropdown-content">
      <a href="#">Rating <FontAwesomeIcon icon={faArrowUp} /></a>
      <a href="#">Rating <FontAwesomeIcon icon={faArrowDown} /></a>
      <a href="#">Date <FontAwesomeIcon icon={faArrowUp} /></a>
      <a href="#">Date <FontAwesomeIcon icon={faArrowDown} /></a>
    </div>
  </div>
</div>

<div className="filter__container">
  <div className="dropdown">
    <button className="dropbtn">Platform: All
      <FontAwesomeIcon icon={faAngleDown} className="dropbtn__arrow" />
    </button>
    <div className="dropdown-content">
      <a href="#">PC </a>
      <a href="#">PlayStation  </a>
      <a href="#">Xbox  </a>
      <a href="#">iOS </a>
    </div>
  </div>
</div>

</section>
    );
}

export default Filters;