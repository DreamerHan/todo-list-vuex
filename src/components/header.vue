<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="请输入内容" 
            v-model="addVal"
            @keyup.enter="handleAddTodo"
        />
    </header>
</template>
<script>
export default {
    data(){
        return {
            addVal : '',
            taskList : this.$store.state.taskList
        }
    },
    methods : {
        handleAddTodo(){
            if( !this.addVal ) {
                alert('请填写后再进行添加！');
                return;
            } 

            this.$store.commit('addMutation', this.addVal);
            this.addVal = '';
        }
    }
}
</script>

