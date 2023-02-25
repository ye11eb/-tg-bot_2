import React from 'react';
import './Button.css'
const button = (props) => {
    return (
        <button {...props} className={'button ' + PushSubscriptionOptions.className}/>
    );
};

export default button;