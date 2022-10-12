const podcastFeedParser = require("podcast-feed-parser")


// for fetching remote feeds, use getPodcastFromURL.
// Note that function must be async
async function printPodcastTitle (url) {
    /*
    https://www.npmjs.com/package/podcast-feed-parser#configuration
    */
    const options = {
        fields : {
          'meta': ['title', 'description'],
          'episodes': ['title', 'timeline', 'pubDate']
        }
      }
	const podcast = await podcastFeedParser.getPodcastFromURL(url, options)
	/* console.log(podcast.meta.title)
    console.log(podcast.meta.description)
    console.log(podcast.episodes) */
    console.log(podcast)

}

for (let i = 0; i < 10; i++) {
['https://www.relay.fm/connected/feed', 'https://www.relay.fm/upgrade/feed'].forEach((url) => { printPodcastTitle(url);})
}
