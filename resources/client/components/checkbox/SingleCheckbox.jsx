import React from "react";
import { Checkbox, styled } from "@mui/material";
// import "./styles.css";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 1.5,
  width: 16,
  height: 16,
  boxShadow: "inset 0 0 0 1.5px #cdd7e2",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  // 'input:hover ~ &': {
  //   backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  // },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  "&:before": {
    display: "block",
    borderRadius: 1.5,
    width: 16,
    height: 16,
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210.056%22%20height%3D%227.542%22%20viewBox%3D%220%200%2010.056%207.542%22%3E%0A%20%20%3Cpath%20id%3D%22Path_2857%22%20data-name%3D%22Path%202857%22%20d%3D%22M10.114%2C14.556%2C16.4%2C8.27%2C15.141%2C7.013l-5.028%2C5.028L7.6%2C9.527%2C6.342%2C10.784Z%22%20transform%3D%22translate(-6.342%20-7.013)%22%20fill%3D%22%23fff%22%2F%3E%0A%3C%2Fsvg%3E")',
    content: '""',
    backgroundColor: "#376aed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});
// interface CheckboxProps {
//   onChange?: any;
//   checked?: any;
//   defaultChecked?: any;
//   onClick?: any;
// }
const SingleCheckbox = (props) => {
  return (
    <Checkbox
      onChange={props.onChange}
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      checked={props.checked}
      defaultChecked={props.defaultChecked && true}
      onClick={props.onClick}
    />
  );
};

export default SingleCheckbox;
