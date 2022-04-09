import Vue, {VNode} from "vue";
import {PropValidator} from "vue/types/options";
import {NestedTable} from "@/types";
import VNestedTableContainerRow
	from "@/components/VNestedTable/VNestedTableContainerRow";

export default Vue.extend({
	name: "v-nested-table-container-body",
	props: {
		tables: {
			type: Array,
			default: () => []
		} as PropValidator<NestedTable[]>,
		items: {
			type: Array,
			default: () => []
		},
		depth: {
			type: Number,
			default: 0
		}
	},
	methods: {
		genContainerRows() {
			return this.items.map((item: any) => this.genContainerRow(item));
		},
		genContainerRow(item: any): VNode {
			return this.$createElement(VNestedTableContainerRow, {
				props: {
					item,
					depth: this.depth,
					tables: this.tables
				}
			})
		}
	},
	render(): VNode {
		return this.$createElement("tbody", {
				staticClass: "v-nested-table__container-body"
			},
			[
				this.genContainerRows()
			]
		);
	}
})