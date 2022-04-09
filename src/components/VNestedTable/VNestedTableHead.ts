import Vue, {VNode, VNodeData} from "vue";
import {NestedTableColumn} from "@/types";
import {PropValidator} from "vue/types/options";
import {convertToUnit} from "@/util/helpers";

export default Vue.extend({
	name: "v-nested-table-head",
	props: {
		columns: {
			type: Array,
			default: () => []
		} as PropValidator<NestedTableColumn[]>,
		hideLabels: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		genHeader(column: NestedTableColumn) {
			const data: Required<Pick<VNodeData, "attrs" | "on" | "class" | "style">> = {
				attrs: {
					role: "columnheader",
					scope: "col"
				},
				style: {
					width: convertToUnit(column.width),
					minWidth: convertToUnit(column.width)
				},
				class: [
					`text-${column.align || "start"}`
				],
				on: {}
			};

			const children = [];
			
			if (!this.hideLabels) {
				children.push(this.$createElement("span", [column.label]));
			}

			return this.$createElement("th", data, children);
		}
	},
	render(): VNode {
		return this.$createElement("thead", {
			staticClass: "v-nested-table__container-head"
		}, [
			this.$createElement("tr", {
			},this.columns.map(column => {
				if (!column.hidden) {
					return this.genHeader(column);
				}
			}))
		]);
	}
})