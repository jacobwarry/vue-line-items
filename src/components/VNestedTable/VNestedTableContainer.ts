import Vue, {CreateElement, VNode} from "vue";

export default Vue.extend({
	name: "v-nested-table-container",
	render(createElement: CreateElement): VNode {
		return createElement("div", {
			staticClass: "v-nested-table__container"
		}, [
			this.$createElement("table", {
				staticClass: "v-nested-table__container-table"
			}, this.$slots.default)
		]);
	}
});