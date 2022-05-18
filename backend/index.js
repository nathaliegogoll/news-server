const express = require('express')
const Parser = require('rss-parser')
var cors = require('cors')
const app = express()
const port = 3000

let parser = new Parser();

const links = [
    "http://expressen.se/rss/nyheter",
    "http://gt.se/rss/nyheter",
    "http://kvp.se/rss/nyheter",
    "http://expressen.se/rss/sport",
    "http://expressen.se/rss/noje",
    "http://expressen.se/rss/debatt",
    "http://expressen.se/rss/ledare",
    "http://expressen.se/rss/kultur",
    "http://expressen.se/rss/ekonomi",
    "http://expressen.se/rss/halsa",
    "http://expressen.se/rss/levabo",
    "http://expressen.se/rss/motor",
    "http://expressen.se/rss/res",
    "http://expressen.se/rss/dokument"
]

app.use(cors())

const fetchRssFeed = async (feedUrl) => {
    try {
        let feed = await parser.parseURL(feedUrl);
        const articles = feed.items.map(item => {
            return {
                title: item.title,
                link: item.link,
                date: item.pubDate
            }
        });
        return articles.slice(0,10);
    } catch(err) {
        return null;
    }
}

const checkDuplicates = (existingArray, newArray) => {
    if (existingArray.lenght == 0) {
        return newArray;
    }
    
    const combinedArray = existingArray;
    const existingLinks = existingArray.map(e => {
       return e.link;
    })

    newArray.forEach(element => {
        if (!existingLinks.includes(element.link)) {
            combinedArray.push(element)
        }
    });
    
    return combinedArray;
}

const checkTime = (array) => {
    return array.sort((a, b) => {
        var d1 = new Date(a.date)
        var d2 = new Date(b.date)
        return d2.getTime() - d1.getTime()
    })
}



app.get('/', async (req, res) => {
    let newsLinks = [];
    for (const link of links) {
        const data = await fetchRssFeed(link)
        if(data) {
            const newFeed = checkDuplicates(newsLinks, data);
            newfeed = checkTime(newFeed);
            newsLinks = newFeed;
        }
    }
    newsLinks = newsLinks.slice(0,10);
    res.status(200).json(newsLinks);
})

app.listen(port, () => {
  console.log(`App listening on ${port}`)
})