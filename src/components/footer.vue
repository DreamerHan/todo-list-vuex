<template>
    <footer class="footer" v-if="$store.state.taskList.length">
        <span class="todo-count">
            <strong>{{$store.getters.unCheckedLen}}</strong>
            <span>条未选中</span>
        </span>
        <ul class="filters">
            <li><a href="/all" class="selected">All</a></li>
            <li><a href="/active">Active</a></li>
            <li><a href="/completed">Completed</a></li>
        </ul>
    </footer>
</template>
