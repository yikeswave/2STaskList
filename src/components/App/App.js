import React, { Fragment, useEffect } from "react";
import { View, Panel } from "@vkontakte/vkui";
import { useRoute } from "react-router5";

import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { pages } from "../../router";
import { useAppState } from "./hooks";

const App = () => {
  const { activePanel, popout, changeRoute } = useAppState();
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe(changeRoute);

    changeRoute({ route });
  }, []);

  if (!activePanel) {
    return null;
  }

  return (
    <Fragment>
      <View activePanel={activePanel} popout={popout}>
        <Panel id={pages.DESKS}>
          <Desks />
        </Panel>
        <Panel id={pages.COLUMNS} className="Columns">
          <Columns />
        </Panel>
      </View>
    </Fragment>
  );
};

export default App;
