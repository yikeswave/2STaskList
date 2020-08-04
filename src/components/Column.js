import React from "react";
import { Div, Card, CardGrid } from "@vkontakte/vkui";

import "./Column.css";

const Column = () => {
  return (
    <Div className="Column">
      <Card className="Column__wrapper">
        <CardGrid>
          <Card size="l">
            <Div>Карточка 1</Div>
          </Card>

          <Card size="l">
            <Div>Карточка 2</Div>
          </Card>

          <Card size="l">
            <Div>Карточка 3</Div>
          </Card>
        </CardGrid>
      </Card>
    </Div>
  );
};

export default Column;
