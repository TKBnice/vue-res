import Login from '@/components/Login'
import Home from '@/components/Home'
import Video from '@/components/Video'
import Radio from '@/components/Radio'
import Circle from '@/components/Circle'
import Mine from '@/components/Mine'
import Searchpage from '@/components/Searchpage'
import App from '@/App'
// Video子组件
import Movie from '@/view/videochild/Movie'
import Music from '@/view/videochild/Music'
import Market from '@/view/videochild/Market'
import Read from '@/view/videochild/Read'
import City from '@/view/videochild/City'
import Teleplay from '@/view/videochild/Teleplay'

const router = [
    {
        path: '/',
        // name: 'Hello',
        component: App,
        children: [
            {
                path: '/',
                redirect: '/login',
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/video',
                component: Video,
                children: [
                    {
                        path: '/movie',
                        component:Movie
                    },
                    {
                        path: '/teleplay',
                        component:Teleplay
                    },
                    {
                        path: '/city',
                        component:City
                    },
                    {
                        path: '/read',
                        component:Read
                    },
                    {
                        path: '/market',
                        component:Market
                    },
                    {
                        path: '/music',
                        component:Music
                    }
                ]
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
