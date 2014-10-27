var gulp = require('gulp');

var slushy = require('./index.js')(gulp);


gulp.task( 'store' , function(  ) {
  this.storage.create( 'hello', 'joel.json' );
  this.storage.set( 'me', 'joel' );

})

gulp.task('default', ['store'],  function(){

  console.log(this.storage.get())
});


