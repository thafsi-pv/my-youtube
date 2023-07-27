const MY_API_KEY = "AIzaSyA27RFgm0LEETGjIea17DhTtuNzMsDeV1c";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  MY_API_KEY;


  export const YOUTUBE_CHANNEL_LOGO_API="https://www.googleapis.com/youtube/v3/channels?part=snippet&id="
  
  
  export const YOUTUBE_CHANNEL_LOGO_API_PART2= "&fields=items%2Fsnippet%2Fthumbnails&key="+MY_API_KEY


  export const YOUTUBE_VIDEO_CATEGORY_API="https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key="+MY_API_KEY


  export const YOUTUBE_SEARCH_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="