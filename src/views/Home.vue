<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Task</a>
            <a class="nav-link" href="/location.html">Location</a>
            <a class="nav-link" href="#">Log Out</a>
          </div>
        </div>
      </div>
    </nav>
    <aside class="sidenav d-none d-md-block d-sm-none">
      <ul>
        <li>
          <a href="/task.html" class="active nav-page">
            <span
              class="iconify sidenav-icon"
              data-icon="fluent:clipboard-task-list-rtl-24-regular"
              style="color: white"
              data-width="22"
              data-height="22"
            ></span>
            <p>Task</p>
          </a>
        </li>
        <li>
          <a href="/location.html" class="nav-page">
            <span
              class="iconify sidenav-icon"
              data-icon="akar-icons:location"
              style="color: white"
              data-width="18"
              data-height="22"
            ></span>
            <p>Location</p>
          </a>
        </li>
        <li>
          <a href="#" class="logout nav-page">
            <span
              class="iconify sidenav-icon"
              data-icon="icon-park:logout"
              style="color: white"
              data-width="18"
              data-height="22"
            ></span>

            <p>Log out</p>
          </a>
        </li>
      </ul>
    </aside>
    <main>
      <h1 class="title mr-auto">+ Add new task</h1>
      <div class="tasks incomplete-section" v-if="Tasks">
        <h2 class="title">Incomplete</h2>
        <div
          class="incomplete-task mt-2"
          v-for="task in Tasks.incomplete"
          :key="task.id"
        >
          <input
            class="incomplete-checkbox"
            type="checkbox"
            id="task"
            name="task"
            value="Task"
          />
          <div>
            <p class="task-title">{{ task.summary }}</p>
            <p class="task-time">
              <span class="iconify" data-icon="noto:alarm-clock"></span>
              {{ task.due_date }}
            </p>
          </div>
        </div>
      </div>
      <div class="tasks complete-section" v-if="Tasks.completed">
        <h2 class="title">Complete</h2>
        <div
          class="incomplete-task mt-2"
          v-for="task in Tasks.completed"
          :key="task.id"
        >
          <input
            class="incomplete-checkbox"
            type="checkbox"
            id="task"
            name="task"
            value="Task"
            checked
            disabled
          />
          <div>
            <p class="task-title-done">{{ task.summary }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      form: {
        title: "",
        write_up: "",
      },
    };
  },
  created: function() {
    // a function to call getposts action
    this.getAllTasks();
  },
  computed: {
    ...mapGetters({ Tasks: "StateTasks", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["getAllTasks"]),
    async submit() {
      try {
        await this.getAllTasks();
      } catch (error) {
        throw "Sorry you can't make a post now!";
      }
    },
  },
};
</script>
