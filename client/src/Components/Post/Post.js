import CommentsList from '../CommentsList/CommentsList';
import CommentForm from '../CommentForm/CommentForm';
import VoteList from '../VoteList/VoteList';
import style from './Post.module.css'
function Post({post}) {
	const img = '/img/'+Math.floor(Math.random()*6)+'.jpg'
	return (
		<div className={style.post}>
			<img src={post.photo?  post.photo :img }/>
			<div className={style.postText}>
				<h2> { post.title }</h2>
				<div className={style.adress}><span className={style.title}>Адрес:</span> {post.address}</div>
				<div className={style.line}></div>
				<div className={style.item}><span className={style.title} >Описание проекта:</span> <div className={style.description}>{ post.description }</div></div>
				<div className={style.author}><span>Автор:</span> { post.authorID }</div>
				<div className={style.line}></div>
				<div className={style.item}><span className={style.title} >Комментарии:</span> <CommentsList key={post._id} id={ post._id } comments={post.comments} /> <br/> <CommentForm id={post._id} /></div>
				<div> <VoteList key={post._id} id={ post._id } post={post}/> </div>
			</div>
        
		</div>
	);
}

export default Post;
