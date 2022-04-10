import "./VNestedTable.scss"

import Vue, {VNode} from "vue";
import {NestedItem, NestedTable} from "@/types";
import {PropValidator} from "vue/types/options";
import {
	VNestedTableColGroup,
	VNestedTableContainer,
	VNestedTableContainerBody,
	VNestedTableHead
} from "@/components/VNestedTable/index";

export default Vue.extend({
	name: "v-nested-table",
	props: {
		tables: {
			type: Array,
			default: () => []
		} as PropValidator<NestedTable[]>,
		items: {
			type: Array,
			default: () => []
		} as PropValidator<NestedItem[]>
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
					columns: table.columns
				}
			})
		},
		genBody() {
			return this.$createElement(VNestedTableContainerBody, {
				props: {
					...this.$props,
					depth: 0
				}
			})
		}
	},
	render(): VNode {
		return this.$createElement(VNestedTableContainer, {}, [
			this.genColGroups(this.$props.tables[0]),
			this.genHeader(this.$props.tables[0]),
			this.genBody()
		])
	}
})