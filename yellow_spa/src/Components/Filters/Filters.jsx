import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PlatformDropdown } from '../../Dropdowns/PlatformDropdown';
import { SortDropdown } from './../../Dropdowns/SortDropdown';

function Filters(props) {
    return (
<section className="filter__container__section">

{/* <div className="filter__container">
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
</div> */}

<div className='platform__dropdown__div'>
    <SortDropdown />
    <PlatformDropdown />
</div>
</section>
    );
}

export default Filters;