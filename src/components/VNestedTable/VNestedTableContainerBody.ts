import Vue, {PropType, VNode} from "vue";
import {PropValidator} from "vue/types/options";
import {NestedItem, NestedTable} from "@/types";
import {VNestedTableContainerRow} from "@/components/VNestedTable/index";

export default Vue.extend({
	name: "v-nested-table-container-body",
	props: {
		tables: {
			type: Array as PropType<NestedTable[]>,
			default: () => []
		} as PropValidator<NestedTable[]>,
		items: {
			type: Array as PropType<NestedItem[]>,
			default: () => []
		},
		depth: {
			type: Number,
			default: 0
		}
	},
	methods: {
		genContainerRows() {
			return this.items.map((item: NestedItem) => this.genContainerRow(item));
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