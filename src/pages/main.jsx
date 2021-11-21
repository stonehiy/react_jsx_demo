
import React, { Component } from 'react'
import { renderRoutes } from "react-router-config";

import Bottom from '../component/bottom/bottom'

export default class Main extends Component {
    render() {

        const { route } = this.props
        console.log("route = ", route);
        return (
            <div>

                {route && renderRoutes(route.routes)}

                <Bottom className='bottom' />
            </div>
        )
    }
}
