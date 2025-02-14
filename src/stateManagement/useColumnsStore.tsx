import { ColumnsState, TableActionResponse } from "cdm/TableStateInterface";
import { DatabaseView } from "DatabaseView";
import create from "zustand";
import column_state_actions from "stateManagement/columns/ColumnsStateActions";

const useColumnsStore = (view: DatabaseView) => {
  return create<ColumnsState>()((set) => {
    const tableActionResponse: TableActionResponse<ColumnsState> = {
      view: view,
      set: set,
      implementation: {
        ...mockColumnsState(),
        columns: view.columns,
        shadowColumns: view.shadowColumns,
      },
    };

    const columnActions = column_state_actions.run(tableActionResponse);
    return columnActions.implementation;
  });
};

function mockColumnsState(): ColumnsState {
  return {
    columns: [],
    shadowColumns: [],
    addToLeft: null,
    addToRight: null,
    remove: null,
    alterSorting: null,
    addOptionToColumn: null,
    alterColumnType: null,
    alterColumnLabel: null,
    alterColumnSize: null,
  };
}

export default useColumnsStore;
