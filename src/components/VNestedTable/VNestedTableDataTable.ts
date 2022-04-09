import Vue, {VNode} from "vue";
import {NestedTable} from "@/types";
import VNestedTableColGroup
	from "@/components/VNestedTable/VNestedTableColGroup";
import VNestedTableHead from "@/components/VNestedTable/VNestedTableHead";
import VNestedTableDataBody
	from "@/components/VNestedTable/VNestedTableDataBody";

export default Vue.extend({
	name: "v-nested-table-data-table",
	props: {
		item: {
			type: Object
		},
		depth: {
			type: Number
		},
		tables: {
			type: Array,
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
		genBody(){
			return this.$createElement(VNestedTableDataBody,{
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