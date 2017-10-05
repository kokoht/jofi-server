var axios = require('axios')
var parser = require('xml2json');

// var xml = require('fs').readFileSync('./example.xml', {encoding: 'utf8'})
// // xml to json
// var jsonString = parser.toJson(xml);
// var json = JSON.parse(jsonString);
// console.log(json.rss.channel.item[0].title);
// di item sudah berupa array of object




// List url by location
var location = 'jakarta'
var locationJakartaSelatan = 'jakarta+selatan'
      // contoh penggunaan search jakarta selatan => jakarta+selatan
const locationUrlJakarta = `https://stackoverflow.com/jobs/feed?l=${location}%2c+Indonesia&d=20&u=Km`
const locationUrlJakartaSelatan = `https://stackoverflow.com/jobs/feed?l=${locationJakartaSelatan}&d=20&u=Km`


// List url by expert
var expert = 'react'
const expertUrl = `https://stackoverflow.com/jobs/feed?q=${expert}&l=indonesia&d=20&u=Km`
    // by default = indonesia

// List url by expert and location ( combine )
var expertReactNative = 'react+native'
var locationJakartaBarat = 'jakarta+barat'
const locationExpertUrl = `https://stackoverflow.com/jobs/feed?q=${expertReactNative}&l=${locationJakartaBarat}&d=20&u=Km`



// List function location
  function findJobJakarta (req, res){
    console.log(locationUrlJakarta);
    axios.get(locationUrlJakarta)
    .then(result => {
      // console.log('hasil e',result);
      var jsonString = parser.toJson(result.data);
      var json = JSON.parse(jsonString);
      console.log(json.rss.channel.item[0].title);
      res.send(json.rss.channel.item)
      // item berupa array
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  function findJobJakartaSelatan (req, res){
    console.log(locationUrlJakartaSelatan);
    axios.get(locationUrlJakartaSelatan)
    .then(result => {
      // console.log('hasil e',result);
      var jsonString = parser.toJson(result.data);
      var json = JSON.parse(jsonString);
      console.log(json.rss.channel.item[0].title);
      res.send(json.rss.channel.item)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

// list function expert
function findJobExpert (req, res){
  console.log(expertUrl);
  axios.get(expertUrl)
  .then(result => {
    var jsonString = parser.toJson(result.data);
    var json = JSON.parse(jsonString);
    console.log(json.rss.channel.item[0].title);
    res.send(json.rss.channel.item)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

// List Function Combine ( Location and Expert )
function findJobExpertLocation (req, res) {
  console.log(locationExpertUrl);
  axios.get(locationExpertUrl)
  .then(result => {
    var jsonString = parser.toJson(result.data);
    var json = JSON.parse(jsonString);
    console.log(json.rss.channel.item[0].title);
    res.send(json.rss.channel.item)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


module.exports = {
  findJobJakarta,
  findJobJakartaSelatan,
  findJobExpert,
  findJobExpertLocation
}
