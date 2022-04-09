import Vue, {VNode} from "vue";
import VNestedTableDataRow from "@/components/VNestedTable/VNestedTableDataRow";
import VNestedTableChildRow
	from "@/components/VNestedTable/VNestedTableChildRow";

export default Vue.extend({
	name: "v-nested-table-data-body",
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
		genDataRow() {
			return this.$createElement(VNestedTableDataRow, {
				props: {
					item: this.item
				}
			})
		},
		genChildRow() {
			return this.$createElement(VNestedTableChildRow, {
				props: {
					items: this.item.children,
					depth: this.depth + 1,
					tables: this.tables
				}
			})
		}
	},
	render(): VNode {
		return this.$createElement("tbody", {
				staticClass: "v-nested-table__data-body"
			},
			[
				this.genDataRow(),
				this.item.children.length ? this.genChildRow() : null
			]
		);
	}
})