'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var search = require('../searchReddit.js')
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      searchBar: '',
      subBar: '',
      counterColor: 'green',
      counter: 0,
      s: 's'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'searchReddit',
    value: function searchReddit() {
      var _this2 = this;

      var searchString = 'https://www.reddit.com/r/' + this.state.subBar + '.json?limit=250';

      fetch(searchString).then(function (response) {
        return response.json();
      }).then(function (results) {
        var counter = 0;
        var that = _this2;

        results.data.children.forEach(function (child) {
          if (child.data.url == that.state.searchBar) {
            counter++;
          }
        });

        return counter;
      }).then(function (counter) {
        return _this2.setState({ counter: counter });
      }).then(function () {
        if (_this2.state.counter > 0) {
          _this2.setState({
            counterColor: 'red',
            s: ''
          });
        }
      });
    }
  }, {
    key: 'handleSearchChange',
    value: function handleSearchChange(event) {
      this.setState({
        searchBar: event.target.value
      });
    }
  }, {
    key: 'handleSubChange',
    value: function handleSubChange(event) {
      this.setState({
        subBar: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Repost Checker'
        ),
        React.createElement(
          'h2',
          null,
          'Lets Make some Original Content'
        ),
        React.createElement(
          'div',
          null,
          React.createElement('input', { id: 'searchBar', type: 'text', placeholder: 'Search', value: this.state.searchBar, onChange: this.handleSearchChange.bind(this) }),
          React.createElement('input', { id: 'subredditBar', type: 'text', placeholder: 'Subreddit', value: this.state.subBar, onChange: this.handleSubChange.bind(this) }),
          React.createElement(
            'button',
            { onClick: this.searchReddit.bind(this) },
            'Mr button'
          ),
          React.createElement(
            'p',
            null,
            'Your link has been submitted ',
            React.createElement(
              'span',
              { className: this.state.counterColor },
              this.state.counter
            ),
            ' time',
            this.state.s
          ),
          React.createElement(OCnote, { searchReddit: this.searchReddit.bind(this), counter: this.state.counter })
        )
      );
    }
  }]);

  return App;
}(React.Component);
// window.searchReddit = searchReddit;


module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1B1YmxpYy9hcHAuanN4Il0sIm5hbWVzIjpbImhlYWRlcnMiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoQmFyIiwic3ViQmFyIiwiY291bnRlckNvbG9yIiwiY291bnRlciIsInMiLCJzZWFyY2hTdHJpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ0aGF0IiwicmVzdWx0cyIsImRhdGEiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsInVybCIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJDaGFuZ2UiLCJzZWFyY2hSZWRkaXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLFVBQVU7QUFDWixpQ0FBK0IsR0FEbkI7QUFFWixrQ0FBZ0MsaUNBRnBCO0FBR1osa0NBQWdDLHNCQUhwQjtBQUlaLDRCQUEwQixFQUpkLEVBSWtCO0FBQzlCLGtCQUFnQjtBQUxKLENBQWQ7O0lBV01DLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEVBREE7QUFFWEMsY0FBUSxFQUZHO0FBR1hDLG9CQUFjLE9BSEg7QUFJWEMsZUFBUyxDQUpFO0FBS1hDLFNBQUc7QUFMUSxLQUFiO0FBSGlCO0FBVWxCOzs7O21DQUVjO0FBQUE7O0FBQ2IsVUFBSUMsZUFBZSw4QkFBNEIsS0FBS04sS0FBTCxDQUFXRSxNQUF2QyxHQUE4QyxpQkFBakU7O0FBRUFLLFlBQU1ELFlBQU4sRUFDR0UsSUFESCxDQUNRO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FEUixFQUVHRixJQUZILENBRVEsbUJBQVc7QUFDZixZQUFJSixVQUFVLENBQWQ7QUFDQSxZQUFJTyxhQUFKOztBQUVBQyxnQkFBUUMsSUFBUixDQUFhQyxRQUFiLENBQXNCQyxPQUF0QixDQUE4QixVQUFTQyxLQUFULEVBQWdCO0FBQzVDLGNBQUdBLE1BQU1ILElBQU4sQ0FBV0ksR0FBWCxJQUFrQk4sS0FBS1gsS0FBTCxDQUFXQyxTQUFoQyxFQUEyQztBQUN6Q0c7QUFDRDtBQUNGLFNBSkQ7O0FBTUEsZUFBT0EsT0FBUDtBQUNELE9BYkgsRUFjS0ksSUFkTCxDQWNVO0FBQUEsZUFBVyxPQUFLVSxRQUFMLENBQWMsRUFBRWQsZ0JBQUYsRUFBZCxDQUFYO0FBQUEsT0FkVixFQWVLSSxJQWZMLENBZVUsWUFBTTtBQUNWLFlBQUcsT0FBS1IsS0FBTCxDQUFXSSxPQUFYLEdBQXFCLENBQXhCLEVBQTJCO0FBQ3pCLGlCQUFLYyxRQUFMLENBQWM7QUFDWmYsMEJBQWMsS0FERjtBQUVaRSxlQUFHO0FBRlMsV0FBZDtBQUlEO0FBQ0YsT0F0Qkw7QUF1QkQ7Ozt1Q0FFa0JjLEssRUFBTztBQUN4QixXQUFLRCxRQUFMLENBQWM7QUFDWmpCLG1CQUFXa0IsTUFBTUMsTUFBTixDQUFhQztBQURaLE9BQWQ7QUFHRDs7O29DQUVlRixLLEVBQU87QUFDckIsV0FBS0QsUUFBTCxDQUFjO0FBQ1poQixnQkFBUWlCLE1BQU1DLE1BQU4sQ0FBYUM7QUFEVCxPQUFkO0FBSUQ7Ozs2QkFFUTtBQUNQLGFBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBRUUseUNBQU8sSUFBRyxXQUFWLEVBQXNCLE1BQUssTUFBM0IsRUFBa0MsYUFBWSxRQUE5QyxFQUF1RCxPQUFPLEtBQUtyQixLQUFMLENBQVdDLFNBQXpFLEVBQW9GLFVBQVUsS0FBS3FCLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUE5RixHQUZGO0FBR0UseUNBQU8sSUFBRyxjQUFWLEVBQXlCLE1BQUssTUFBOUIsRUFBcUMsYUFBWSxXQUFqRCxFQUE2RCxPQUFPLEtBQUt2QixLQUFMLENBQVdFLE1BQS9FLEVBQXVGLFVBQVUsS0FBS3NCLGVBQUwsQ0FBcUJELElBQXJCLENBQTBCLElBQTFCLENBQWpHLEdBSEY7QUFLRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtFLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCLENBQWpCO0FBQUE7QUFBQSxXQUxGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFBQTtBQUFBLGdCQUFNLFdBQVcsS0FBS3ZCLEtBQUwsQ0FBV0csWUFBNUI7QUFBMkMsbUJBQUtILEtBQUwsQ0FBV0k7QUFBdEQsYUFBaEM7QUFBQTtBQUEyRyxpQkFBS0osS0FBTCxDQUFXSztBQUF0SCxXQVRGO0FBV0UsOEJBQUMsTUFBRCxJQUFRLGNBQWMsS0FBS29CLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCLENBQXRCLEVBQW9ELFNBQVMsS0FBS3ZCLEtBQUwsQ0FBV0ksT0FBeEU7QUFYRjtBQUhGLE9BRkY7QUFxQkQ7Ozs7RUE1RWVzQixNQUFNQyxTO0FBOEV4Qjs7O0FBQ0FDLE9BQU9DLE9BQVAsR0FBaUIvQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgc2VhcmNoID0gcmVxdWlyZSgnLi4vc2VhcmNoUmVkZGl0LmpzJylcbnZhciBoZWFkZXJzID0ge1xuICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJzogJyonLFxuICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kcyc6ICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyxcbiAgJ2FjY2Vzcy1jb250cm9sLWFsbG93LWhlYWRlcnMnOiAnY29udGVudC10eXBlLCBhY2NlcHQnLFxuICAnYWNjZXNzLWNvbnRyb2wtbWF4LWFnZSc6IDEwLCAvLyBTZWNvbmRzLlxuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG59O1xuXG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hCYXI6ICcnLFxuICAgICAgc3ViQmFyOiAnJyxcbiAgICAgIGNvdW50ZXJDb2xvcjogJ2dyZWVuJyxcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICBzOiAncydcbiAgICB9O1xuICB9XG5cbiAgc2VhcmNoUmVkZGl0KCkge1xuICAgIHZhciBzZWFyY2hTdHJpbmcgPSAnaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yLycrdGhpcy5zdGF0ZS5zdWJCYXIrJy5qc29uP2xpbWl0PTI1MCc7XG4gICAgXG4gICAgZmV0Y2goc2VhcmNoU3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIHJlc3VsdHMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgaWYoY2hpbGQuZGF0YS51cmwgPT0gdGhhdC5zdGF0ZS5zZWFyY2hCYXIpIHtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvdW50ZXI7XG4gICAgICB9KVxuICAgICAgICAudGhlbihjb3VudGVyID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyIH0pKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudGVyID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGNvdW50ZXJDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgIHM6ICcnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgfSBcbiAgXG4gIGhhbmRsZVNlYXJjaENoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoQmFyOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG4gIFxuICBoYW5kbGVTdWJDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1YkJhcjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgICBcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5SZXBvc3QgQ2hlY2tlcjwvaDE+XG4gICAgICAgIDxoMj5MZXRzIE1ha2Ugc29tZSBPcmlnaW5hbCBDb250ZW50PC9oMj5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaEJhclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hCYXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpfS8+IFxuICAgICAgICAgIDxpbnB1dCBpZD1cInN1YnJlZGRpdEJhclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJyZWRkaXRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zdWJCYXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YkNoYW5nZS5iaW5kKHRoaXMpfS8+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUmVkZGl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgTXIgYnV0dG9uXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8cD5Zb3VyIGxpbmsgaGFzIGJlZW4gc3VibWl0dGVkIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb3VudGVyQ29sb3J9Pnt0aGlzLnN0YXRlLmNvdW50ZXJ9PC9zcGFuPiB0aW1le3RoaXMuc3RhdGUuc308L3A+XG5cbiAgICAgICAgICA8T0Nub3RlIHNlYXJjaFJlZGRpdD17dGhpcy5zZWFyY2hSZWRkaXQuYmluZCh0aGlzKX0gY291bnRlcj17dGhpcy5zdGF0ZS5jb3VudGVyfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICApO1xuICB9XG59XG4vLyB3aW5kb3cuc2VhcmNoUmVkZGl0ID0gc2VhcmNoUmVkZGl0O1xubW9kdWxlLmV4cG9ydHMgPSBBcHA7Il19