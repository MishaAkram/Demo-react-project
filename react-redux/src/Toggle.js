import React from "react";
import { connect ,useSelector} from "react-redux";
import { toggleSwitch } from "./UiReducer";

const Toggle = ({toggleSwitch }) => {
    const ui = useSelector(state => state.ui)
  return(
  <div>
        <div>{JSON.stringify(ui)}</div>
        <input
            type="checkbox"
            value={ui.toggle}
            onChange={toggleSwitch}
        />
    </div>
);
}

export default connect(
    null,
    { toggleSwitch }
)(Toggle);