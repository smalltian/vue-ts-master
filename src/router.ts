import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'basetype',
            component: () => import('./views/BaseType.vue'),
            meta: {title: '基础类型', icon: 'fa-file-excel-o'},
        },
        {
            path: '/demo02',
            name: 'demo02',
            component: () => import('./views/Demo02.vue'),
            meta: {title: 'demo02', icon: 'fa-file-excel-o'},
        },
        {
            path: '/variable',
            name: 'variable',
            component: () => import('./views/Variable.vue'),
            meta: {title: '变量', icon: 'fa-file-excel-o'},
        },
        {
            path: '/class',
            name: 'class',
            component: () => import('./views/MyClass.vue'),
            meta: {title: '类', icon: 'fa-file-excel-o'},
        },
        {
            path: '/func',
            name: 'func',
            component: () => import('./views/Func.vue'),
            meta: {title: '函数', icon: 'fa-file-excel-o'},
        },
        {
            path: '/t',
            name: 't',
            component: () => import('./views/T.vue'),
            meta: {title: '泛型', icon: 'fa-file-excel-o'},
        },
        {
            path: '/enum',
            name: 'enum',
            component: () => import('./views/Enum.vue'),
            meta: {title: '枚举', icon: 'fa-file-excel-o'},
        },
    ],
});
