<template>
    <div id="app">
        <section class="todoapp">
            <todoHeader></todoHeader>
            <todoContent></todoContent>
            <todoFoot></todoFoot>
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
            taskList : this.$store.state.taskList
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
    }    
}
</script>
