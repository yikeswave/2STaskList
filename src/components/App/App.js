import React, { Fragment, useEffect } from "react";
import { View, Panel } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useSelector, useDispatch } from "react-redux";

import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { pages } from "../../router";
import { changeRoute } from "../../actions/index";
import { getActivePanel, getPopout } from "../../selectors/selectors";

const App = () => {
  const dispatch = useDispatch();
  const activePanel = useSelector(getActivePanel);
  const popout = useSelector(getPopout);
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe((...args) => dispatch(changeRoute(...args)));

    dispatch(changeRoute({ route }));
  }, [dispatch]);

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
