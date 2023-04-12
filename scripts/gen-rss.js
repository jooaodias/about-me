const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'João Vitor Aleixo Dias',
    site_url: 'https://yoursite.com', //TODO: Colocar nome do link
    feed_url: 'https://yoursite.com/feed.xml',
  })


  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
