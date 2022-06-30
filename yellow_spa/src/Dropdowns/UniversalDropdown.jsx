import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./PlatformDropdown.module.css";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../Redux/gameReducer";
export const UniversalDropdown = ({
  data,
  setAction,
  selectedItem,
  setSelectedItem,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [defaultTitle, setDefaultTitle] = useState("");
  const dispatch = useDispatch();
  const toggleDropdown = (val) => setOpen(val);
  useEffect(() => {
    if (data[0]?.value) {
      setDefaultTitle("Sort: ")
    } else {
      setDefaultTitle("Platform: ")
    }
  }, []);

  useEffect(() => {
    dispatch(setIsOpen(isOpen));
  }, [isOpen]);

  const handleItemClick = (id) => {
    setSelectedItem(id);
    let sortedId = null;
    if (data[0]?.value) {
      sortedId = items.find((item) => item.id == id).value;
      setDefaultTitle("Sort: ")
    } else {
      sortedId = id;
      setDefaultTitle("Platform: ")
    }
    dispatch(setAction(sortedId));
    toggleDropdown(false);
  };
  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdown}
        onMouseOver={() => {
          toggleDropdown(true);
          dispatch(setIsOpen(true));
        }}
        onMouseLeave={() => {
          toggleDropdown(false);
          dispatch(setIsOpen(false));
        }}
      >
        <div className={styles.dropdownHeader}>
          {selectedItem
            ? `${defaultTitle} ${
                items.find((item) => item.id == selectedItem).label
              }`
            : `${defaultTitle} All`}
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
