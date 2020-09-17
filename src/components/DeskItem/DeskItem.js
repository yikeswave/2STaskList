import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "react-router5";
import { Card, Div, Button } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import "./DeskItem.css";
import { pages } from "../../router/index";
import { deleteDesk } from "../../actions/index";
import { removeDesk } from "../../actions/actions";

const DeskItem = ({ id, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const goToColumnPanel = () => router.navigate(pages.COLUMNS, { deskId: id });

  const deleteItem = (e) => {
    e.stopPropagation();

    deleteDesk(id)
      .then(() => dispatch(removeDesk(id)))
      .catch(console.error);
  };

  return (
    <Card size="l" onClick={goToColumnPanel}>
      <Div className="DeskItem__content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propType = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DeskItem;
