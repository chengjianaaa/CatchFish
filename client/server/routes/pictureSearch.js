//const request = require('request');

const getPicInfo = (req,res) => {
  let api_key = process.env.Google_Image_Key;
  let api_cx = process.env.Google_Image_Cx;
  let picUrl = req.params;
  
  const options = {
    url:`https://www.googleapis.com/customsearch/v1?cx=${api_cx}&key=${api_key}&searchtype=”image”&num=10`
  };
  request(options, (err, response, body) => {
    if(err){
      console.log('there was an error with the image search');
    }

    body = JSON.parse(body);

    res.status(200).send(JSON.stringify(response));
  });
};

module.exports = {
  getPicInfo:getPicInfo
};