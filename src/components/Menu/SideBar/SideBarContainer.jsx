import { connect } from "react-redux";
import { SideBar } from "./SideBar";

const mapStateToProps = (state) => {
  return {
    friends: state.sideBar.friends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const SideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
