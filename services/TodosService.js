class TodosService {
  getTodos(req, res) {
    res.status(200).send({status: "ok"})
  }

  getTodoById(req, res) {
    res.status(200).send({status: "ok"})
  }

  saveTodoList(req, res) {
    res.status(200).send({status: "ok"})
  }

  deleteTodoListById(req, res) {
    res.status(200).send({status: "ok"})
  }
}

export default TodosService;
