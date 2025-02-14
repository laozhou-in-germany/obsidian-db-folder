import { ColumnsState, TableActionResponse } from "cdm/TableStateInterface";
import { AbstractChain, AbstractHandler } from "patterns/AbstractFactoryChain";
import DeleteColumnHandlerAction from "stateManagement/columns/handlers/DeleteColumnAction";
import InsertColumnHandlerAction from "stateManagement/columns/handlers/NewColumnAction";
import AlterSortingColumnHandlerAction from "stateManagement/columns/handlers/AlterSortingColumnAction";
import AlterOptionToColumnHandlerAction from "stateManagement/columns/handlers/AlterOptionToColumnAction";
import AlterColumnTypeHandlerAction from "stateManagement/columns/handlers/AlterColumnTypeAction";
import AlterColumnLabelHandlerAction from "stateManagement/columns/handlers/AlterColumnLabelAction";
import AlterColumnSizeHandlerAction from "stateManagement/columns/handlers/AlterColumnSizeAction";
class ColumnsStateActions extends AbstractChain<TableActionResponse<ColumnsState>> {
    protected getHandlers(): AbstractHandler<TableActionResponse<ColumnsState>>[] {
        return [
            new InsertColumnHandlerAction(),
            new DeleteColumnHandlerAction(),
            new AlterSortingColumnHandlerAction(),
            new AlterOptionToColumnHandlerAction(),
            new AlterColumnTypeHandlerAction(),
            new AlterColumnLabelHandlerAction(),
            new AlterColumnSizeHandlerAction()
        ];
    }
}

const column_state_actions = new ColumnsStateActions();
export default column_state_actions;