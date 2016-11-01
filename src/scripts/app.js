// IMPORTING FUNCTIONS
// *********************************************************
const $ = require('jquery')
const Backbone = require('backbone')
const {_homePageTemp, _singleItemTemp} = require('./view-templates.js')
const {EtsyCollection, EtsyModel} = require('./model-users.js')
const ViewBuilder = require('./view-constructor.js')
// *********************************************************

// begin ROUTER
const AppRouter = Backbone.Router.extend({

	routes: {
		"details/:id": 'showSingleItem',
		"": 'showHomePage',

	},


	showHomePage: function(){

		var collInstance = new EtsyCollection()

		collInstance.fetch().then(function(){

			console.log(collInstance)
			var buildInstance = new ViewBuilder()

			buildInstance.render(collInstance, _homePageTemp)

		})

		console.log('hey')


	},


	showSingleItem: function(idNum){
		console.log(idNum)
		var etsyItem = new EtsyCollection(idNum)

		etsyItem.fetch().then(function(){

			var singleInst = new ViewBuilder()

			singleInst.render(etsyItem, _homePageTemp)
		})



	},



	initialize: function(){

		Backbone.history.start();

	},
})


// execute ROUTER
const app = new AppRouter()
