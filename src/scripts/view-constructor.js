const Backbone = require('backbone')




const ViewBuilder = Backbone.View.extend({

   el: "#app-container",


   events: {
      "click .item-card" : 'routeToItem',

   },

   routeToItem: function(evt){

      window.location.hash = "details/" +evt.currentTarget.id


   },



   render: function(collectionData, template){


      this.el.innerHTML = template(collectionData)
   }

})


module.exports = ViewBuilder
