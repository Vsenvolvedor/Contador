export default function addNumb()
{
    const 
        S = document.querySelector.bind(document),
        time = {
            hour: S('#hour'),
            min: S('#min'),
            sec: S('#sec'),
            ids: [hour.id,min.id,sec.id]
        }, 
        add = document.querySelectorAll('.add'),
        remove = document.querySelectorAll('.remove')

    add.forEach(item=>item.addEventListener('click',handleClickAdd))
    remove.forEach(item=>item.addEventListener('click',handleClickRemove))

    function handleClickAdd({target})
    {   
        let num = 0
        for(const id of time.ids)
        {
            if(target.dataset.value === id && time[id].value < 59)
            {
                
                num = +time[id].value 
                time[id].value = ""
                num++
                time[id].value = num
            }
        }     
    }

    function handleClickRemove({target})
    {
        let num
        for(const id of time.ids)
        {
            if(target.dataset.value === id && time[id].value > 0)
            {
                num = +time[id].value 
                time[id].value = ""
                num--
                time[id].value = num
            }
        } 
    }
}