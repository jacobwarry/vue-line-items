import Vue, {PropType, VNode} from "vue";
import {NestedItem, NestedTable} from "@/types";
import {
	VNestedTableColGroup,
	VNestedTableDataBody,
	VNestedTableHead
} from "@/components/VNestedTable/index";

export default Vue.extend({
	name: "v-nested-table-data-table",
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
		genColGroups(table: NestedTable) {
			return this.$createElement(VNestedTableColGroup, {
				props: {
					table
				}
			})
		},
		genHeader(table: NestedTable) {
			return this.$createElement(VNestedTableHead, {
				props: {
					columns: table.columns,
					hideLabels: true
				}
			})
		},
		genBody() {
			return this.$createElement(VNestedTableDataBody, {
				props: {...this.$props}
			})
		}
	},
	render(): VNode {
		return this.$createElement("table", {
			staticClass: "v-nested-table__data-table"
		}, [
			this.genColGroups(this.$props.tables[this.$props.depth]),
			this.genHeader(this.$props.tables[this.$props.depth]),
			this.genBody()
		])
	}
})