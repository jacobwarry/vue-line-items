import Vue, {PropType, VNode} from "vue";
import {NestedDataTableHeader} from "@/types";
import {getObjectValueByPath} from "@/util/helpers";

export default Vue.extend({
	name: "v-nested-data-table-row",
	functional: true,
	props: {
		headers: Array as PropType<NestedDataTableHeader[]>,
		index: Number,
		item: Object
	},
	render(h, {props, data}): VNode {
		const columns = props.headers.map((header: NestedDataTableHeader) => {
			const children = [];
			const value = getObjectValueByPath(props.item, header.value);

			children.push(value == null ? value : String(value));

			const textAlign = `text-${header.align || "start"}`;
			return h("td", {
				class: [
					textAlign
				]
			}, children)
		});
		
		return h("tr", data, columns);
	}
})