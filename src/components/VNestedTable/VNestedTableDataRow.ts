import Vue, {PropType, VNode} from "vue";
import {NestedItem, NestedTableColumn, NestedTableDataCell} from "@/types";
import {VNestedTableDataCell} from "@/components/VNestedTable/index";

export default Vue.extend({
	name: "v-nested-table-data-row",
	props: {
		columns: {
			type: Array as PropType<NestedTableColumn[]>
		},
		item: {
			type: Object as PropType<NestedItem>
		}
	},
	data() {
		return {
			isEditing: false
		}	
	},
	methods: {
		genDataCells() {
			return this.item.data.map((data: NestedTableDataCell, index: number) => {
				const column = this.columns[index];
				let isHidden: undefined | boolean = false;
				if (Object.prototype.hasOwnProperty.call(data, "isHidden")) {
					isHidden = typeof data.isHidden === "function"
						? data.isHidden()
						: data.isHidden;
				}
				if (!isHidden) {
					return this.genDataCell(data, column)
				}
			});
		},
		genDataCell(data: NestedTableDataCell, column: NestedTableColumn) {
			return this.$createElement(VNestedTableDataCell, {
				props: {
					data,
					column,
					isRowBeingEdited: this.isEditing
				},
				on: {
					triggerEditCell: (state: boolean) => {
						this.isEditing = state;
						this.$emit("editItem", this.item.id)
					}
				}
			});
		},
		"edit-cell": function() {
			console.log("hoi");
		}
	},
	render(): VNode {
		return this.$createElement("tr", {
			staticClass: "v-nested-table__data-row",
		}, [
			this.genDataCells()
		])
	}
})