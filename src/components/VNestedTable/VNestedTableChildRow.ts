import Vue, {VNode} from "vue";

export default Vue.extend({
	name: "v-nested-table-child-row",
	render(): VNode {
		return this.$createElement("tr", {
			staticClass: "v-nested-table__child-row"
		})
	}
})