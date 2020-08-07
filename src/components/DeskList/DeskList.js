import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";

import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "../../actions/index";

const DeskList = ({ desks, onDelete, onLoadDesks, onDeskClick }) => {
  // Запрос к БД
  useEffect(() => {
    getDesks().then(onLoadDesks);
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem
          onClick={() => onDeskClick(id)}
          onDelete={onDelete}
          key={id}
          id={id}
        >
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

DeskList.propTypes = {
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLoadDesks: PropTypes.func.isRequired,
  onDeskClick: PropTypes.func.isRequired,
};

export default DeskList;
