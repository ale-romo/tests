function addToQueue(runTask, queue, thisNum, blocked) {
  const run = () => runTask(function() {
    if(queue.length) {
      (queue.shift())();
    };
  });
  queue.push(run);
  console.log(`${thisNum}, ${clickNum}`)
  if(thisNum === 1) (queue.shift())();
}
