//using clarifai
// request = require('request');
const Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
const humanCheck = (req,res) => {
  let image = req.params;
  var app = new Clarifai.App(
    process.env.Clarifai_ClientId,
    process.env.Clarifai_Client_Secret
  );

  app.models.predict(Clarifai.GENERAL_MODEL, image).then(
    function(response) {
      console.log('THE CLARIFAI RESPONSE IS: ');
      console.log(response);
    },
    function(err) {
      console.error(err);
    }
  );
};

module.exports = {
  humanCheck:humanCheck
};