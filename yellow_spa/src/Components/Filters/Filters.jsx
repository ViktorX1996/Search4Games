import React from "react";
import { UniversalDropdown } from "../../Dropdowns/UniversalDropdown";
import { setPlatform, setSort } from "../../Redux/gameReducer";
import { dataPlatform, dataSort } from "./../../Dropdowns/dropdownData";
import { FilterSection } from "./FiltersStyled";

function Filters(props) {
  return (
    <FilterSection>
      <div className="platform__dropdown__div">
        <UniversalDropdown data={dataSort} setAction={setSort} />
        <UniversalDropdown data={dataPlatform} setAction={setPlatform} />
      </div>
    </FilterSection>
  );
}

export default Filters;
