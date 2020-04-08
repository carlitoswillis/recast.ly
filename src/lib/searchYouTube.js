import YOUTUBE_API_KEY from '../config/youtube.js';


var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};



// var searchYouTube = (options, callback) => {
//   $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     data: {
//       key: YOUTUBE_API_KEY,
//       q: searchTerm,
//       part: 'snippet',
//       maxResults: 5,
//       type: 'video',
//       videoEmbeddable: true,
//     },
//     success: function(data) {
//       // embedVideo(data);
//       // <VideoPlayer video={data}>/
//       console.log(data);
//       callback(data);
//     },
//     error: function(response) {
//       console.log('Request Failed', response);
//     }
//   });
// };

// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     data: {
//       key: key,
//       q: query,
//       part: 'snippet',
//       maxResults: max,
//       type: 'video',
//       videoEmbeddable: true,
//     },
//     success: function(data) {
//       // instead of data, destructure to {items}
//       // callback (items);
//       // embedVideo(data);
//       // <VideoPlayer video={data}>/
//       console.log(data);
//       callback(data);
//     },
//     error: function(response) {
//       console.log('Request Failed', response);
//     }
//   });
// };





// searchYouTube('React Tutorial');

export default searchYouTube;


