
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
const OCnote = ({counter}) => counter > 0 ? <p id="repost">Repost!!</p> : null