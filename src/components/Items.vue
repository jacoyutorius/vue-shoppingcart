<template>
  <v-slide-y-transition mode="out-in">
    <div id="items">
      <div v-for="item in items" class="portrait" router :to="{ name: 'ItemDetail', params: { id: item.no }}">
        <v-card :img=item.image_path height="120px" class="mt-1">
          <v-card-row actions class="white--text pl-3 pt-3 pb-3">
            <router-link :to="{ name: 'ItemDetail', params: { id: item.no }}"><h4>{{item.name}}</h4></router-link>
          </v-card-row>
          <!-- <v-card-row actions class="white--text pl-3 pt-3 pb-3">
            <div>
              <h6>商品番号: {{item.no}}</h6>
              <h6>価格: ¥{{item.price}}</h6>
              <h6><router-link :to="{ name: 'ItemDetail', params: { id: item.no }}">詳細</router-link></h6>
            </div>
          </v-card-row> -->
        </v-card>
      </div>
    </div>
  </v-slide-y-transition>
</template>

<style lang="stylus">
  .portrait
    .card__row--actions
      background: rgba(0, 0, 0, .25)
  .container{
    padding: 10px
  }
  h4{
    color: #f1f1f1
  }
</style>

<script>
	export default{
		data(){
			return {
				items: [
					{no: "2991093", name: "袋に入ったドヤ顔猫", price: 10200, image_path: "/static/doc-images/cards/cat_in_bag.JPG" },
					{no: "5191093", name: "MacBookProと机", price: 99000, image_path: "/static/doc-images/cards/54.JPG" },
					{no: "2191081", name: "大須演芸場　その１", price: 99000, image_path: "/static/doc-images/cards/IMG_2944.JPG" },
          {no: "2191093", name: "大須演芸場　その２", price: 99000, image_path: "/static/doc-images/cards/IMG_2947.JPG" },
					{no: "5001001", name: "浜名湖自動車道", price: 200, image_path: "/static/doc-images/cards/IMG_0081.JPG" },
          {no: "8104501", name: "中部電力上島変電所", price: 200200, image_path: "/static/doc-images/cards/IMG_1055.JPG" },
				]
			}
		}
	}
</script>