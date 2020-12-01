
<template>
  <div class="todobox">
    <!-- <h1>This is an todolist page</h1> -->
    <header>
      <section>
        <label for="title">ToDoList</label>
        <v-text-field
          dark
          class="input"
          type="text"
          v-model="todo"
          @keyup.enter="add"
          placeholder="添加ToDo"
        />
        <v-btn class="mx-2" id="addbtn" fab dark color="#629a9c" @click="addbtn">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
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
          v-if="item.done === false"
        >
          <input type="checkbox" @change="changeTodo(index, true)" />
          <p>{{ item.todo }}</p>
          <a @click="del(index, true)">-</a>
        </li>
      </ol>

      <h2>
        已经完成
        <span>{{ list.length - todoLen }}</span>
      </h2>
      <ul>
        <li
          v-for="(item, index) of list"
          :key="index"
          v-if="item.done === true"
        >
          <input
            type="checkbox"
            checked="checked"
            @change="changeTodo(index, false)"
          />
          <p>{{ item.todo }}</p>
          <a @click="del(index, false)">-</a>
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
    del(index, done) {
      if (done) {
        this.todoLen--;
      }
      this.list.splice(index, 1);
    },
    addbtn(){
      const todoitem={
        todo:this.todo,
        done:false
      };
      this.list.push(todoitem),
      this.todoLen++
      this.todo=""
    }
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  /* background: #cdcdcd; */
}
header {
  height: 50px;
  /* background: #333; */
  margin-bottom: 40px;
  background: rgba(47, 47, 47, 0.98);
}
section {
  margin: 0 auto;
}
label {
  float: left;
  margin-right: 50px;
  width: 100px;
  line-height: 50px;
  color: #ddd;
  font-size: 24px;
  /* cursor: pointer; */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
/* header input {
  float: right;
  width: 60%;
  height: 24px;
  margin-top: 12px;
  text-indent: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
    0 1px 6px rgba(0, 0, 0, 0.45) inset;
  border: none;
} */
.input {
  color: #629a9c;
  /* background-color: rgba(255, 255, 255, 0.8); */

  height: 50px;
  border-radius: 10px;
}
#addbtn{
  position: relative;
  left: 300px;
  top: -30px;
}
input:focus {
  outline-width: 0;
}
h2 {
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #e6e6fa;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
}
ol,
ul {
  padding: 0;
  list-style: none;
}
li input {
  position: absolute;
  top: 2px;
  left: 10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}
p {
  margin: 0;
}
/* li p input {
  top: 3px;
  left: 40px;
  width: 70%;
  height: 20px;
  line-height: 14px;
  text-indent: 5px;
  font-size: 14px;
} */
li {
  height: 32px;
  line-height: 32px;
  background: #fff;
  position: relative;
  margin-bottom: 10px;
  padding: 0 45px;
  border-radius: 3px;
  border-left: 5px solid #629a9c;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}
ol li {
  cursor: move;
}
ul li {
  border-left: 5px solid #999;
  opacity: 0.5;
}
li a {
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-block;
  width: 30px;
  height: 20px;
  border-radius: 14px;
  border: 6px double #fff;
  background: #ccc;
  line-height: 5px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}
footer {
  color: #666;
  font-size: 14px;
  text-align: center;
}
footer a {
  color: #666;
  text-decoration: none;
  color: #999;
}
@media screen and (max-device-width: 620px) {
  section {
    width: 96%;
    padding: 0 2%;
  }
}
@media screen and (min-width: 620px) {
  section {
    width: 600px;
    padding: 0 10px;
  }
}
</style>