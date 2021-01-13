const htmlmin = require('html-minifier');
const yaml = require('js-yaml');
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addDataExtension('yaml', (contents) =>
        yaml.safeLoad(contents)
    );

    eleventyConfig.addWatchTarget('./_tmp/static/css/style.css');

    eleventyConfig.addPassthroughCopy({
        './_tmp/static/css/style.css': './static/css/style.css',
        './src/admin/config.yml': './admin/config.yml',
        './node_modules/alpinejs/dist/alpine.js': './static/js/alpine.js'
    });

    eleventyConfig.addPassthroughCopy('./src/static/images');
    eleventyConfig.addPassthroughCopy('./src/static/fonts');
    eleventyConfig.addPassthroughCopy('./src/*.ico');
    eleventyConfig.addPassthroughCopy('./src/*.png');
    eleventyConfig.addPassthroughCopy('./src/*.webmanifest');

    // eleventyConfig.addPlugin();

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat(
            'd LLLL yyyy'
        );
    });

    eleventyConfig.addFilter('getFullYear', (dateObj) => {
        return new Date().getFullYear();
    });

    if (process.env.NODE_ENV === 'production') {

        eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
            if (outputPath.endsWith('.html')) {
                let minified = htmlmin.minify(content, {
                    useShortDoctype: true,
                    removeComments: true,
                    collapseWhitespace: true,
                });
                return minified;
            }
            return content;
        });

    }

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            layouts: '_layouts',
            data: '_data'
        },
        htmlTemplateEngine: 'njk',
    };
};