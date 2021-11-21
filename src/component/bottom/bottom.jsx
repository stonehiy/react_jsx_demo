import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


import { Badge, TabBar } from 'antd-mobile'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'

class Bottom extends Component {
    state = {
        tabs: [
            {
                key: 'home',
                title: '首页',
                icon: <AppOutline />,
                badge: Badge.dot,
            },
            {
                key: 'home1',
                title: '我的待办',
                icon: <UnorderedListOutline />,
                badge: '5',
            },
            {
                key: 'demo2',
                title: 'home2',
                icon: (active) =>
                    active ? <MessageFill /> : <MessageOutline />,
                badge: '99+',
            },
            {
                key: 'home3',
                title: '个人中心',
                icon: <UserOutline />,
            },
        ]
    }
    setRouteActive(value) {
        this.props.history.push("/"+value)

    }
    render() {
        const { tabs } = this.state
        return (
            <TabBar onChange={value => this.setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        )
    }
}

export default withRouter(Bottom)
