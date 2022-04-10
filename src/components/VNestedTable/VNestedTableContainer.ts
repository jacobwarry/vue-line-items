import Vue, {VNode} from "vue";
import {VNestedTableContainerTable} from "@/components/VNestedTable/index";
import {PropValidator} from "vue/types/options";
import {NestedItem, NestedTable} from "@/types";

export default Vue.extend({
	name: "v-nested-table-container",
	props: {
		tables: {
			type: Array,
			default: () => []
		} as PropValidator<NestedTable[]>,
		items: {
			type: Array,
			default: () => []
		} as PropValidator<NestedItem[]>
	},
	render(): VNode {
		return this.$createElement("div", {
			staticClass: "v-nested-table__container",
		}, [
			this.$createElement(VNestedTableContainerTable, {
				props: {
					...this.$props,
					depth: 0
				}
			})
		]);
	}
});