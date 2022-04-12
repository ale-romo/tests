function addToQueue(runTask, queue) {
  // addToQueue runs when the 'Queue it up!' button is clicked.
  // If runTask is running, push runTask to array
  const run = () => runTask(function() {
    // The function passed to runTask will run when the task is done.
    //
    (queue.shift())();
  });
  queue.push(run);
}
