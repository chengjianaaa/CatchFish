const pictureSearch = require('./pictureSearch');
const humanCheck = require('./humanCheck');

module.exports = function(app){
  //Get picture info
  app.get(`/api/pictureSearch/:picLink`,pictureSearch.getPicInfo );

  //Get human check info
  app.get(`/api/humanCheck/:picLink`,humanCheck.humanCheck);

  //facebook
  app.get(`/api/facebook/:firstName/:lastName/:url/:gender/:occupation/:organization/:location/:relationshipStatus`);
};