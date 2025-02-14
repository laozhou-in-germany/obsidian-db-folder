import { HeaderActionResponse } from "cdm/HeaderActionModel";
import { AbstractHeaderAction } from "components/headerActions/handlers/AbstractHeaderAction";
import React from "react";
import { ActionTypes, InputLabel, InputType } from "helpers/Constants";
import TagsIcon from "components/img/TagsIcon";
import headerTypeComponent from "components/headerActions/HeaderTypeComponent";
import { TableColumn } from "cdm/FolderModel";

export default class TagsTypeHeaderAction extends AbstractHeaderAction {
  globalHeaderActionResponse: HeaderActionResponse;
  handle(headerActionResponse: HeaderActionResponse): HeaderActionResponse {
    this.globalHeaderActionResponse = headerActionResponse;
    this.addTagsType();
    return this.goNext(this.globalHeaderActionResponse);
  }
  private addTagsType() {
    this.globalHeaderActionResponse.buttons.push(
      tagsTypeComponent(this.globalHeaderActionResponse)
    );
  }
}

function tagsTypeComponent(headerActionResponse: HeaderActionResponse) {
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

  const tagsOnClick = (e: any) => {
    hooks.setShowType(false);
    hooks.setExpanded(false);
    parseDataOfColumn(
      column.columnDef as TableColumn,
      InputType.TAGS,
      ddbbConfig
    );
    alterColumnType(column.columnDef as TableColumn, InputType.TAGS, rows);
  };
  return headerTypeComponent({
    onClick: tagsOnClick,
    icon: <TagsIcon />,
    label: InputLabel.TAGS,
  });
}
