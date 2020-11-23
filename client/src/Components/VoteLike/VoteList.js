import React from 'react';
import {useSelector} from 'react-redux';
import {store} from '../../redux/store';
import Like from '../VoteList/Like';
import Dislike from '../VoteDislike/Dislike';

function VoteList(props) {

	const vote = useSelector(store => store);

	return (
		<div>
			Vote list

			{ vote && vote.map(el => <Like el={ el.like }/>, <Dislike el={ el.dislike }/>) }

		</div>
	);
}

export default VoteList;
