import "./VNestedDataTable.scss"

import Vue, {VNode, VNodeChildren, VNodeChildrenArrayContents} from "vue";
import {PropValidator} from "vue/types/options";
import {NestedDataTableHeader} from "@/types";
import VNestedTable from "@/components/VNestedDataTable/VNestedTable";
import VNestedDataTableHeader
	from "@/components/VNestedDataTable/VNestedDataTableHeader";
import VNestedDataTableRow
	from "@/components/VNestedDataTable/VNestedDataTableRow";

export default Vue.extend({
	name: "v-nested-data-table",
	props: {
		headers: {
			type: Array,
			default: () => []
		} as PropValidator<NestedDataTableHeader[]>,
		items: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		genHeaders() {
			const data = {
				props: {
					headers: this.headers
				}
			};
			const header: VNodeChildrenArrayContents = [
				this.$createElement(VNestedDataTableHeader, {
					...data
				})
			];

			return header;
		},
		genBody(): VNode | string | VNodeChildren {
			return this.$createElement("tbody", [
				this.genRows()
			]);
		},
		genRows() {
			return this.$props.items.map((item: any, index: number) => this.genRow(item, index));
		},
		genRow(item: any, index: number): VNode {
			return this.$createElement(VNestedDataTableRow, {
				props: {
					headers: this.$props.headers,
					index,
					item
				}
			})
		}
	},
	render(): VNode {
		return this.$createElement(VNestedTable, {}, [
			this.genHeaders(),
			this.genBody()
		])
	}
});