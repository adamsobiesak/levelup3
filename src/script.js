export default function() {
    const time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hrs = time.getHours();

    function* secGen() {
        while (true) {
            yield sec++;
      };
    }
  
    function* minGen() {
      while (true) {
        yield min++;
      }
    }
  
    function* hrsGen() {
      while (true) {
        yield hrs++;
      }
    }
  
    setInterval(function()  { secGen().next().value;
            if (sec === 60) { minGen().next().value; sec = 0;
      }
            if (min === 60) {hrsGen().next().value; min = 0;
      }
            if (hrs === 12) { hrs = 0;
      }
         document.querySelector(".tiktak").innerHTML = `${hrs .toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }, 1000);
  }