import React from 'react';

function Comment(props) {
	return (
		<div>
			Single comment
			<div>
				{ props.comment }
			</div>
		</div>
	);
}

export default Comment;
