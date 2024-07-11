const helloWorld = user => {
  const d = new Date();
  const hour = d.getHours();

  const say = message => {
    console.log(message);
  };

  if (hour <= 12) {
    say(`Selamat pagi ${user}`);
  } else if (hour > 12 && hour <= 15) {
    say(`Selamat siang ${user}`);
  } else if (hour > 14 && hour <= 18) {
    say(`Selamat sore ${user}`);
  } else {
    say(`Wayah turu`);
  }
};

const user = prompt("Nama kamu siapa?");
helloWorld(user);
