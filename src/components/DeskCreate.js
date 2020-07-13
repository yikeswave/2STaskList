import React, { Fragment } from "react";
import { Button } from "@vkontakte/vkui";
import Icon24Add from "@vkontakte/icons/dist/24/add";

const DeskCreate = () => {
  return (
    <Fragment>
      <Button before={<Icon24Add />} size="xl">
        Создать доску
      </Button>
    </Fragment>
  );
};

export default DeskCreate;
