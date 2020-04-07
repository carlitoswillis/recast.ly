
class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange (event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit (event) {
    var {searchTerm} = this.state;
    var {onFormSubmit} = this.props;

    onFormSubmit(searchTerm);
    event.preventDefult();
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={this.handleChange} className="form-control" type="text" />
        <button onSubmit={this.handleSubmit} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
