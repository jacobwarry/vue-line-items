export type BooleanFunctionType = () => boolean;
export type StringFunctionType = (NestedTableDataCell) => string;

export interface NestedTable {
	renderHeader: boolean;
	columns: NestedTableColumn[];
}

export interface NestedItem {
	id: number;
	parentId: number;
	state: boolean;
	data: NestedTableDataCell[];
	children: NestedItem[]
}

export interface EditableSourceItem {
	value: string | number;
	text: string;
}

export interface NestedTableColumn {
	field: string;
	label: string;
	align?: "start" | "center" | "end";
	width?: string | number;
	displayValue?: StringFunctionType;
	editableInput?: "text" | "select";
	editableType?: "string" | "integer" | "decimal";
	editableSource?: EditableSourceItem[];
	isEditable?: BooleanFunctionType | boolean;
	isHidden?: boolean;
}

export interface NestedTableDataCell {
	field: string;
	value: any;
	isHidden?: BooleanFunctionType | boolean;
	span: number;
}