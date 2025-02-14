import { RowSelectOption, TagsProps } from "cdm/ComponentsModel";
import Relationship from "components/RelationShip";
import CustomTagsStyles from "components/styles/TagsStyles";
import CreatableSelect from "react-select/creatable";
import { randomColor } from "helpers/Colors";
import React, { useState } from "react";
import { ActionMeta, OnChangeValue } from "react-select";
import { c } from "helpers/StylesHelper";
import { Literal } from "obsidian-dataview/lib/data-model/value";
import NoteInfo from "services/NoteInfo";
import { TableColumn } from "cdm/FolderModel";

const TagsPortal = (tagsProps: TagsProps) => {
  const { defaultCell } = tagsProps;
  const { row, column, table } = defaultCell;
  const [columns, addOptionToColumn] = table.options.meta.tableState.columns(
    (state) => [state.columns, state.addOptionToColumn]
  );
  const [rows, updateCell] = table.options.meta.tableState.data((state) => [
    state.rows,
    state.updateCell,
  ]);

  const ddbbConfig = table.options.meta.tableState.configState(
    (state) => state.ddbbConfig
  );

  const tableColumn = column.columnDef as TableColumn;
  // Tags reference state
  const [showSelectTags, setShowSelectTags] = useState(false);
  // tags values state
  const [tagsState, setTagsState] = useState(
    Array.isArray(rows[row.index][tableColumn.key])
      ? (rows[row.index][tableColumn.key] as Literal[])
      : []
  );

  /** Note info of current Cell */
  const note: NoteInfo = (defaultCell.row.original as any).__note__;

  function getColor(tag: string) {
    const match = tableColumn.options.find(
      (option: { label: string }) => option.label === tag
    );
    if (match) {
      return match.backgroundColor;
    } else {
      // In case of new tag, generate random color
      const color = randomColor();
      const newOption: RowSelectOption = {
        label: tag,
        backgroundColor: color,
      };
      const currentColumn = columns.find(
        (col: TableColumn) => col.key === tableColumn.key
      );
      currentColumn.options.push(newOption);
      table.options.meta.view.diskConfig.updateColumnProperties(column.id, {
        options: currentColumn.options,
      });
      return color;
    }
  }

  const defaultValue = tagsState.map((tag: string) => ({
    label: tag,
    value: tag,
    color: getColor(tag),
  }));

  const multiOptions = tableColumn.options.map((option: RowSelectOption) => ({
    value: option.label,
    label: option.label,
    color: option.backgroundColor,
  }));
  const handleOnChange = (
    newValue: OnChangeValue<any, true>,
    actionMeta: ActionMeta<RowSelectOption>
  ) => {
    const arrayTags = newValue.map((tag: any) => tag.value);
    // Update on disk & memory
    updateCell(row.index, tableColumn, arrayTags, columns, ddbbConfig);
    // Add new option to column options
    newValue
      .filter(
        (tag: any) =>
          !tableColumn.options.find((option: any) => option.label === tag.value)
      )
      .forEach((tag: any) => {
        addOptionToColumn(tableColumn, tag.value, randomColor());
      });
    setTagsState(arrayTags);
  };

  function TagsForm() {
    return (
      <div className={c("tags")}>
        <CreatableSelect
          defaultValue={defaultValue}
          closeMenuOnSelect={false}
          isSearchable
          isMulti
          autoFocus
          menuPosition="fixed"
          styles={CustomTagsStyles}
          options={multiOptions}
          onBlur={() => setShowSelectTags(false)}
          onChange={handleOnChange}
          menuPortalTarget={document.body}
          menuShouldBlockScroll={true}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
    );
  }
  return (
    <>
      {showSelectTags
        ? TagsForm()
        : tagsState && (
            <div
              className={
                c("tags-container") + " cell-padding d-flex flex-wrap-wrap"
              }
              onClick={() => setShowSelectTags(true)}
              style={{ width: column.getSize() }}
            >
              {tagsState.map((tag: string) => (
                <div key={`key-${tag}`}>
                  <Relationship
                    key={`key-Relationship-${tag}`}
                    value={tag}
                    backgroundColor={getColor(tag)}
                  />
                </div>
              ))}
            </div>
          )}
    </>
  );
};
export default TagsPortal;
