import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./Navbar.css";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("0");
  const handleChange = (event) => {
    setValue(event.target.value);
    props.changeAlgorithm(event);
  };

  let disabled = false;
  if (props.pos === 1) disabled = !props.comparisonMode;

  return (
    <div className="ml-2 mr-2">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          disabled={disabled}
          onChange={handleChange}
          style={{
            color: "grey",
            background: "transparent",
            border: "2px solid aquamarine",
            borderRadius: "8px",
          }}
        >
          <MenuItem value={0} style={{ selected: true }}>
            Linear Search
          </MenuItem>
          <MenuItem value={1}>Binary Search</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
