<template>
    <section class="main" v-if="tasks.length">
        <input class="toggle-all" type="checkbox" v-model="isCheckedAll"/>
        <ul class="todo-list">
            <li v-for="(item,index) of tasks" :key="item.id"
                :class="{completed : item.checked, editing : index === editIndex}"
            >
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.checked"/>
                    <label @dblclick="handleEdit(index)">{{item.title}}</label>
                    <button class="destroy" @click="handleDelete(item)"></button>
                </div>
                <input class="edit" v-model="item.title" v-focus="index === editIndex"
                    @keyup.enter="handleDoneEdit($event, item)"
                    @blur="handleDoneEdit($event, item)"
                    @keyup.esc="handleOutEdit(item)"
                />
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    data(){
        return {
            editIndex : -1,
            beforeEdit : '',
            tasks : []
        }
    },
    methods : {
        handleDelete(item){ //删除
            this.$store.commit('deleteMutation', item);
        },
        handleEdit(index){ //编辑
            this.beforeEdit = this.$store.state.taskList[index].title;
            this.editIndex = index;
        },
        handleDoneEdit(ev, item){ //编辑完成
            if( ev.type === 'keyup' ){
                ev.target.blur();
                return;
            }

            if( item.title === '' ){
                this.handleDelete( item );
            }

            this.editIndex = -1;
        },
        handleOutEdit(item){ //退出编辑
            item.title = this.beforeEdit;
            this.editIndex = -1;
        }
    },
    computed : {
        isCheckedAll : {
            get(){
                return this.tasks.every( item => item.checked );
            },
            set(newVal){
                return this.tasks.forEach( item => item.checked = newVal );
            }
        }
    },
    created(){
        this.$store.dispatch('getTaskListAction').then( () => {
            this.tasks = this.$store.state.taskList;
            console.log(this.tasks);
        } )
    }
}
</script>
