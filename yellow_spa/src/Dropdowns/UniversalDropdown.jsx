import React, {useEffect} from "react";
import { useState } from "react";
import styles from "./PlatformDropdown.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {setIsOpen} from '../Redux/gameReducer';
export const UniversalDropdown = ({data,setAction}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [typeOfDropdown, setTypeOfDropdown] = useState("");
  const [selectedItem, setSelectedItem] = useState(0)
  const dispatch = useDispatch();
  console.log(setIsOpen, 'setIsOpen');
  const toggleDropdown = (val) => setOpen(val);
console.log(isOpen, 'ISOPEN');

useEffect(() => {
  if(data[0]?.value){
      setTypeOfDropdown("Sort: ") 
  } else {
      setTypeOfDropdown("Platform: ")
  }
},[])
 
  useEffect(() => {
    if(data[0]?.value){
        setTypeOfDropdown("Sort: ") 
    } else {
        setTypeOfDropdown("Platform: ")
    }
  },[])

  const handleItemClick = (id) => {
    setSelectedItem(id);
    let sortedId = null;
    if(data[0]?.value){
        sortedId = items.find((item) => item.id == id).value
        setTypeOfDropdown("Sort: ")
    }
    else{
        sortedId = id;
        setTypeOfDropdown("Platform: ")
    }
    dispatch(setAction(sortedId))
    toggleDropdown(false);
  }
  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdown}
        onMouseOver={
          () => {toggleDropdown(true)
            dispatch(setIsOpen(true))
          }
        }
        onMouseLeave={
          () => {toggleDropdown(false)
          dispatch(setIsOpen(false))
        }}
      >
        <div className={styles.dropdownHeader}>
          {selectedItem
            ? `${typeOfDropdown} ${items.find((item) => item.id == selectedItem).label}`
            : `${typeOfDropdown} All`}
          <i
            className={`fa fa-chevron-right ${styles.icon} ${
              isOpen && styles.iconOpen
            }`}
          />
        </div>
        <div
          className={`${styles.dropdownBody} ${
            isOpen && styles.dropdownBodyOpen
          }`}
        >
          {items.map((item) => (
            <div
            key={item.id}
              className={styles.dropdownItem}
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span
                className={`${styles.dropdownItemDot} ${
                  item.id == selectedItem && styles.dropdownItemDotSelected
                }`}
              >
                •{" "}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
