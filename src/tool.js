import React from 'react';

export default class tool extends React.Component{
    static age='monan';
    sayHi=()=>{
        return '111'
    };
    static sayHi2=(component)=>{
        component.setState({
            name:'monan1'
        })
    };
}