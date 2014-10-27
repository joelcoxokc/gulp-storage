var gulp = require('gulp');

var gulp = require('./index.js')(gulp);


gulp.task( 'store' , function(  ) {
  this.storage.create( 'hello', 'joel.json' );
  this.storage.set( 'me', 'joel' );
  this.storage.set( 'this stuff', 'lakhdklaf;;asf' );

})

gulp.task('default', ['store'],  function(){

  console.log(this.storage.get())
});


