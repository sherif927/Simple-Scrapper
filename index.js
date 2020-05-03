let cheerio = require('cheerio');
let request = require('request-promise');
let { Post } = require('./models/post');
require('./db/mongoose');


/**
 * function responsible for 
 * bootstrapping the whole scrapping
 * procedure .
 */

function scrap() {
  for (let i = 1; i <= 15; i++) {
    request(`http://myhexaville.com/page/${i}`)
      .then(async html => {
        const $ = cheerio.load(html);
        const list = $('.gr-i').each(async (index, element) => {
          const link = $(element)
            .find('a')
            .attr('href');

          const name = $(element)
            .find('.entry-title')
            .find('a')
            .text()
            .replace(/(\r\n|\n|\r)/gm, '')
            .trim();

          let metaValues = [];
          const v = String($(element)
            .find('.meta')
            .find('li')
            .text()).replace('\t', '')
            .replace(/\t/g, '')
            .replace(/(\r\n|\n|\r)/gm, '')
            .trim();


          metaValues = v.split('/');
          let p = new Post({ name, link, metaValues });
          let response = await p.save().catch(e => console.log(e));
          metaValues = [];
        })

      }).catch(console.log);
  }
}

scrap();