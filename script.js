function counter(id, target, speed = 15) {
    const el = document.getElementById(id);

    let count = 0;

    const interval = setInterval(() => {
        count += Math.ceil(target / 80);

        if (count >= target) {
            count = target;
            clearInterval(interval);
        }

        el.textContent = count.toLocaleString();
    }, speed);
}

window.addEventListener('load', () => {

    counter('apiCount', 120);

    counter('requestCount', 154839);

});