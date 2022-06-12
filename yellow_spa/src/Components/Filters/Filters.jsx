import React from 'react';
import { PlatformDropdown } from '../../Dropdowns/PlatformDropdown';
import { SortDropdown } from './../../Dropdowns/SortDropdown';

function Filters(props) {
    return (
<section className="filter__container__section">
<div className='platform__dropdown__div'>
    <SortDropdown />
    <PlatformDropdown />
</div>
</section>
    );
}

export default Filters;