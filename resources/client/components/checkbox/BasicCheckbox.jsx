import React from "react";
import { FormControlLabel } from "@mui/material";
// import "./styles.css";
import SingleCheckbox from "./SingleCheckbox";

// interface CheckboxProps {
//   onChange?: any;
//   checked?: any;
//   defaultChecked?: any;
//   onClick?: any;
//   label?: any;
// }
const BasicCheckbox = (props) => {
  // const [isChecked, setIsChecked] = useState();
  const handleChange = (e) => {
    // setIsChecked(e.target.checked);
    props.onChange(e.target.checked);
  };
  return (
    <FormControlLabel
      className="checkbox"
      componentsProps={{ typography: { sx: { marginLeft: "8px" } } }}
      control={
        <SingleCheckbox
          onChange={handleChange}
          checked={props.checked}
          defaultChecked={props.defaultChecked && true}
          onClick={props.onClick}
        />
      }
      label={props.label}
    />
  );
};

export default BasicCheckbox;
