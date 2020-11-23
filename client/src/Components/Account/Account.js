import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {fetchGetUserAC} from '../../redux/actionCreators'

function Account(props) {
let user = JSON.parse(localStorage.getItem('name'))
let dispatch = useDispatch()
    useEffect(()=>{
    dispatch(fetchGetUserAC({user}))
// fetch('/account', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({user}),
//   })
//     .then((res) => res.json())
//     .then((result) => {console.log(result);});

    },[])
    return (
        <div>
            Кабинет
        </div>
    );
}

export default Account;
