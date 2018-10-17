<template>
    <footer class="footer" v-if="$store.state.taskList.length">
        <span class="todo-count">
            <strong>{{$store.getters.unCheckedLen}}</strong>
            <span>条未选中</span>
        </span>
        <ul class="filters">
            <li>
                <router-link tag="a" 
                    :to="{ name : 'all' }" 
                    :class="{selected : taskStatus === 'all' }"
                >All</router-link>
            </li>
            <li>
                <router-link tag="a" 
                    :to="{ name : 'active' }"
                    :class="{selected : taskStatus === 'active' }"
                >Active</router-link>
            </li>
            <li>
                <router-link tag="a" 
                    :to="{ name : 'completed' }"
                    :class="{selected : taskStatus === 'completed' }"
                >Completed</router-link>
            </li>
        </ul>
    </footer>
</template>
<script>
export default {
    props : {
        taskStatus : {
            type : String,
            default : 'all'
        }
    }
}
</script>

