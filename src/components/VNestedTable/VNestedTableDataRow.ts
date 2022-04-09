import Vue, {VNode} from "vue";

export default Vue.extend({
	name: "v-nested-table-data-row",
	props: {
		item: {
			type: Object
		}
	},
	methods: {
		genDataCells() {
			return this.item.data.map((data: any) => {
				let hidden = false;
				if (Object.prototype.hasOwnProperty.call(data, "hidden")
					&& typeof data.hidden === "function") {
					hidden = data.hidden();
				}
				if (!hidden) {
					return this.genDataCell(data)
				}
			});
		},
		genDataCell(data: any) {
			return this.$createElement("td", {
					staticClass: "v-nested-table__data-cell",
					attrs: {
						colspan: data.span ? data.span : 1
					}
				},
				[
					this.$createElement("span", {}, data.value)
				]
			)
		}
	},
	render(): VNode {
		return this.$createElement("tr", {
			staticClass: "v-nested-table__data-row"
		}, [
			this.genDataCells()
		])
	}
})