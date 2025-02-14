import { HeaderActionResponse } from "cdm/HeaderActionModel";
import { AbstractHeaderAction } from "components/headerActions/handlers/AbstractHeaderAction";
import MultiIcon from "components/img/Multi";
import React from "react";
import { ActionTypes, InputLabel, InputType } from "helpers/Constants";
import headerTypeComponent from "components/headerActions/HeaderTypeComponent";
import { TableColumn } from "cdm/FolderModel";

export default class SelectTypeHeaderAction extends AbstractHeaderAction {
  globalHeaderActionResponse: HeaderActionResponse;
  handle(headerActionResponse: HeaderActionResponse): HeaderActionResponse {
    this.globalHeaderActionResponse = headerActionResponse;
    this.addSelectType();
    return this.goNext(this.globalHeaderActionResponse);
  }
  private addSelectType() {
    this.globalHeaderActionResponse.buttons.push(
      selectTypeComponent(this.globalHeaderActionResponse)
    );
  }
}
function selectTypeComponent(headerActionResponse: HeaderActionResponse) {
  const { hooks } = headerActionResponse;
  const { table, column } = headerActionResponse.headerMenuProps.headerProps;
  const alterColumnType = table.options.meta.tableState.columns(
    (state) => state.alterColumnType
  );
  const [rows, parseDataOfColumn] = table.options.meta.tableState.data(
    (state) => [state.rows, state.parseDataOfColumn]
  );
  const ddbbConfig = table.options.meta.tableState.configState(
    (state) => state.ddbbConfig
  );
  const selectOnClick = (e: any) => {
    hooks.setShowType(false);
    hooks.setExpanded(false);
    parseDataOfColumn(
      column.columnDef as TableColumn,
      InputType.SELECT,
      ddbbConfig
    );
    alterColumnType(column.columnDef as TableColumn, InputType.SELECT, rows);
  };
  return headerTypeComponent({
    onClick: selectOnClick,
    icon: <MultiIcon />,
    label: InputLabel.SELECT,
  });
}
