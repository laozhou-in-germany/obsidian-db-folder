import React from "react";
import { flexRender } from "@tanstack/react-table";
import { c } from "helpers/StylesHelper";
import { TableHeaderProps } from "cdm/HeaderModel";
import { useDrag, useDrop } from "react-dnd";
import { TableColumn } from "cdm/FolderModel";
import { DnDConfiguration } from "helpers/Constants";

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export default function TableHeader(headerProps: TableHeaderProps) {
  const { table, header, findColumn, headerIndex } = headerProps;
  const { id } = header.column.columnDef as TableColumn;
  const { view, tableState } = table.options.meta;
  const { columnOrder } = table.options.state;
  const columns = tableState.columns((state) => state.columns);

  const originalIndex = React.useMemo(() => {
    return columnOrder.findIndex((colId) => colId === id);
  }, [columnOrder]);

  //DnD
  const DnDref = React.useRef<HTMLDivElement>(null);

  function moveColumn(source: number, destinationKey: string) {
    const { index: destIndex } = findColumn(destinationKey);
    const newColumnOrder = [...columnOrder];
    newColumnOrder.splice(destIndex, 1);
    newColumnOrder.splice(source, 0, columns[destIndex].id);
    table.setColumnOrder(newColumnOrder);
    view.diskConfig.reorderColumns(newColumnOrder);
  }

  const [{ isDragging, handlerId }, drag, dragPreview] = useDrag(
    () => ({
      type: DnDConfiguration.DRAG_TYPE,
      item: { id, originalIndex },
      collect: (monitor) => ({
        handlerId: monitor.getHandlerId(),
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveColumn(originalIndex, droppedId);
        }
      },
    }),
    [id, originalIndex, findColumn]
  );

  const [, drop] = useDrop(
    () => ({
      accept: DnDConfiguration.DRAG_TYPE,
      hover({ id: draggedId }: DragItem) {
        if (draggedId !== id) {
          const { index: overIndex } = findColumn(id);
          moveColumn(overIndex, draggedId);
        }
      },
    }),
    [findColumn]
  );

  const opacity = isDragging ? 0 : 1;
  drag(drop(DnDref));
  return (
    <div
      key={`${header.id}-${headerIndex}`}
      className={`${c("th noselect")} header`}
      style={{
        width: header.getSize(),
        opacity,
      }}
    >
      <div
        ref={DnDref}
        data-handler-id={handlerId}
        key={`${header.id}-${headerIndex}-dnd`}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
      </div>
      <div
        key={`${header.id}-${headerIndex}-resizer`}
        {...{
          onMouseDown: header.getResizeHandler(),
          onTouchStart: header.getResizeHandler(),
          className: `resizer ${
            header.column.getIsResizing() ? "isResizing" : ""
          }`,
        }}
      />
    </div>
  );
}
