export interface NestedDataTableHeader<T extends any = any> {
	text: string;
	value: string;
	align?: "start" | "center" | "end";
	width?: string | number;
}