import Vue from 'vue';
import Router from 'vue-router';
import UserList from '@/pages/UserList';
import UserInfo from '@/pages/UserInfo';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/user-list',
            name: 'UserList',
            component: UserList,
        },
        {
            path: '/user-info',
            name: 'UserInfo',
            component: UserInfo,
        },
        {
            path: '*',
            redirect: '/user-list',
        },
    ],
});
