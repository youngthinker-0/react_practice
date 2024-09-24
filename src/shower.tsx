import React from "react";
import { QRCode } from 'antd'
import './style.css'

const Shower = (props: {name: string, ID, date, time}): JSX.Element => {
    const index = props.name.length / 2;
    let name;
    if(props.name.length){
        name = props.name.substring(0, index) + "*".repeat(props.name.length / 2) + props.name.substring(index + 1);
    }
    let ID;
    if(props.ID.length){
        ID = props.ID.substring(0, 2) + "*".repeat(14) + props.ID.substring(16);
    }
    return <div className="show-panel">
        <div className="top-panel">
            <div>
                <div>{name}</div>
                <div>{ID}</div>
            </div>
            <div>个人信息</div>
        </div>
        <QRCode value="gjrogrjeiojvnonerbntbdfebtefrse btrwsv" color="red"/>
    </div>
}

export default Shower;