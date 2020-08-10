import React, { useEffect, useContext } from "react";
import { CardGrid } from "@vkontakte/vkui";

import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "../../actions/index";
import Context from "../App/context";

const DeskList = () => {
  const { desks, setDesks } = useContext(Context);
  // Запрос к БД
  useEffect(() => {
    getDesks().then(setDesks);
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem key={id} id={id}>
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

export default DeskList;
