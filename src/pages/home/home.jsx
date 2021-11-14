import React, { Component } from 'react'
import { Swiper, Toast, } from 'antd-mobile'
import './home.css'


export default class Home extends Component {

    colors = ['https://t7.baidu.com/it/u=1126218742,3382842115&fm=193&f=GIF', 
    'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF', 
    'https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF', 
    'https://t7.baidu.com/it/u=2501476447,3743798074&fm=193&f=GIF']

    items = this.colors.map((color, index) => (
        <Swiper.Item key={index}>
            <div
                className='content'
                // style={{ background: color }}
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                {/* {index + 1} */}
                <img src={color} alt="" />
            </div>
        </Swiper.Item>
    ))

    render() {
        return (
            <div className="container">
                <Swiper autoplay>{this.items}</Swiper>
                <div style={{background:'#ff0',height:'300px'}}></div>
            </div>


        )
    }
}
