import Home from '../pages/home/home'
import Demo1 from '../pages/demo1/demo1'
import Demo2 from '../pages/demo2/demo2'
import Main from '../pages/main'
import Home1 from '../pages/home1/home1'

const routes = [
    {
        path: '/',
        component: Main,
        exact: true,
        meta: { title: 'Main' },
        routes: [

            {
                path: '/home',
                component: Home,
                meta: { title: 'home' },
                exact: true,
            },
            {
                path: '/home1',
                component: Home1,
                meta: { title: 'home1' },
            },
            {
                path: '/home2',
                component: Home1,
                meta: { title: 'home2' },
            },
            {
                path: '/home3',
                component: Home1,
                meta: { title: 'home3' },
            },
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