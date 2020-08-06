import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";

import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

const Desks = ({ onChangePanel, setDesks, desks, removeDesk, addDesk }) => {
  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>

      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>

      <DeskList
        desks={desks}
        onDelete={removeDesk}
        onLoadDesks={setDesks}
        onDeskClick={onChangePanel}
      />
    </Fragment>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
  setDesks: PropTypes.func.isRequired,
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeDesk: PropTypes.func.isRequired,
  addDesk: PropTypes.func.isRequired,
};

export default Desks;
