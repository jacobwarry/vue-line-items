export interface NestedDataTableHead<T extends any = any> {
	text: string;
	value: string;
	align?: "start" | "center" | "end";
	width?: string | number;
}

export interface NestedTable {
	renderHeader: boolean;
	columns: NestedTableColumn[];
}

export interface NestedTableColumn {
	field: string;
	label: string;
	align?: "start" | "center" | "end";
	width?: string | number;
	hidden?: boolean;
}