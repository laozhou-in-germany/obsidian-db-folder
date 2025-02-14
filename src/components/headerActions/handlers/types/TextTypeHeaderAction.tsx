import { HeaderActionResponse } from "cdm/HeaderActionModel";
import { AbstractHeaderAction } from "components/headerActions/handlers/AbstractHeaderAction";
import TextIcon from "components/img/Text";
import React from "react";
import { ActionTypes, InputLabel, InputType } from "helpers/Constants";
import headerTypeComponent from "components/headerActions/HeaderTypeComponent";
import { TableColumn } from "cdm/FolderModel";

export default class TextTypeHeaderAction extends AbstractHeaderAction {
  globalHeaderActionResponse: HeaderActionResponse;
  handle(headerActionResponse: HeaderActionResponse): HeaderActionResponse {
    this.globalHeaderActionResponse = headerActionResponse;
    this.addTextType();
    return this.goNext(this.globalHeaderActionResponse);
  }
  private addTextType() {
    this.globalHeaderActionResponse.buttons.push(
      textTypeComponent(this.globalHeaderActionResponse)
    );
  }
}

function textTypeComponent(headerActionResponse: HeaderActionResponse) {
  const { hooks } = headerActionResponse;
  const { table, column } = headerActionResponse.headerMenuProps.headerProps;
  const alterColumnType = table.options.meta.tableState.columns(
    (state) => state.alterColumnType
  );
  const parseDataOfColumn = table.options.meta.tableState.data(
    (state) => state.parseDataOfColumn
  );
  const ddbbConfig = table.options.meta.tableState.configState(
    (state) => state.ddbbConfig
  );
  const tagsOnClick = (e: any) => {
    hooks.setShowType(false);
    hooks.setExpanded(false);
    parseDataOfColumn(
      column.columnDef as TableColumn,
      InputType.TEXT,
      ddbbConfig
    );
    alterColumnType(column.columnDef as TableColumn, InputType.TEXT);
  };

  return headerTypeComponent({
    onClick: tagsOnClick,
    icon: <TextIcon />,
    label: InputLabel.TEXT,
  });
}
