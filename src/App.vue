<template>
	<div id="app">
		<v-nested-table
			:items="items"
			:tables="tables"
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import {NestedTable} from "@/types";
import VNestedTable from "@/components/VNestedTable/VNestedTable";

export default Vue.extend({
	name: "App",
	components: {
		VNestedTable
	},
	data() {
		return {
			tables: [
				{
					renderHeader: true,
					columns: [
						{
							field: "1",
							label: "Qty",
							width: 80
						},
						{
							field: "2",
							label: "ID",
							width: 118
						},
						{
							field: "3",
							label: "Description",
							width: "100%"
						},
						{
							field: "4",
							label: "Tax",
							width: 100
						},
						{
							field: "5",
							label: "SKU",
							width: 90
						},
						{
							field: "6",
							label: "Price $",
							width: 100,
						},
						{
							field: "7",
							label: "Cost $",
							width: 100
						},
						{
							field: "8",
							label: "Vendor",
							width: 200,
							hidden: true
						},
						{
							field: "9",
							label: "Total $",
							width: 100
						}
					]
				}
			] as NestedTable[],
			items: [
				{
					id: 1,
					parentId: 0,
					data: [
						{
							field: "1",
							value: 50
						},
						{
							field: "2",
							value: 552574328
						},
						{
							field: "3",
							value: "elleven Command 15\" Computer Backpack"
						},
						{
							field: "4",
							value: 1
						},
						{
							field: "5",
							value: "0011-54"
						},
						{
							field: "6",
							value: 0,
							hidden: () => true
						},
						{
							field: "7",
							value: 0,
							hidden: () => true
						},
						{
							field: "8",
							value: "Leeds - Trimark",
							span: 2
						},
						{
							field: "9",
							value: 2996
						}
					],
					children: [
						{
							id: 2,
							parentId: 0,
							data: [
								{
									field: "1",
									value: 2
								},
								{
									field: "2",
									value: "Item 2"
								}
							],
							children: []
						}
					]
				},
				{
					id: 7,
					parentId: 0,
					data: [
						{
							field: "1",
							value: 50
						},
						{
							field: "2",
							value: 552574328
						},
						{
							field: "3",
							value: "elleven Command 15\" Computer Backpack"
						},
						{
							field: "4",
							value: 1
						},
						{
							field: "5",
							value: "0011-54"
						},
						{
							field: "6",
							value: 0,
							hidden: () => true
						},
						{
							field: "7",
							value: 0,
							hidden: () => true
						},
						{
							field: "8",
							value: "Leeds - Trimark",
							span: 2
						},
						{
							field: "9",
							value: 2996
						}
					],
					children: []
				}
			]
		}
	}
});
</script>

<style lang="scss">

</style>
