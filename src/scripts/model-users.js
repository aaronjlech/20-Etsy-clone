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

   initialize: function(rVal="active"){

      this.url = `https://openapi.etsy.com/v2/listings/${rVal}.js?includes=Images&api_key=azo1uvo4jt8ux8s9rmqocj3z&callback=?`

   },


})



module.exports = {

   EtsyModel: EtsyModel,

   EtsyCollection: EtsyCollection,

}
