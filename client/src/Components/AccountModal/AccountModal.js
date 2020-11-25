import React, { useRef, useState } from 'react';
import styles from './AccountModal.module.css'
import {useDispatch} from 'react-redux';
import {fetchChangeProfileAC} from '../../redux/actionCreators';

function AccountModal(props) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [urlImage, setUrlImage] = useState('');

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
            image: urlImage,
            fullName:fullName.current.value,
            fullSurname:fullSurname.current.value,
            area:area.current.value,
            city:city.current.value
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
                        <input ref={fullName} placeholder='Имя'/>
                        <input ref={fullSurname} placeholder='Фамилия'/>
                        <input ref={city} placeholder='Город'/>
                        <input ref={area} placeholder='Район'/>
                        <input ref={phone} placeholder='Телефон'/>
                        <input ref={email} placeholder='Email'/>
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