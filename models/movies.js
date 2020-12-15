var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

var MoviesSchema = new mongoose.Schema({

});

var MovieModel = mongoose.model('movies', MoviesSchema);
MovieModel.createIndexes()

var findMovies = ()=>{
  return MovieModel.find()
}


module.exports = {
  findMovies,
}