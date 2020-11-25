import React, { useRef, useState } from 'react';
import styles from './AccountModal.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {fetchChangeProfileAC} from '../../redux/actionCreators';

function AccountModal(props) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
	const [urlImage, setUrlImage] = useState('');
	const {account} = useSelector(store=>store)


    const fullName =useRef()
    const fullSurname =useRef()
    const city = useRef()
    const area = useRef()
    const phone = useRef()
    const email = useRef()

    
    const uploadImage = async (event) => {
		event.preventDefault();
		const files = event.target.files;

		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'reactimages');
		setLoading(true);

		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dqau98mqw/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);

        const image = await res.json();
		setUrlImage(image.url);
    };
    	const getDataFromForm = async (event) => {
		event.preventDefault();

		const change = {
			id:account._id,
            image: urlImage,
            fullName: fullName.current.value?fullName.current.value:account.fullName,
            fullSurname:fullSurname.current.value? fullSurname.current.value: account.fullSurname,
            area:area.current.value? area.current.value: account.area,
			city:city.current.value?city.current.value:account.city,
			phone:phone.current.value?phone.current.value:account.phone,
			email:email.current.value?email.current.value:account.email
		};
		await dispatch(fetchChangeProfileAC(change));
		console.log(change);
		props.closeModal();
	};
    return (
        <div>
            <div className={ styles.contener }>
				<div>
					<form onSubmit={ getDataFromForm }>
						<input
							onChange={ uploadImage }
							type="file"
							name="file"
							placeholder="Загрузите аватарку"
						/>
                        <input ref={fullName} placeholder='Имя'placeholder={account.fullName}/>
                        <input ref={fullSurname} placeholder='Фамилия' placeholder={account.fullSurname}/>
                        <input ref={city} placeholder='Город'placeholder={account.city}/>
                        <input ref={area} placeholder='Район' placeholder={account.area}/>
                        <input ref={phone} placeholder='Телефон' placeholder={account.phone} type='number'/>
                        <input ref={email} placeholder='Email' placeholder={account.email} type='email'/>
						<button  onClick={ props.closeModal }>X</button>
						<button type="submit" className={ styles.save }>
							Cохранить
						</button>
					</form>
				</div>
			</div>
        </div>
    );
}

export default AccountModal;