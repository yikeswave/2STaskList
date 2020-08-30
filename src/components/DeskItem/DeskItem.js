import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useRouter } from "react-router5";
import { Card, Div, Button } from "@vkontakte/vkui";

import "./DeskItem.css";
import {pages} from '../../router/index';
import { deleteDesk } from "../../actions/index";
import Context from "../App/context";

const DeskItem = ({ id, children }) => {
  const router = useRouter();
  const { removeDesk } = useContext(Context);

  const goToColumnPanel = () => router.navigate(pages.COLUMNS, {deskId: id});

  const deleteItem = (e) => {
    e.stopPropagation();
    deleteDesk(id)
      .then(() => removeDesk(id))
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
