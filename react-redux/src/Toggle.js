import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSwitch } from "./UiReducer";

class Toggle extends Component {
  render() {
    const { ui, toggleSwitch } = this.props;
    return (
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
}

const mapStateToProps = ({ ui }) => ({
  ui
});

export default connect(
  mapStateToProps,
  { toggleSwitch }
)(Toggle);