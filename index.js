


const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function() {
      task.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");


task1.logState();
task1.markCompleted();
task1.logState();
