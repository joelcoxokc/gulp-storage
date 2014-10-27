(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-storage
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> storage plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-storage` as a development dependency:

```shell
npm install --save-dev gulp-storage
```

Then, add it to your `gulpfile.js`:

```javascript
var storage = require("gulp-storage");

gulp.src("./src/*.ext")
	.pipe(storage({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### storage(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


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
