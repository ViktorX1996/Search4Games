import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import React from "react";
import copy from "../../img/copyTitle.svg";
import { GameTitleText } from "../Search/DescriptionPage/descriptionStyled";
export default function CustomAlert({ title, copyHandler }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
        setOpen(false);
    }, 1000)
    copyHandler();
  };
  return (
    <>
    <div onClick={handleClick}>
      <GameTitleText>
        {title}
      <Button  variant="text">
        <img style={{ width: "20px" }} src={copy} alt="copy" />
      </Button>
      </GameTitleText>
      </div>
      <Dialog
        disableScrollLock={true}
        disableRestoreFocus={true}
        open={open}
        onClose={handleClick}
        BackdropProps={{ invisible: true }}
      >
        <Alert 
        alignItems="end" variant="outlined" severity="info">
          Game "{title}" is copied.
        </Alert>
      </Dialog>
    </>
  );
}
