import Vue, {VNode} from "vue";
import {NestedItem, NestedTable} from "@/types";
import {
	VNestedTableColGroup,
	VNestedTableContainerBody,
	VNestedTableHead
} from "@/components/VNestedTable/index";
import {PropValidator} from "vue/types/options";

export default Vue.extend({
	name: "v-nested-table-container-table",
	props: {
		tables: {
			type: Array,
			default: () => []
		} as PropValidator<NestedTable[]>,
		items: {
			type: Array,
			default: () => []
		} as PropValidator<NestedItem[]>,
		depth: {
			type: Number,
			default: 0
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
					hideLabels: !table.renderHeader,
					depth: this.depth
				}
			})
		},
		genBody() {
			return this.$createElement(VNestedTableContainerBody, {
				props: {
					...this.$props,
					depth: this.depth
				}
			})
		}
	},
	render(): VNode {
		return this.$createElement("table", {
				staticClass: "v-nested-table__container-table"
			},
			[
				this.genColGroups(this.$props.tables[this.depth]),
				this.genHeader(this.$props.tables[this.depth]),
				this.genBody()
			])
	}
})