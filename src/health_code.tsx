import React, { useState } from 'react';
import { Input } from 'antd';
import './style.css'
import { Info } from './common';
import Shower from './shower.tsx';

const InputWidget = ({value, setValue, placeholder}) => {
    const valueChange = (event) => {
        setValue(event.target.value);
    }
    return <Input className='input-widget' type='text' placeholder = {placeholder} value={value} onChange={valueChange}></Input>
}


function HealthCode() {
    // const info: Info = undefined;
    const [name, setName] = useState('');
    const [ID, setID] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    
    return <div className='healthcode-widget'>
    <div className='input-panel'>
        <InputWidget value={name} setValue={setName} placeholder={'姓名'}/>
        <InputWidget value={ID} setValue={setID} placeholder={'身份证号'}/>
        <InputWidget value={date} setValue={setDate} placeholder={'日期'}/>
        <InputWidget value={time} setValue={setTime} placeholder={'时间'}/>
        {/* <li>您的姓名是: {name}</li> */}
    </div>
    <Shower name={name} ID={ID} date={date} time={time}/>
    </div>
}

export default HealthCode;
