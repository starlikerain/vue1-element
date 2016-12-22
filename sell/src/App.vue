<template>
  <div>
    <V-header :seller="seller"></V-header>


    <div class="tab">

      <div class="tab-item border-1px">
        <a v-link="{path:'/goods'}">商品</a>
      </div>

      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>

      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>

    </div>

    <router-view :seller="seller" keep-alive></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header';
  import {urlParse} from 'common/js/util';

  const ERR_OK = 0;

  export default {
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            // console.log(queryParam);
            return queryParam.id;
          })()
        }
      };
    },
    created() {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          // this.seller = response.data;
          // console.log(this.seller)是undefined
          // 所以
          // 在thiss.seller.id的基础上给seller添加了其他属性,给对象拓展属性
          this.seller = Object.assign({}, this.seller, response.data);
          // console.log(this.seller.id);
        }
      });
    },
    components: {
      'v-header': header
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/reset.css"
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 28, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
