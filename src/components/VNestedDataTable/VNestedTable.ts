import Vue, {CreateElement, VNode} from "vue";

export default Vue.extend({
	name: "v-nested-table",
	methods: {
		genWrapper() {
			return this.$createElement("div", {
				staticClass: "v-nested-table__wrapper"
			}, [
				this.$createElement("table", this.$slots.default)
			])
		}
	},
	render(createElement: CreateElement): VNode {
		return createElement("div", {
			staticClass: "v-nested-table"
		}, [
			this.genWrapper()
		])
	}
});