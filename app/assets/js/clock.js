const clock = () => {
  const now = new Date();
  const elementClock = document.getElementById('clock');
  const hour = ('0' + now.getHours()).slice(-2);
  const minute = ('0' + now.getMinutes()).slice(-2);
  const second = ('0' + now.getSeconds()).slice(-2);
  elementClock.innerText = hour + ':' + minute + ':' + second;
}

clock();
setInterval(clock, 1000);
