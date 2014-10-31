var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    template    = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    excerpts    = require('metalsmith-excerpts'),
    Handlebars  = require('handlebars'),
    hljs        = require('highlight.js'),
    moment      = require('moment'),
    ignore      = require('metalsmith-ignore'),
    fs          = require('fs');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('navigation', fs.readFileSync(__dirname + '/templates/partials/navigation.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

Handlebars.registerHelper('link', function(path) {
    return  '/' + path;
});


Handlebars.registerHelper('date', function(date) {
  return moment(date).format('Do MMMM YYYY');
});

Handlebars.registerHelper('limit', function(collection, limit, start) {
    var out   = [],
        i, c;

    start = start || 0;

    for (i = c = 0; i < collection.length; i++) {
        if (i >= start && c < limit+1) {
            out.push(collection[i]);
            c++;
        }
    }

    return out;
});
var updatePaths = function(files, metalsmith, done){
    for(var key in files){
        files[key].path = key;
    }
    done();
};

Metalsmith(__dirname)
   .use(collections({
      posts: {
          pattern: 'blog/*.md',
          sortBy: 'date',
          reverse: true
      }
  }))
  .use(markdown({
	gfm: true,
     breaks: false,
    	tables: true,
     highlight: function (code, lang, callback) {
                 return hljs.highlightAuto(code).value
             }
  }))
  .use(excerpts())
    .use(updatePaths)
  .use(template('handlebars'))

  .build(function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Here is you new sword, my Lord');
        }
    });
