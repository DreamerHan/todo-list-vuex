<template>
    <div id="app">
        <section class="todoapp">
            <todoHeader></todoHeader>
            <todoContent :taskList="filterTaskList"></todoContent>
            <todoFoot :taskStatus="taskStatus"></todoFoot>
        </section>
    </div>
</template>
<script>

import todoHeader from '@/components/header';
import todoContent from '@/components/content';
import todoFoot from '@/components/footer'; 

export default {
    data(){
        return {
            taskStatus : 'all'
        }
    },
    computed : {
        taskList(){
            return this.$store.state.taskList
        },
        filterTaskList(){
            switch (this.taskStatus) {
                case 'all':
                    return this.taskList;
                    break;
                case 'active':
                    return this.taskList.filter( item => !item.checked );
                    break;
                case 'completed':
                    return this.taskList.filter( item => item.checked );
                    break;   
            }
        }
    },
    watch : {
        taskList : {
            handler(){
                localStorage.setItem('todo-list-vuex-router', JSON.stringify(this.taskList) );
            },
            deep : true
        },
        '$route'(to, from){
            this.taskStatus = to.name;
        }
    },
    components : {
        todoHeader,
        todoContent,
        todoFoot
    },
    created(){
        this.$store.dispatch('getTaskListAction');
    }   
}
</script>
