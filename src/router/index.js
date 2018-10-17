import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import views from '@/views';

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'todoIndex',
            component: views,
            children: [{
                    path: 'all',
                    name: 'all',
                    component: views
                },
                {
                    path: 'active',
                    name: 'active',
                    component: views
                },
                {
                    path: 'completed',
                    name: 'completed',
                    component: views
                },
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})