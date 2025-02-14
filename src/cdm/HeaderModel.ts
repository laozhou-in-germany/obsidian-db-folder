import { ColumnOrderState, Header, Table } from "@tanstack/react-table";
import { DatabaseHeaderProps, RowDataType, TableColumn } from "cdm/FolderModel";

export type HeaderMenuProps = {
    headerProps: DatabaseHeaderProps;
    propertyIcon: any;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    created: boolean;
    referenceElement: any;
    labelState: string;
    setLabelState: (label: string) => void;
};

export type TableHeaderProps = {
    table: Table<RowDataType>;
    header: Header<RowDataType, TableColumn>;
    findColumn: (id: string) => {
        findedColumn: TableColumn;
        index: number;
    };
    headerIndex: number;
};