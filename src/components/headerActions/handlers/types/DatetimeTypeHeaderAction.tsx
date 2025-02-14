import { HeaderActionResponse } from "cdm/HeaderActionModel";
import { AbstractHeaderAction } from "components/headerActions/handlers/AbstractHeaderAction";
import React from "react";
import {
  ActionTypes,
  InputLabel,
  InputType,
  MetadataLabels,
} from "helpers/Constants";
import CalendarTimeIcon from "components/img/CalendarTime";
import headerTypeComponent from "components/headerActions/HeaderTypeComponent";
import { TableColumn } from "cdm/FolderModel";

export default class DatetimeTypeHeaderAction extends AbstractHeaderAction {
  globalHeaderActionResponse: HeaderActionResponse;
  handle(headerActionResponse: HeaderActionResponse): HeaderActionResponse {
    this.globalHeaderActionResponse = headerActionResponse;
    this.addDatetimeType();
    return this.goNext(this.globalHeaderActionResponse);
  }
  private addDatetimeType() {
    this.globalHeaderActionResponse.buttons.push(
      datetimeTypeComponent(this.globalHeaderActionResponse)
    );
  }
}

function datetimeTypeComponent(headerActionResponse: HeaderActionResponse) {
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
  const datetimeOnClick = (e: any) => {
    hooks.setShowType(false);
    hooks.setExpanded(false);
    parseDataOfColumn(
      column.columnDef as TableColumn,
      InputType.CALENDAR_TIME,
      ddbbConfig
    );
    alterColumnType(column.columnDef as TableColumn, InputType.CALENDAR_TIME);
  };
  return headerTypeComponent({
    onClick: datetimeOnClick,
    icon: <CalendarTimeIcon />,
    label: InputLabel.CALENDAR_TIME,
  });
}
