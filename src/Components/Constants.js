//const MY_API_KEY = "AIzaSyBiOjAXTgVFcuWKUUxxPJScf9mnMp-UDjo";
 //const MY_API_KEY = "AIzaSyCLL-vkppJE6LE8FVXH-73C1AgtrNHx6wc";
 const MY_API_KEY = "AIzaSyBauMU4_6VOVfqcNUPksgl8cRJHsFd7BJs";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  MY_API_KEY;

export const YT_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" + MY_API_KEY

export const YOUTUBE_CHANNEL_LOGO_API =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=";

export const YOUTUBE_CHANNEL_LOGO_API_PART2 =
  "&fields=items%2Fsnippet%2Fthumbnails&key=" + MY_API_KEY;

export const YOUTUBE_VIDEO_CATEGORY_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key=" +
  MY_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_VIDEO_SUGGESTIONS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=
  ${MY_API_KEY}&videoId=`;

export const YT_VIDEO_DETAILS_BYID = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&key=${MY_API_KEY}&id=`;

export const YT_VIDEO_COMMENTS = `https://www.googleapis.com/youtube/v3/commentThreads?key=${MY_API_KEY}&textFormat=plainText&part=snippet&maxResults=50&videoId=`;
