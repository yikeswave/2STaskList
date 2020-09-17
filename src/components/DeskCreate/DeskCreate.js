import React from "react";
import { useDispatch } from "react-redux";

import CreateForm from "../CreateForm/CreateForm";
import { createDesk } from "../../actions/index";
import { addDesk } from "../../actions/actions";

const DeskCreate = () => {
  const dispatch = useDispatch();

  const createItem = (name) =>
    createDesk(name)
      .then((doc) => dispatch(addDesk({ id: doc.id, ...doc.data() })))
      .catch(console.error);

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default DeskCreate;
