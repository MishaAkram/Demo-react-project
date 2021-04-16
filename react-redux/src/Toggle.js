import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSwitch } from "./UiReducer";

const Toggle = ({ ui, toggleSwitch }) => (
    <div>
        <div>{JSON.stringify(ui)}</div>
        <input
            type="checkbox"
            value={ui.toggle}
            onChange={toggleSwitch}
        />
    </div>
);



const mapStateToProps = ({ ui }) => ({
    ui
});

export default connect(
    mapStateToProps,
    { toggleSwitch }
)(Toggle);