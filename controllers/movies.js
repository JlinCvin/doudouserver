
var MovieModel = require('../models/movies.js')

var findmovies = async(req,res,next)=>{
  var mtt = MovieModel.findMovies()
  res.send({
    msg : '获取失败',
    status : -1
  });


};



module.exports = {
  findmovies
}