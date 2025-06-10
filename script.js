document.getElementById('addBtn').addEventListener('click', () => {
  const container = document.getElementById('progressContainer');

  // Create the wrapper and the progress bar
  const wrapper = document.createElement('div');
  wrapper.classList.add('progress-wrapper');

  const bar = document.createElement('div');
  bar.classList.add('progress-bar');

  wrapper.appendChild(bar);
  container.appendChild(wrapper);

  // Trigger the transition in the next event loop
  requestAnimationFrame(() => {
    bar.style.width = '100%';
  });
});
