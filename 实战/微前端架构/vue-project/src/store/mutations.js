export default {
  SAVE_TODOLIST(state, payload) {
    return state.todoList = [...state.todoList, payload]
  }
}