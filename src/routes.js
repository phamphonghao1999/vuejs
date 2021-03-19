
import Menu from './components/Menu';
import Soluong from './components/pages/Soluong';
import MauguiSMS from './components/pages/MauguiSMS';

const routers = [
    {
        path: '/',
        component: Menu,
    },
    {
        path: '/soluong',
        component: Soluong,
    },
    {
        path: 'maugui',
        component: MauguiSMS,
    }
]



export default routers;