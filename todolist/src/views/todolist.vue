<template>
  <div class="todobox">
    <!-- <h1>This is an todolist page</h1> -->
    <header>
      <section>
        <label for="title">ToDoList</label>
        <input
          type="text"
          v-model="todo"
          @keyup.enter="add"
          placeholder="添加ToDo"
        />
      </section>
    </header>

    <section>
      <h2>
        正在进行
        <span>{{ todoLen }}</span>
      </h2>
      <ol class="demo-box">
        <li
          v-for="(item, index) of list"
          :key="index"
          v-show="item.done === false"
        >
          <input type="checkbox" @change="changeTodo(index, true)" />
          <p>{{ item.todo }}</p>
          <a @click="del(index,true)">-</a>
        </li>
      </ol>

      <h2>
        已经完成
        <span>{{ list.length-todoLen }}</span>
      </h2>
      <ul>
        <li
          v-for="(item, index) of list"
          :key="index"
          v-show="item.done === true"
        >
          <input
            type="checkbox"
            checked="checked"
            @change="changeTodo(index,false)"
          />
          <p>{{ item.todo }}</p>
          <a @click="del(index,false)">-</a>
        </li>
      </ul>
    </section>
    <!-- <footer>
      Copyright &copy; 2014 todolist.cn
      <a>clear</a>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: "Todolist",
  data() {
    return {
      todo: "",
      list: [],
      todoLen: 0,
    };
  },
  methods: {
    add() {
      let todoitem = {
        todo: this.todo,
        done: false,
      };
      this.list.push(todoitem);
      this.todoLen++;
      this.todo = "";
    },
    changeTodo(index, done) {
      if (done) {
        this.todoLen--;
        this.list[index].done = true;
      } else {
        this.todoLen++;
        this.list[index].done = false;
      }
    },
    del(index,done){
        if(done){
            this.todoLen--
        }
        this.list.splice(index,1)
    }
  },
};
</script>