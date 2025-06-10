document.getElementById('addBtn').addEventListener('click', () => {
    const container = document.getElementById('progressContainer');

    const wrapper = document.createElement('div');
    wrapper.classList.add('progress-wrapper');

    const bar = document.createElement('div');
    bar.classList.add('progress-bar');

    wrapper.appendChild(bar);   
    container.appendChild(wrapper);

    requestAnimationFrame(() => {
    bar.style.width = '100%';
    });
});
