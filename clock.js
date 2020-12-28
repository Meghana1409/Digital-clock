let buttons = document.querySelectorAll('button');
        // let twentyfour = document.querySelector('.twentyfour');
        let cls;
        let clock = document.querySelector('.clock');
      function displayTime() {
        let date = new Date();
        let dmy = date.toDateString();
        let time = date.toLocaleTimeString('en-US', { hour12: false });
        
        if(cls=== 'twelve'){
          time = date.toLocaleTimeString();
        }else{
          time=time;
        }
        clock.textContent = time;
        
        document.querySelector('p').textContent = dmy;
        
      }
      
      
      // displayTime();
      let createClock = setInterval(displayTime, 1000);
      buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
          cls = button.getAttribute('class');});
      });
      