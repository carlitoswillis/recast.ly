import searchYouTube from '../lib/searchYoutube.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: ''
    };
  }

  // onSearch() {
  //   this.setState({
  //     currentInput: document.getElementById('search').value
  //   });
  //   console.log(this.currentInput);
  // }

  render() {
    console.log(this.props.handleSearchInputChange);
    return (
      <div className="search-bar form-inline">
        <input id="search" onChange={(event) => this.props.handleSearchInputChange(event.target.value)} className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

{/* onChange={App.} */}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
