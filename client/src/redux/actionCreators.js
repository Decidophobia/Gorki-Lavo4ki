import {
  ADD_USER,
  LOGIN_USER,
  SEND_MESSAGE,
  ADD_POST,
  GET_POSTS,
  GET_USER,
  ADD_VOTE,
  ADD_LIKE,
  ADD_DISLIKE,
  ADD_COMMENT,
  GET_COORDS,
  CHANGE_PROFILE,
} from './actionTypes';

const regexp = new RegExp(/\"/gm);

// add user
export const fetchAddUserAC = (payload) => {
  return (dispatch) => {
    fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(addUserAC({ result }));
        localStorage.setItem('token', JSON.stringify(result.token));
        localStorage.setItem('name', JSON.stringify(result.name));
        localStorage.setItem('userId', JSON.stringify(result.userId));
      });
  };
};

export const addUserAC = (payload) => ({
  type: ADD_USER,
  payload,
});

// login
export const fetchLoginUserAC = (payload) => {
  return (dispatch) => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(loginUserAC({ result }));
        if (!result.message) {
          localStorage.setItem('token', JSON.stringify(result.token));
          localStorage.setItem('name', JSON.stringify(result.name));
          localStorage.setItem('userId', JSON.stringify(result.userId));
        } else {
          console.log('Неверно');
        }
      });
  };
};

export const loginUserAC = (payload) => ({
  type: LOGIN_USER,
  payload,
});

// profile
export const fetchToProfileAC = () => {
  return () => {
    const token = localStorage.token;
    if (token) {
      const regexp = new RegExp(/\"/gm);
      fetch('/auth/profile', {
        method: 'GET',
        headers: {
          // 'Content-type': 'application/json',
          Accept: '*/*',
          Authorization: token.replace(regexp, ''),
        },
      })
        .then((res) => res.json())
        .then((result) => console.log(result.token));
    } else {
      console.log('token not found');
    }
  };
};

export const getPostsAC = (payload) => ({
  type: GET_POSTS,
  payload,
});

export const addPostAC = (payload) => ({
  type: ADD_POST,
  payload,
});

// add post to DB
export const fetchAddPostAC = (payload) => {
  return (dispatch) => {
    console.log(payload);
    fetch('/post/addPost', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addPostAC(data))); // чтобы посты отрисовывались сразу после добавления - их нужно класть и на бек и в редьюсер
  };
};

//get posts from DB
export const fetchGetPostsAC = (payload) => {
  return (dispatch) => {
    fetch('/post/getPosts')
      .then((res) => res.json())
      .then((posts) => dispatch(getPostsAC(posts)));
  };
};

export const sendMessageAC = (payload) => ({
  type: SEND_MESSAGE,
  payload,
});

export const getUserAC = (payload) => ({
  type: GET_USER,
  payload,
});

export const fetchGetUserAC = (payload) => {
  return (dispatch) => {
    fetch('/account', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((result) => dispatch(getUserAC(result)));
  };
};

export const getCoords = (payload) => ({
  type: GET_COORDS,
  payload,
});

export const fetchGetCordsAC = (payload) => {
  return (dispatch) => {
    fetch('/map')
      .then((res) => res.json())
      .then((coords) => dispatch(getCoords(coords)));
  };
};

export const addVoteAC = (payload) => ({
  type: ADD_VOTE,
  payload,
});

export const addLikeAC = (payload) => ({
  type: ADD_LIKE,
  payload,
});

export const addDislikeAC = (payload) => ({
  type: ADD_DISLIKE,
  payload,
});

export const fetchLikesAC = (payload) => {
  return (dispatch) => {
    fetch('/vote/likes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(addLikeAC(res.postTolike));
      });
  };
};

export const fetchDislikesAC = (payload) => {
  return (dispatch) => {
    fetch('/vote/dislikes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => dispatch(addDislikeAC(res.postTolike)));
  };
};

export const addCommentsAC = (payload) => ({
  type: ADD_COMMENT,
  payload,
});

// add comments to DB
export const fetchAddCommentsAC = (payload) => {
  return (dispatch) => {
    fetch('/comments/addComment', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: ADD_COMMENT,
          payload: { comment: data.comment, postId: payload.postId },
        })
      ); //отправляем назад для ререндеринга
  };
};

export const fetchChangeProfileAC = (payload) => {
  return (dispatch) => {
    fetch('/account/change', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(ChangeProfileAC(data)));
  };
};

export const ChangeProfileAC = (payload) => ({
  type: CHANGE_PROFILE,
  payload,
});
