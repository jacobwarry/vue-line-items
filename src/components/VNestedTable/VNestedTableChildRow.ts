import Vue, {PropType, VNode} from "vue";
import {NestedItem, NestedTable} from "@/types";
import {VNestedTableContainerTable} from "@/components/VNestedTable/index";

export default Vue.extend({
	name: "v-nested-table-child-row",
	props: {
		item: {
			type: Object as PropType<NestedItem>
		},
		depth: {
			type: Number
		},
		tables: {
			type: Array as PropType<NestedTable[]>,
			default: () => []
		}
	},
	methods: {
		genChildCell() {
			return this.$createElement("td", {
					attrs: {
						colspan: this.tables[this.depth - 1].columns.length,
						"data-depth": this.depth
					},
					staticClass: "v-nested-table__child-cell"
				}, [
					this.$createElement(VNestedTableContainerTable, {
						props: {
							tables: this.tables,
							items: this.item.children,
							depth: this.depth
						}
					})
				]
			)
		}
	},
	render(): VNode {
		return this.$createElement("tr", {
				staticClass: "v-nested-table__child-row",
				attrs: {
					"data-parentid": this.item.id
				}
			}, [
				this.genChildCell()
			]
		)
	}
})