

var _homePageTemp = function(collData){
   var homeStr = ''
   collData.models.map(function(mdl){

      // ***** SET ID DYNAMICALLY FOR EACH ETSY ITEM ******
      homeStr += `
                  <div class="col-xs-4 thumbnail item-card" id="${mdl.get('listing_id')}">
                     <img src="${mdl.get('Images')[0].url_170x135}">
                     <p>${mdl.get('title').slice(0, 40)}${mdl.get('title').length > 40 ? '...' : ''}</p>
                  </div>

      `


   }).join('')
   // homeStr += '</div>'
   return homeStr
}


var _singleItemTemp = function(singleData){




   // singleStr = `
   // <div class="col-xs-4 thumbnail item-card" id="${mdl.get('category_id')}">
   //    <img src="${mdl.get('Images')[0].url_170x135}">
   //    <p>${mdl.get('title').slice(0, 40)}${mdl.get('title').length > 40 ? '...' : ''}</p>
   // </div>`
   //
   //
   // return singleStr

}


module.exports = {

   _homePageTemp,
   _singleItemTemp

}
