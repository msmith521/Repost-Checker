// var search = require('../searchReddit.js')
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: '',
      subBar: '',
      counterColor: 'green',
      counter: 0,
      s: 's'
    };
  }

  searchReddit() {
    var searchString = 'https://www.reddit.com/r/'+this.state.subBar+'.json?limit=250';
    
    fetch(searchString)
      .then(response => response.json())
      .then(results => {
        let counter = 0;
        let that = this;

        results.data.children.forEach(function(child) {
          if(child.data.url == that.state.searchBar) {
            counter++;
          }
        })

        return counter;
      })
        .then(counter => this.setState({ counter }))
        .then(() => {
          if(this.state.counter > 0) {
            this.setState({
              counterColor: 'red',
              s: ''
            })
          } else {
              var div = document.createElement('div');
              div.id='OC'
              var niceOC = document.createTextNode('NICE OC!!')
              div.appendChild(niceOC)
              document.body.appendChild(div);
            }
          
        })
  } 
  
  handleSearchChange(event) {
    this.setState({
      searchBar: event.target.value
    })
  }
  
  handleSubChange(event) {
    this.setState({
      subBar: event.target.value
    })
    
  }
  
  render() {
    return (
      
      <div>
        <h1>Repost Checker</h1>
        <h2>Lets Make some Original Content</h2>
        <div>

          <input id="searchBar" type="text" placeholder="Search" value={this.state.searchBar} onChange={this.handleSearchChange.bind(this)}/> 
          <input id="subredditBar" type="text" placeholder="Subreddit" value={this.state.subBar} onChange={this.handleSubChange.bind(this)}/>

          <button onClick={this.searchReddit.bind(this)}>
            Mr button
          </button>

          <p>Your link has been submitted <span className={this.state.counterColor}>{this.state.counter}</span> time{this.state.s}</p>

          <OCnote id="OCnote"searchReddit={this.searchReddit.bind(this)} counter={this.state.counter}/>
        </div>
      </div>
         
    );
  }
}
// window.searchReddit = searchReddit;
module.exports = App;