"use strict";

// class OCnote extends React.Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			visible: false
// 		}


// // this.searchReddit.then(ocChecker() =>{
// //     if(this.props.counter > 0) {
// //       this.setState({
// //       	visible: true
// //       }) 
// //     }
// //   })
// // }

// render () {
// 	return (
// 		<div>
// 			{this.props.counter > 0 ? <p>Repost!!</p> : null}
// 		</div>
// 		)
// 	}	
// }
var OCnote = function OCnote(_ref) {
	var counter = _ref.counter;
	return counter > 0 ? React.createElement(
		"p",
		{ id: "repost" },
		"Repost!!"
	) : null;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1B1YmxpYy9PQ25vdGUuanN4Il0sIm5hbWVzIjpbIk9Dbm90ZSIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsS0FBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEsUUFBZUEsVUFBVSxDQUFWLEdBQWM7QUFBQTtBQUFBLElBQUcsSUFBRyxRQUFOO0FBQUE7QUFBQSxFQUFkLEdBQTRDLElBQTNEO0FBQUEsQ0FBZiIsImZpbGUiOiJPQ25vdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNsYXNzIE9Dbm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyBcdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyBcdFx0c3VwZXIocHJvcHMpXG5cdFxuLy8gXHRcdHRoaXMuc3RhdGUgPSB7XG4vLyBcdFx0XHR2aXNpYmxlOiBmYWxzZVxuLy8gXHRcdH1cblxuXG4vLyAvLyB0aGlzLnNlYXJjaFJlZGRpdC50aGVuKG9jQ2hlY2tlcigpID0+e1xuLy8gLy8gICAgIGlmKHRoaXMucHJvcHMuY291bnRlciA+IDApIHtcbi8vIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gLy8gICAgICAgXHR2aXNpYmxlOiB0cnVlXG4vLyAvLyAgICAgICB9KSBcbi8vIC8vICAgICB9XG4vLyAvLyAgIH0pXG4vLyAvLyB9XG5cbi8vIHJlbmRlciAoKSB7XG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PGRpdj5cbi8vIFx0XHRcdHt0aGlzLnByb3BzLmNvdW50ZXIgPiAwID8gPHA+UmVwb3N0ISE8L3A+IDogbnVsbH1cbi8vIFx0XHQ8L2Rpdj5cbi8vIFx0XHQpXG4vLyBcdH1cdFxuLy8gfVxuY29uc3QgT0Nub3RlID0gKHtjb3VudGVyfSkgPT4gY291bnRlciA+IDAgPyA8cCBpZD1cInJlcG9zdFwiPlJlcG9zdCEhPC9wPiA6IG51bGwiXX0=