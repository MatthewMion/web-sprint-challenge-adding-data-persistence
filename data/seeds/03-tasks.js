exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    {
      task_description: "Task 1 description",
      task_notes: "Task 1 notes",
      task_completed: true,
      project_id: 1,
    },
    {
      task_description: "Task 2 description",
      task_notes: "Task 2 notes",
      task_completed: true,
      project_id: 2,
    },
    {
      task_description: "Task 3 description",
      task_notes: "Task 3 notes",
      task_completed: true,
      project_id: 3,
    },
  ]);
};
