<template>
	<v-slide-y-transition mode="out-in">
		<v-layout column align-center>
	    <v-data-table
	      v-bind:headers="headers"
	      :items="orders"
	      hide-actions
	      class="elevation-1">
		    <template slot="items" scope="order">
		      <td class="text-xs-right">{{ order.item.item_no}}</td>
		      <td class="text-xs-right">{{ order.item.item_name }}</td>
		      <td class="text-xs-right">{{ order.item.price }}</td>
		      <td class="text-xs-right">{{ order.item.qty }}</td>
		    </template>
		  </v-data-table>
	  </v-layout>
	</v-slide-y-transition>
</template>

<script>
	export default{
		data(){
			return {
				headers: [
          { text: '品番', left: true, value: 'item_no' },
          { text: '品名', left: true, value: 'item_name' },
          { text: '価格(¥)', value: 'price' },
          { text: '数量(個)', value: 'qty' }
        ],
				orders: [
					{order_id: 1, item_no: "00913801", item_name: "Amazons DVD Vol 1", price: "6500", qty: 1},
					{order_id: 2, item_no: "00913802", item_name: "Amazons DVD Vol 2", price: "6500", qty: 2},
					{order_id: 3, item_no: "00913803", item_name: "Amazons DVD Vol 3", price: "6500", qty: 1},
					{order_id: 4, item_no: "00913804", item_name: "Amazons DVD Vol 4", price: "6500", qty: 1},
					{order_id: 5, item_no: "00913805", item_name: "Amazons DVD Vol 5", price: "6500", qty: 5},
					{order_id: 6, item_no: "00913806", item_name: "Amazons DVD Vol 6", price: "6500", qty: 20},
					{order_id: 7, item_no: "00913807", item_name: "Amazons DVD Vol 7", price: "6500", qty: 10},
				]
			}
		}
	}
</script>