// import Like from '../Like/Like';
// import Dislike from '../Dislike/Dislike';
// import { useSelector } from 'react-redux';
import { votesOrCount, count } from './votelist.module.css';
import style from './votelist.module.css'
import {fetchDislikesAC} from '../../redux/actionCreators'
import { useDispatch } from 'react-redux';
import { fetchLikesAC } from '../../redux/actionCreators';

function VoteList({ id, post }) {
  let isCheckedIn = false;
  const userId = JSON.parse(localStorage.getItem('userId'))

  const dislikeRes = post && post.dislikes.some((id) => id == userId);
  const likeRes = post && post.likes.some((id) => id == userId);

  isCheckedIn = dislikeRes || likeRes;

  const countLikes = post.likes.length;
  const countDisikes = post.dislikes.length;
  //Перенос
  const regexp = new RegExp(/"/gm);
  const dispatch = useDispatch()
  const likeClicked = (e) => {
    dispatch(fetchLikesAC({ id, userId }));
    console.log(e.target);
  };

  const disliked = () => {
    dispatch(fetchDislikesAC({id, userId}))
  }

  return (
    <div className={style.container}>
        <div  className={style.likes}>      
          <div className={isCheckedIn ? count : votesOrCount} onClick={likeClicked}><img className={isCheckedIn ? count : votesOrCount} src="/img/like.png"/>{countLikes}
          </div>
          <div className={isCheckedIn ? count : votesOrCount} onClick={disliked}><img className={isCheckedIn ? count : votesOrCount} src="/img/dislike.png"/>{countDisikes}</div>
        </div>
      {/* <div className={isCheckedIn ? count : votesOrCount}>
        <Like id={id} />
        <Dislike id={id} />
      </div> */}
    </div>
  );
}

export default VoteList;
