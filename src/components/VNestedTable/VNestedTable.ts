import "./VNestedTable.scss"

import Vue, {VNode} from "vue";
import {NestedItem, NestedTable} from "@/types";
import {PropValidator} from "vue/types/options";
import {VNestedTableContainer} from "@/components/VNestedTable/index";

export default Vue.extend({
	name: "v-nested-table",
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
		return this.$createElement(VNestedTableContainer, {
			props: {...this.$props}
		})
	}
})