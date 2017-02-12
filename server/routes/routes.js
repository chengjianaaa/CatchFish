const pictureSearch = require('./pictureSearch');
const humanCheck = require('./humanCheck');

//Get picture info
app.get('/api/pictureSearch',pictureSearch.getPicInfo );

//Get human check info
app.get('/api/humanCheck',humanCheck.humanCheck);