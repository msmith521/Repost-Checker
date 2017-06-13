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
        } else {
          var div = document.createElement('div');
          div.id = 'OC';
          var niceOC = document.createTextNode('NICE OC!!');
          div.appendChild(niceOC);
          document.body.appendChild(div);
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
          React.createElement(OCnote, { id: 'OCnote', searchReddit: this.searchReddit.bind(this), counter: this.state.counter })
        )
      );
    }
  }]);

  return App;
}(React.Component);
// window.searchReddit = searchReddit;


module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1B1YmxpYy9hcHAuanN4Il0sIm5hbWVzIjpbImhlYWRlcnMiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoQmFyIiwic3ViQmFyIiwiY291bnRlckNvbG9yIiwiY291bnRlciIsInMiLCJzZWFyY2hTdHJpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ0aGF0IiwicmVzdWx0cyIsImRhdGEiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsInVybCIsInNldFN0YXRlIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJuaWNlT0MiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiYm9keSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3ViQ2hhbmdlIiwic2VhcmNoUmVkZGl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxVQUFVO0FBQ1osaUNBQStCLEdBRG5CO0FBRVosa0NBQWdDLGlDQUZwQjtBQUdaLGtDQUFnQyxzQkFIcEI7QUFJWiw0QkFBMEIsRUFKZCxFQUlrQjtBQUM5QixrQkFBZ0I7QUFMSixDQUFkOztJQVdNQyxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQURBO0FBRVhDLGNBQVEsRUFGRztBQUdYQyxvQkFBYyxPQUhIO0FBSVhDLGVBQVMsQ0FKRTtBQUtYQyxTQUFHO0FBTFEsS0FBYjtBQUhpQjtBQVVsQjs7OzttQ0FFYztBQUFBOztBQUNiLFVBQUlDLGVBQWUsOEJBQTRCLEtBQUtOLEtBQUwsQ0FBV0UsTUFBdkMsR0FBOEMsaUJBQWpFOztBQUVBSyxZQUFNRCxZQUFOLEVBQ0dFLElBREgsQ0FDUTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLE9BRFIsRUFFR0YsSUFGSCxDQUVRLG1CQUFXO0FBQ2YsWUFBSUosVUFBVSxDQUFkO0FBQ0EsWUFBSU8sYUFBSjs7QUFFQUMsZ0JBQVFDLElBQVIsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEIsVUFBU0MsS0FBVCxFQUFnQjtBQUM1QyxjQUFHQSxNQUFNSCxJQUFOLENBQVdJLEdBQVgsSUFBa0JOLEtBQUtYLEtBQUwsQ0FBV0MsU0FBaEMsRUFBMkM7QUFDekNHO0FBQ0Q7QUFDRixTQUpEOztBQU1BLGVBQU9BLE9BQVA7QUFDRCxPQWJILEVBY0tJLElBZEwsQ0FjVTtBQUFBLGVBQVcsT0FBS1UsUUFBTCxDQUFjLEVBQUVkLGdCQUFGLEVBQWQsQ0FBWDtBQUFBLE9BZFYsRUFlS0ksSUFmTCxDQWVVLFlBQU07QUFDVixZQUFHLE9BQUtSLEtBQUwsQ0FBV0ksT0FBWCxHQUFxQixDQUF4QixFQUEyQjtBQUN6QixpQkFBS2MsUUFBTCxDQUFjO0FBQ1pmLDBCQUFjLEtBREY7QUFFWkUsZUFBRztBQUZTLFdBQWQ7QUFJRCxTQUxELE1BS087QUFDSCxjQUFJYyxNQUFNQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQUYsY0FBSUcsRUFBSixHQUFPLElBQVA7QUFDQSxjQUFJQyxTQUFTSCxTQUFTSSxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQUwsY0FBSU0sV0FBSixDQUFnQkYsTUFBaEI7QUFDQUgsbUJBQVNNLElBQVQsQ0FBY0QsV0FBZCxDQUEwQk4sR0FBMUI7QUFDRDtBQUVKLE9BN0JMO0FBOEJEOzs7dUNBRWtCUSxLLEVBQU87QUFDeEIsV0FBS1QsUUFBTCxDQUFjO0FBQ1pqQixtQkFBVzBCLE1BQU1DLE1BQU4sQ0FBYUM7QUFEWixPQUFkO0FBR0Q7OztvQ0FFZUYsSyxFQUFPO0FBQ3JCLFdBQUtULFFBQUwsQ0FBYztBQUNaaEIsZ0JBQVF5QixNQUFNQyxNQUFOLENBQWFDO0FBRFQsT0FBZDtBQUlEOzs7NkJBRVE7QUFDUCxhQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUVFLHlDQUFPLElBQUcsV0FBVixFQUFzQixNQUFLLE1BQTNCLEVBQWtDLGFBQVksUUFBOUMsRUFBdUQsT0FBTyxLQUFLN0IsS0FBTCxDQUFXQyxTQUF6RSxFQUFvRixVQUFVLEtBQUs2QixrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBOUYsR0FGRjtBQUdFLHlDQUFPLElBQUcsY0FBVixFQUF5QixNQUFLLE1BQTlCLEVBQXFDLGFBQVksV0FBakQsRUFBNkQsT0FBTyxLQUFLL0IsS0FBTCxDQUFXRSxNQUEvRSxFQUF1RixVQUFVLEtBQUs4QixlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUFqRyxHQUhGO0FBS0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLRSxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUFqQjtBQUFBO0FBQUEsV0FMRjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQUE7QUFBQSxnQkFBTSxXQUFXLEtBQUsvQixLQUFMLENBQVdHLFlBQTVCO0FBQTJDLG1CQUFLSCxLQUFMLENBQVdJO0FBQXRELGFBQWhDO0FBQUE7QUFBMkcsaUJBQUtKLEtBQUwsQ0FBV0s7QUFBdEgsV0FURjtBQVdFLDhCQUFDLE1BQUQsSUFBUSxJQUFHLFFBQVgsRUFBbUIsY0FBYyxLQUFLNEIsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakMsRUFBK0QsU0FBUyxLQUFLL0IsS0FBTCxDQUFXSSxPQUFuRjtBQVhGO0FBSEYsT0FGRjtBQXFCRDs7OztFQW5GZThCLE1BQU1DLFM7QUFxRnhCOzs7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQnZDLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBzZWFyY2ggPSByZXF1aXJlKCcuLi9zZWFyY2hSZWRkaXQuanMnKVxudmFyIGhlYWRlcnMgPSB7XG4gICdhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4nOiAnKicsXG4gICdhY2Nlc3MtY29udHJvbC1hbGxvdy1tZXRob2RzJzogJ0dFVCwgUE9TVCwgUFVULCBERUxFVEUsIE9QVElPTlMnLFxuICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctaGVhZGVycyc6ICdjb250ZW50LXR5cGUsIGFjY2VwdCcsXG4gICdhY2Nlc3MtY29udHJvbC1tYXgtYWdlJzogMTAsIC8vIFNlY29uZHMuXG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbn07XG5cblxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaEJhcjogJycsXG4gICAgICBzdWJCYXI6ICcnLFxuICAgICAgY291bnRlckNvbG9yOiAnZ3JlZW4nLFxuICAgICAgY291bnRlcjogMCxcbiAgICAgIHM6ICdzJ1xuICAgIH07XG4gIH1cblxuICBzZWFyY2hSZWRkaXQoKSB7XG4gICAgdmFyIHNlYXJjaFN0cmluZyA9ICdodHRwczovL3d3dy5yZWRkaXQuY29tL3IvJyt0aGlzLnN0YXRlLnN1YkJhcisnLmpzb24/bGltaXQ9MjUwJztcbiAgICBcbiAgICBmZXRjaChzZWFyY2hTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgcmVzdWx0cy5kYXRhLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICBpZihjaGlsZC5kYXRhLnVybCA9PSB0aGF0LnN0YXRlLnNlYXJjaEJhcikge1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY291bnRlcjtcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKGNvdW50ZXIgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXIgfSkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY291bnRlckNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgczogJydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBkaXYuaWQ9J09DJ1xuICAgICAgICAgICAgICB2YXIgbmljZU9DID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05JQ0UgT0MhIScpXG4gICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuaWNlT0MpXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgfSBcbiAgXG4gIGhhbmRsZVNlYXJjaENoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoQmFyOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG4gIFxuICBoYW5kbGVTdWJDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1YkJhcjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgICBcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5SZXBvc3QgQ2hlY2tlcjwvaDE+XG4gICAgICAgIDxoMj5MZXRzIE1ha2Ugc29tZSBPcmlnaW5hbCBDb250ZW50PC9oMj5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaEJhclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hCYXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpfS8+IFxuICAgICAgICAgIDxpbnB1dCBpZD1cInN1YnJlZGRpdEJhclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJyZWRkaXRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zdWJCYXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YkNoYW5nZS5iaW5kKHRoaXMpfS8+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUmVkZGl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgTXIgYnV0dG9uXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8cD5Zb3VyIGxpbmsgaGFzIGJlZW4gc3VibWl0dGVkIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb3VudGVyQ29sb3J9Pnt0aGlzLnN0YXRlLmNvdW50ZXJ9PC9zcGFuPiB0aW1le3RoaXMuc3RhdGUuc308L3A+XG5cbiAgICAgICAgICA8T0Nub3RlIGlkPVwiT0Nub3RlXCJzZWFyY2hSZWRkaXQ9e3RoaXMuc2VhcmNoUmVkZGl0LmJpbmQodGhpcyl9IGNvdW50ZXI9e3RoaXMuc3RhdGUuY291bnRlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgKTtcbiAgfVxufVxuLy8gd2luZG93LnNlYXJjaFJlZGRpdCA9IHNlYXJjaFJlZGRpdDtcbm1vZHVsZS5leHBvcnRzID0gQXBwOyJdfQ==