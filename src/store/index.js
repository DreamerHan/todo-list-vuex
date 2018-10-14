import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
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
        getTaskListAction(store, payload) {
            new Promise((resolve, reject) => {
                    let taskList = JSON.parse(localStorage.getItem('todo-list-vuex')) || []

                    resolve(taskList)
                })
                .then((data) => {
                    store.commit('getTaskListMutation', data);
                })
        }
    }
});

export default store;