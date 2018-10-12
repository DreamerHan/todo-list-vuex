import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        taskList: []
    },
    getters: {
        unCheckedLen(state) { //未选中条数
            return state.taskList.filter(item => !item.checked).length;
        }
    },
    mutations: {
        addMutation(state, payload) { //添加
            state.taskList.push({
                id: Date.now() + Math.random(),
                title: payload,
                checked: false
            })
        },
        deleteMutation(state, payload) { //删除
            let posIndex = state.taskList.findIndex(item => item === payload);

            state.taskList.splice(posIndex, 1);
        },
        getTaskListMutation(state, payload) {
            state.taskList = payload;
        }
    },
    actions: {
        async getTaskListAction(store, payload) {
            let tasks = await JSON.parse(localStorage.getItem('todo-list-vuex')) || [];

            return store.commit('getTaskListMutation', tasks);
        }
    }
});

export default store;