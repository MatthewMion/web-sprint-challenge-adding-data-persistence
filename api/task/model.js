const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks as t").join(
    "projects as p",
    "t.project_id",
    "p.project_id"
  );

  return tasks.map((task) => {
    return {
      ...task,
      task_completed: !!task.task_completed,
      project_completed: !!task.project_completed,
    };
  });
}

function createTask(task) {
  return db("tasks")
    .insert(task)
    .then(([task_id]) => {
      return db("tasks")
        .where("task_id", task_id)
        .first()
        .then((res) => {
          return { ...res, task_completed: !!res.task_completed };
        });
    });
}
module.exports = { getTasks, createTask };
