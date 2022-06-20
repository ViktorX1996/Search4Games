import React from "react";
import { UniversalDropdown } from "../../Dropdowns/UniversalDropdown";
import { setPlatform, setSort } from "../../Redux/gameReducer";
import { dataPlatform, dataSort } from "./../../Dropdowns/dropdownData";
import { FilterSection } from "./FiltersStyled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setSelectedItemPlatform,
  setSelectedItemSort,
} from "../../Redux/dropdownReducer";

function Filters(props) {
  const {
    selectedItemSort,
    selectedItemPlatform,
  } = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();

  const setSelectedItemSortRUN = (id) => {
    dispatch(setSelectedItemSort(id));
  }
  const setSelectedItemPlatformRUN = (id) => {
    dispatch(setSelectedItemPlatform(id));
  }
  return (
    <FilterSection>
      <div className="platform__dropdown__div">
        <UniversalDropdown
          data={dataSort}
          setAction={setSort}
          selectedItem={selectedItemSort}
          setSelectedItem={setSelectedItemSortRUN}
        />
        <UniversalDropdown
          data={dataPlatform}
          setAction={setPlatform}
          selectedItem={selectedItemPlatform}
          setSelectedItem={setSelectedItemPlatformRUN}
        />
      </div>
    </FilterSection>
  );
}

export default Filters;
