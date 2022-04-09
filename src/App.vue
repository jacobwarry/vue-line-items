<template>
	<div id="app">
		<v-nested-data-table
			:headers="headers"
			:items="items"
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import VNestedDataTable from "@/components/VNestedDataTable/VNestedDataTable";
import {NestedDataTableHeader} from "@/types";

export default Vue.extend({
	name: "App",
	components: {
		VNestedDataTable
	},
	data() {
		return {
			headers: [
				{
					text: "header1",
					value: "i1"
				},
				{
					text: "header2",
					value: "i2"
				},
				{
					text: "header3",
					value: "i3"
				},
				{
					text: "header4",
					value: "i4"
				}
			] as NestedDataTableHeader[],
			items: [
				{
					i1: "item1",
					i2: "item2",
					i3: "item3",
					i4: "item4"
				}
			]
		}
	}
});
</script>

<style lang="scss">

</style>
