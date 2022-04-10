import Vue, {VNode} from "vue";
import {
	EditableSourceItem,
	NestedTableColumn,
	NestedTableDataCell
} from "@/types";

export default Vue.extend({
	name: "v-nested-table-data-cell",
	props: {
		column: {
			type: Object as () => NestedTableColumn
		},
		data: {
			type: Object as () => NestedTableDataCell
		},
		isRowBeingEdited: {
			type: Boolean
		}
	},
	data() {
		return {
			isCellBeingEdited: false
		}
	},
	methods: {
		genEditableCell() {
			switch(this.column?.editableInput) {
				case "text":
					return this.$createElement("input", {
						attrs: {
							value: this.data.value
						}
					});
				case "select":
					return this.$createElement("select", {}, [
						this.column?.editableSource?.map((item: EditableSourceItem) => {
							return this.$createElement("option", {
								attrs: {
									value: item.value,
									selected: item.value === this.data.value
								}
							}, item.text);
						})
					]);
			}
			return this.$createElement("input");
		},
		genDisplayCell() {
			let value = this.data.value;
			if (Object.prototype.hasOwnProperty.call(this.column, "displayValue")
				&& typeof this.column.displayValue === "function") {
				value = this.column.displayValue(this.data);
			}

			switch(this.column?.editableInput) {
				case "select":
					if (this.column?.editableSource) {
						const item = this.column.editableSource
							.find((item: EditableSourceItem) =>
								item.value === this.data.value);

						if (item) {
							value = item.text;
						}
					}
					break;
			}
			
			return this.$createElement("span", {}, value);
		},
		genChildNode(isEditable: undefined | boolean) {
			return (this.isRowBeingEdited || this.isCellBeingEdited) && isEditable
				? this.genEditableCell()
				: this.genDisplayCell();
		}
	},
	render(): VNode {
		let isEditable: undefined | boolean = false;
		if (Object.prototype.hasOwnProperty.call(this.column, "isEditable")) {
			isEditable = typeof this.column.isEditable === "function"
				? this.column.isEditable()
				: this.column.isEditable;
		}
		
		return this.$createElement("td", {
				staticClass: "v-nested-table__data-cell",
				class: {
					"data-cell-editing": (this.isRowBeingEdited || this.isCellBeingEdited) && isEditable
				},
				attrs: {
					colspan: this.data.span
						? this.data.span
						: 1
				},
				on: {
					click: () => {
						this.isCellBeingEdited = true;
						this.$emit("triggerEditCell", true);
					}
				}
			},
			[
				this.genChildNode(isEditable)
			]
		)
	}
})