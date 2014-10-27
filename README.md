(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-storage
<!-- [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url] -->

> storage plugin for [gulp](https://github.com/wearefractal/gulp)


# Features

- Gulp Storage uses Yeoman-Generator's storage plugin to simply save co nfigurations in a local JSON file. 
- Bind's a storage property the the gulp instance. 
- Within any gulp task, you can access the storage property by calling this.storage.

## Usage

First, install `gulp-storage` as a development dependency:

```shell
npm install --save-dev gulp-storage
```

Then, add it to your `gulpfile.js`:

```javascript
// Do this
var storage = require('gulp-storage');
// or do this
require('gulp-storage')

gulp.storage.create('SomeName', 'somName.json');

gulp.task( 'any', ['anotherTask'] function(){
    var appName = this.storage.get('appName');
    console.log(appName)
    //=> myApp
});

gulp.task('anotherTask', function(){
    this.storage.set('appName', 'myApp');
});
```

## API

### storage.create( name, fileName );

#### name
Type: `String`  
Default: `myApp`
Required: true

The the name will be the root object property for anything set in your storage.

#### fileName
Type: `String`
Default: `myApp.json`
Required: `true`
extension: `.json`

The Storage will create a Json file, using the specified name;


### storage.set( key, value );

#### key
Type: `String`
Required: `true`

#### value
Type: `String`  
Required: `true`

storage.set will set a new property in your json local storage file.

### storage.get( key );

#### key
Type: `String` 
Required: `false`

storage.get will retreive values from your local json storage file.
- You can pass a key property to get a specific value.
- If no key is specified, storage.get will return the everything in your local storage file.

### storage.store( object );

#### object
Type: `Object`
Required: `true`

storage.store will storage all properties and values within the object in your local storage file.


## TODO
- Create a storage.clear(); `Delete everything`
- Create a storage.delete( key ); `Delete a specific property`

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-storage
[npm-image]: https://badge.fury.io/js/gulp-storage.png

[travis-url]: http://travis-ci.org/JoelCoxOKC/gulp-storage
[travis-image]: https://secure.travis-ci.org/JoelCoxOKC/gulp-storage.png?branch=master

[coveralls-url]: https://coveralls.io/r/JoelCoxOKC/gulp-storage
[coveralls-image]: https://coveralls.io/repos/JoelCoxOKC/gulp-storage/badge.png

[depstat-url]: https://david-dm.org/JoelCoxOKC/gulp-storage
[depstat-image]: https://david-dm.org/JoelCoxOKC/gulp-storage.png
