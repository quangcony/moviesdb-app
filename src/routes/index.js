// pages
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/:category', component: Catalog },
    { path: '/:category/:id', component: Detail },
    { path: '/:category/search/:keyword', component: Catalog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
