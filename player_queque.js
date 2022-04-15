var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var playList = ['wwQelicSFic','phV43Nu1InE'];

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    loadPlaylist:{
     listType:'playlist',
     list: playList,
     index:parseInt(0),
     suggestedQuality:'small'
       },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
 event.target.loadPlaylist(playList);
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
// setTimeout(stopVideo, 60000);
done = true;
    }
   }
   
let videoList = ["4bTudaDkr1Q", "phV43Nu1InE"];
