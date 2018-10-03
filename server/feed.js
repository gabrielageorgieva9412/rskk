var RSS = require('rss');

exports.feed = new RSS({
    title: 'title',
    description: 'description',
    feed_url: 'http://localhost:4200/feed/rss',
    site_url: 'http://localhost:4200',
});