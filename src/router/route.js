import Login from '@/view/Login'
import Home from '@/view/Home'
import Video from '@/view/Video'
import Radio from '@/view/Radio'
import Circle from '@/view/Circle' // vuex引入circle组件
import Mine from '@/view/Mine'
import Test from '@/view/test'
import Searchpage from '@/view/Searchpage'
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
                        path: '/video/movie',
                        component:Movie
                    },
                    {
                        path: '/video/teleplay',
                        component:Teleplay
                    },
                    {
                        path: '/video/city',
                        component:City
                    },
                    {
                        path: '/video/read',
                        component:Read
                    },
                    {
                        path: '/video/market',
                        component:Market
                    },
                    {
                        path: '/video/music',
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
                path: '/test',
                component: Test
            },
            {
                path: '/searchpage',
                component: Searchpage
            }
        ]

    }]

export default router
