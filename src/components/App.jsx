import VideoList from '../components/VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';
import Search from '../components/Search.js';
import searchYouTube from '../lib/searchYoutube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVid: exampleVideoData[0],
      videos: exampleVideoData
      // videos: props.videos
    };
  }


  componentDidMount () {
    this.getYoutubeVideos('cute dogs');
  }

  getYoutubeVideos(query) {
    console.log(query);
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVid: videos[0]
      });
    });
  }


  clickHandler (video) {
    // console.log(video);
    this.setState({
      currentVid: video
    });

  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search handleSearchInputChange={this.getYoutubeVideos.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVid}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList clickHandler={this.clickHandler.bind(this)} videos={this.state.videos}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// 'http://www.fndvisions.org/img/cutecat.jpg'


// var App = ({key: YOUTUBE_API_KEY}, {videos}) => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> <Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentvideo}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={this.videoList}/></h5></div>
//       </div>
//     </div>
//   </div>
// );