import Vue, {PropType, VNode} from "vue";
import {NestedTable} from "@/types";

export default Vue.extend({
	name: "v-nested-table-col-group",
	props: {
		table: {
			type: Object as PropType<NestedTable>
		}
	},
	render(): VNode {
		return this.$createElement("colgroup", this.table?.columns.map(column => {
			return this.$createElement("col", {})
		}))
	}
})