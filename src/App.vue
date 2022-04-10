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
import {EditableSourceItem, NestedItem, NestedTable, NestedTableColumn, NestedTableDataCell} from "@/types";
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
							width: 80,
							isEditable: () => true,
							editableInput: "text",
							editableType: "integer"
						},
						{
							field: "2",
							label: "ID",
							width: 118,
							isEditable: false
						},
						{
							field: "3",
							label: "Description",
							width: "100%",
							isEditable: () => true,
							editableInput: "text",
							editableType: "string"
						},
						{
							field: "4",
							label: "Tax",
							width: 100,
							isEditable: () => true,
							editableInput: "select",
							editableType: "string",
							editableSource: [
								{value: 0, text: "No"},
								{value: 1, text: "Yes"},
								{value: 2, text: "Clothing"}
							] as EditableSourceItem[]
						},
						{
							field: "5",
							label: "SKU",
							width: 90,
							isEditable: () => true,
							editableInput: "text",
							editableType: "string"
						},
						{
							field: "6",
							label: "Price $",
							width: 100,
							align: "end",
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "decimal"
						},
						{
							field: "7",
							label: "Cost $",
							width: 100,
							align: "end",
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "decimal"
						},
						{
							field: "8",
							label: "Vendor",
							width: 200,
							isHidden: true,
							isEditable: () => true,
							editableInput: "select",
							editableType: "string",
							editableSource: [
								{value: 1, text: "Senor Vendor"},
								{value: 2, text: "Secondary Vendor"}
							] as EditableSourceItem[]
						},
						{
							field: "9",
							label: "Total $",
							width: 100,
							align: "end",
							isEditable: false,
							displayValue: (item: NestedTableDataCell) => item.value
						}
					] as NestedTableColumn[]
				},
				{
					renderHeader: true,
					columns: [
						{
							field: "1",
							label: "Type",
							width: 198,
							isEditable: () => true,
							editableInput: "select",
							editableType: "integer",
							editableSource: [
								{value: 1, text: "Type 1"},
								{value: 2, text: "Type 2"}
							] as EditableSourceItem[]
						},
						{
							field: "2",
							label: "Description",
							width: "100%",
							isEditable: () => true,
							editableInput: "text",
							editableType: "string"
						},
						{
							field: "3",
							label: "Qty",
							width: 90,
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "integer"
						},
						{
							field: "4",
							label: "Price $",
							width: 100,
							align: "end",
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "decimal"
						},
						{
							field: "5",
							label: "Cost $",
							width: 100,
							align: "end",
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "decimal"
						},
						{
							field: "6",
							label: "Extension $",
							width: 94,
							align: "end",
							isEditable: false,
							displayValue: (item: NestedTableDataCell) => item.value
						}
					] as NestedTableColumn[]
				},
				{
					renderHeader: false,
					columns: [
						{
							field: "1",
							label: "Type",
							width: 182,
							isEditable: () => true,
							editableInput: "select",
							editableType: "integer",
							editableSource: [
								{value: 1, text: "Type 1"},
								{value: 2, text: "Type 2"}
							] as EditableSourceItem[]
						},
						{
							field: "2",
							label: "Description",
							width: "100%",
							isEditable: () => true,
							editableInput: "text",
							editableType: "string"
						},
						{
							field: "3",
							label: "Qty",
							width: 90,
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "integer"
						},
						{
							field: "4",
							label: "Price $",
							width: 100,
							align: "end",
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "decimal"
						},
						{
							field: "5",
							label: "Cost $",
							width: 100,
							align: "end",
							isEditable: () => true,
							displayValue: (item: NestedTableDataCell) => item.value,
							editableInput: "text",
							editableType: "decimal"
						},
						{
							field: "6",
							label: "Extension $",
							width: 94,
							align: "end",
							isEditable: false,
							displayValue: (item: NestedTableDataCell) => item.value
						}
					] as NestedTableColumn[]
				}
			] as NestedTable[],
			items: [
				{
					id: 1,
					parentId: 0,
					state: true,
					data: [
						{field: "1", value: 50},
						{field: "2", value: 552574328},
						{field: "3", value: "elleven Command 15\" Computer Backpack"},
						{field: "4", value: 1},
						{field: "5", value: "0011-54"},
						{field: "6", value: 0, isHidden: () => true},
						{field: "7", value: 0, isHidden: () => true},
						{field: "8", value: 1, span: 2},
						{field: "9", value: 2996}
					] as NestedTableDataCell[],
					children: [
						{
							id: 2,
							parentId: 1,
							state: true,
							data: [
								{field: "1", value: 2},
								{field: "2", value: "Item 2"},
								{field: "3", value: 50},
								{field: "4", value: 10, isHidden: () => false},
								{field: "5", value: 5, isHidden: () => false},
								{field: "6", value: 10}
							] as NestedTableDataCell[],
							children: [
								{
									id: 3,
									parentId: 2,
									state: true,
									data: [
										{field: "1", value: 2},
										{field: "2", value: "Item 2"},
										{field: "3", value: 50},
										{field: "4", value: 10, isHidden: () => false},
										{field: "5", value: 5, isHidden: () => false},
										{field: "6", value: 10}
									] as NestedTableDataCell[]
								}
							] as NestedItem[]
						}
					] as NestedItem[]
				},
				{
					id: 10,
					parentId: 0,
					state: true,
					data: [
						{field: "1", value: 50},
						{field: "2", value: 552574328},
						{field: "3", value: "elleven Command 15\" Computer Backpack"},
						{field: "4", value: 2},
						{field: "5", value: "0011-54"},
						{field: "6", value: 0, isHidden: () => true},
						{field: "7", value: 0, isHidden: () => true},
						{field: "8", value: 2, span: 2},
						{field: "9", value: 2996}
					] as NestedTableDataCell[],
					children: [] as NestedItem[]
				}
			] as NestedItem[]
		}
	}
});
</script>