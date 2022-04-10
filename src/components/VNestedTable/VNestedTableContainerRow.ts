import Vue, {PropType, VNode} from "vue";
import {NestedItem, NestedTable} from "@/types";
import {PropValidator} from "vue/types/options";
import {VNestedTableDataTable} from "@/components/VNestedTable/index";

export default Vue.extend({
	name: "v-nested-table-container-row",
	props: {
		tables: {
			type: Array as PropType<NestedTable[]>,
			default: () => []
		} as PropValidator<NestedTable[]>,
		item: {
			type: Object as PropType<NestedItem>
		},
		depth: {
			type: Number,
			default: 0
		}
	},
	methods: {
		genContainerCell() {
			return this.$createElement("td", {
					attrs: {
						colspan: this.tables[this.depth].columns.length
					},
					staticClass: "v-nested-table__container-cell"
				},
				[
					this.$createElement(VNestedTableDataTable, {
						props: {...this.$props}
					})
				])
		}
	},
	render(): VNode {
		return this.$createElement("tr", {
			staticClass: "v-nested-table__container-row",
			attrs: {
				"data-depth": this.depth,
				"data-id": this.item.id,
				"data-parentid": this.item.parentId,
				"data-children": this.item.children?.length
			}
		}, [
			this.genContainerCell()
		]);
	}
})