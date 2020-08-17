import React, { useContext } from "react";
import { Div } from "@vkontakte/vkui";

import "../Column/Column.css";

import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions/index";
import Context from "../App/context";

const ColumnCreate = () => {
  const { addColumn, activeDesk } = useContext(Context);

  const createItem = (name) =>
    createColumn(name, activeDesk.id)
      .then((doc) => addColumn({ id: doc.id, ...doc.data() }))
      .catch(console.error);

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
