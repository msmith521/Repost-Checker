var searchReddit = ({}, callback) => {
	$.get('https://www.reddit.com/r/pics.jsonp', {

	})
	.done(({items}) => {
		console.log('is this getting called' + data)
		if(callback) {
			callback(items)

		}
	})
	.fail(({response}) => {
     console.error(response)
	})
}

window.searchReddit = searchReddit;
