import Login from '@/components/Login'
import Footer from '@/components/Footer'
import Home from '@/components/home'
import Video from '@/components/video'
import Radio from '@/components/radio'
import Circle from '@/components/circle'
import Mine from '@/components/mine'
import App from '@/App'
const router = [
    {
        path: '/',
        // name: 'Hello',
        component: App,
        children: [
            {
                path: '/',
                component: Login,
            },
            {
                path: '/footer',
                component: Footer
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
            }
        ]

    }]

export default router
