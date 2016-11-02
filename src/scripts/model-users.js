const $ = require('jquery')
const Backbone = require('backbone')



const EtsyModel = Backbone.Model.extend({

   url: "",


})

const EtsyCollection = Backbone.Collection.extend({

   model: EtsyModel,

   url: "",

   parse: function(jsonData){

      return jsonData.results

   },

   initialize: function(rVal="active", catStr=""){


      this.url = `https://openapi.etsy.com/v2/listings/${rVal}.js?includes=Images&api_key=azo1uvo4jt8ux8s9rmqocj3z&${catStr}&callback=?`
   },


})



module.exports = {

   EtsyModel: EtsyModel,

   EtsyCollection: EtsyCollection,

}
