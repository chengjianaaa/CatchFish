//using clarifai
// request = require('request');
const Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
const humanCheck = (req,res) => {
  let image = req.params.picLink;
  var app = new Clarifai.App(
    'unf28KTu09HpuYUotIoWJunKwedgfIXN86p0elO1',
    'WyFZc1Z7KPn-V1UrNC9IUOaaD3qiqTCekPUPTeu3'
  );
  for(var i = 0 ; i < image.length; i ++){
    console.log(image[i]);
  }
  // app.models.predict(Clarifai.GENERAL_MODEL, image).then(
  //   // function(response) {
  //   //   console.log('THE CLARIFAI RESPONSE IS: ');
  //   //   console.log(response);
  //   // },
  //   // function(err) {
  //   //   console.log('CLARIFAI ERROR');
  //   //   console.error(err);
  //   // }
  // );
};

module.exports = {
  humanCheck:humanCheck
};