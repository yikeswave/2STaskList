import React, { Fragment, useEffect } from "react";
import { PanelHeaderSimple, PanelHeaderBack, Gallery } from "@vkontakte/vkui";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "react-router5";

import "./Columns.css";

import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { fetchColumns } from "../../actions/index";
import { getColumns, getDesks } from "../../selectors/selectors";

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const desks = useSelector(getDesks);
  const goToDesks = () => window.history.back();
  const {
    route: {
      params: { deskId },
    },
  } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  // Запрос к БД
  useEffect(() => {
    dispatch(fetchColumns(deskId));
  }, [dispatch, deskId]);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>
        Доска {desk.name ? `"${desk.name}"` : ""}
      </PanelHeaderSimple>

      <Gallery className="Columns__list" slideWidth="85%" align="left">
        {columns.map(({ id, name }) => (
          <Column key={id} name={name} id={id} />
        ))}
        <ColumnCreate />
      </Gallery>
    </Fragment>
  );
};

export default Columns;
