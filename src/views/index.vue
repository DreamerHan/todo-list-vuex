<template>
    <div id="app">
        <section class="todoapp">
            <todoHeader></todoHeader>
            <todoContent :taskList="taskList"></todoContent>
            <todoFoot></todoFoot>
        </section>
    </div>
</template>
<script>

import todoHeader from '@/components/header';
import todoContent from '@/components/content';
import todoFoot from '@/components/footer'; 

export default {
    computed : {
        taskList(){
            return this.$store.state.taskList
        }
    },
    watch : {
        taskList : {
            handler(){
                localStorage.setItem('todo-list-vuex', JSON.stringify(this.taskList) );
            },
            deep : true
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
