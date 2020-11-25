import React from 'react';

function Comment({el}) {
	console.log(el);

	return (
		<div>
				<b>Name:</b> { el.user }
				<br/>
				<b>Comment:</b> { el.text }
				<br/>
				<b>Date:</b> { el.date }
		</div>
	);
}

export default Comment;
