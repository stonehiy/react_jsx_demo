import Home from '../pages/home/home'
import Demo1 from '../pages/demo1/demo1'
import Demo2 from '../pages/demo2/demo2'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        meta: { title: 'Home' },
        routes: [
            {
                path: '/home1',
                component: Home
            },
            {
                path: '/home2',
                component: Home
            }
        ]
    },
    {
        path: '/demo1',
        component: Demo1,
        meta: { title: 'Demo1' },
        
    },
    {
        path: '/demo2',
        component: Demo2,
        meta: { title: 'Demo2' },
        
    },
]


export default routes