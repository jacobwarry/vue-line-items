import Vue, {VNode, VNodeData} from "vue";
import {PropValidator} from "vue/types/options";
import {NestedDataTableHeader} from "@/types";
import {convertToUnit} from "@/util/helpers";

export default Vue.extend({
	name: "v-nested-data-table-header",
	props: {
		headers: {
			type: Array,
			default: () => []
		} as PropValidator<NestedDataTableHeader[]>
	},
	methods: {
		genHeader(header: NestedDataTableHeader) {
			const data: Required<Pick<VNodeData, "attrs" | "on" | "class" | "style">> = {
				attrs: {
					role: "columnheader",
					scope: "col"
				},
				style: {
					width: convertToUnit(header.width),
					minWidth: convertToUnit(header.width)
				},
				class: [
					`text-${header.align || "start"}`
				],
				on: {}
			};

			const children = [];

			children.push(this.$createElement("span", [header.text]));

			return this.$createElement("th", data, children);
		}
	},
	render(): VNode {
		return this.$createElement("thead", {
			staticClass: "v-nested-data-table-header"
		}, [
			this.$createElement("tr", this.headers.map(header => this.genHeader(header)))
		]);
	}
});