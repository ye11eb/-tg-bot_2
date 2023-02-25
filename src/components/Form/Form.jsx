import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'

const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')

    const {tg} = useTelegram

    useEffect(() => {
        tg?.MainButton.setParams({
            text: 'відправити данні'
        })
    }, [tg])

    useEffect(() => {
        if (!street || !country) {
            tg?.MainButton.hide()
        }else{
            tg?.MainButton.show()
        }
    }, [country, street, tg])



    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }



    return (
        <div className={'form'}>
            <h3>введіть ваші данні</h3>
            <input 
                type="text" 
                className='input' 
                placeholder='країна'
                value={country}
                onChange={onChangeCountry}
            />
            <input 
                type="text" 
                className='input' 
                placeholder='вулиця'
                value={street}
                onChange={onChangeStreet}
            />
            <select  value={subject} onChange={onChangeSubject} className='select'>
                <option value={'legal'}>Фізю лице</option>
                <option value={'physical'}>Юр. лице</option>
            </select>
        </div>
    );
};

export default Form;