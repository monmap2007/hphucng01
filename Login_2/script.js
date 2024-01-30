let fireScreen = document.querySelector('.screen');

        let screen_width = window.innerWidth;

        let screen_height = window.innerHeight;

        let cracker_x = 0, cracker_y = 0;

        let fireTiming = setInterval(fireStart,6000);

        let fireWorks = document.querySelectorAll('.fireG');

        let colors = [
            '#ff7f00',
            '#00ddff',
            '#ff53d1',
            '#FFFF00',
            '#FF4500',
            '#FFF0F5',
            '#98FB98',
            '#6A5ACD',
            '#F5FFFA'
        ];        

        fireStart();

        function fireStart() {
            fireWorks.forEach((fireWork,i) =>{
                
                let rndColor = Math.floor((Math.random() * colors.length) + 1);

                fireWork.classList.remove('fired');
                fireWork.style.color = `${colors[rndColor]}`;

                cracker_x = Math.floor((Math.random() * screen_width) + 1);
                cracker_y = Math.floor((Math.random() * screen_height) + 1);
                
                fireWork.style.setProperty('--animationDelay',(i*2) + 's');
                fireWork.style.top = cracker_y + 'px';
                fireWork.style.left = cracker_x + 'px';

                setTimeout(() => {
                    fireWork.classList.add('fired');
                }, 10);
            })
        }