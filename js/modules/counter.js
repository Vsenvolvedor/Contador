export default function counter()
{
    const 
        S = document.querySelector.bind(document),
        [hour,min,sec] = [S('#hour'),S('#min'), S('#sec')],
        [start,pause,reset] = [S('#start'),S('#pause'),S('#reset')]
        
    let counting = null
    
    start.addEventListener('click',startCount)
    pause.addEventListener('click',pauseCount)
    reset.addEventListener('click',resetCount)

    function startCount()
    {
       let num; 
       if(+hour.value || +min.value || +sec.value)
       {
            counting = setInterval(()=>{
              
                if(min.value == 0 && hour.value > 0)
                {
                    hour.classList.add('active')
                    hour.value = +hour.value - 1
                    min.value = 60
                    setTimeout(()=>{hour.classList.remove('active')},500)
                }
                else if(sec.value == 0 && min.value > 0)
                {
                    min.classList.add('active')
                    min.value = +min.value - 1
                    sec.value = 59
                    setTimeout(()=>{min.classList.remove('active')},500)
                }
                else if(hour.value <= 0 && min.value <= 0 && sec.value <=0){
                    const arrayTimes = [hour,min,sec];
                    clearInterval(counting)
                    sec.classList.remove('active')
                    arrayTimes.forEach(time=>time.classList.add('blink'))
                    setTimeout(()=>{arrayTimes.forEach(time=>time.classList.remove('blink'))},2000)
                }
                else 
                {
                    num = +sec.value
                    num--
                    sec.value = num
                    sec.classList.add('active')
                }
            },1000)
           
       }
       else 
       {
           alert('Adicione um tempo')
       }
    }

    function pauseCount(){
        clearInterval(counting);
        sec.classList.remove('active')
    };

    function resetCount(){
        const arrayTimes = [hour,min,sec];
        clearInterval(counting);
        hour.value = min.value = sec.value = 0;
        arrayTimes.forEach(time=>time.classList.remove('active'));
    };
    
}