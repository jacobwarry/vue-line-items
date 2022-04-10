import Vue, {VNode} from "vue";
import VNestedTableDataCell
	from "@/components/VNestedTable/VNestedTableDataCell";
import {NestedTableColumn, NestedTableDataCell} from "@/types";

export default Vue.extend({
	name: "v-nested-table-data-row",
	props: {
		columns: {
			type: Array as () => NestedTableColumn[]
		},
		item: {
			type: Object
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
					isEditing: this.isEditing
				}
			});
		}
	},
	render(): VNode {
		return this.$createElement("tr", {
			staticClass: "v-nested-table__data-row",
			on: {
				click: () => {
					this.isEditing = true
				}
			}
		}, [
			this.genDataCells()
		])
	}
})