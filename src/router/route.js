import Login from '@/components/Login'
import Home from '@/components/Home'
import Video from '@/components/Video'
import Radio from '@/components/Radio'
import Circle from '@/components/Circle'
import Mine from '@/components/Mine'
import Searchpage from '@/components/Searchpage'
import App from '@/App'
const router = [
    {
        path: '/',
        // name: 'Hello',
        component: App,
        children: [
            {
                path: '/',
                component: Home,
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/video',
                component: Video
            },
            {
                path: '/radio',
                component: Radio
            },
            {
                path: '/circle',
                component: Circle
            },
            {
                path: '/mine',
                component: Mine
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/searchpage',
                component: Searchpage
            }
        ]

    }]

export default router
