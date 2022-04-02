export default class Clock 
{
    constructor(config)
    {
        const thisElement = this
        this.elements = {
            parentElements: document.querySelectorAll('[data-clock]'),
            hour: [],
            minute:[],
            second: []
        }
        this.config = config
        config.hour = config.hour || false
        config.minute = config.minute || false
        config.second = config.second || false
        this.commands = {
            hour:function(){return thisElement._getHour},
            minute:function(){return thisElement._getMinute},
            second: function(){return thisElement._getSecond} 
        }
    }
    get _getDate()
    {
        return new Date()
    }
    get _getHour()
    {
        const time = this._getDate.getHours()
        if(time < 10)
        {
            return ` : 0${time}h`
        }
        else 
        {
            return `${time}h`  
        }
    }
    get _getMinute()
    {
        const time = this._getDate.getMinutes()
        if(time < 10)
        {
            return ` : 0${time}m`
        }
        else 
        {
            return ` : ${time}m` 
        }
    }
    get _getSecond()
    {
        const time = this._getDate.getSeconds()
        if(time < 10)
        {
            return ` : 0${time}s`
        }
        else 
        {
            return ` : ${time}s`
        }
        
    }
    createElement(parentElement,content)
    {
        const element = document.createElement('span')
       
        element.innerHTML = content
        
        parentElement.appendChild(element)
        return element
    }
    init()
    {
        const 
            {parentElements} = this.elements,
            {config} = this,
            itens = ['hour','minute','second']
   
        parentElements.forEach((parentElement)=>{
            
            itens.forEach(item=>{
                if(config[item])
                {
                   switch(item)
                   {
                       case 'hour':
                       this.elements.hour.push(this.createElement(parentElement,this._getHour))
                        
                       break;
                       case 'minute':
                        this.elements.minute.push(this.createElement(parentElement,this._getMinute))
                       
                       break;
                       case 'second':
                        this.elements.second.push(this.createElement(parentElement,this._getSecond))
                       
                       break;
                   }
                }
                
            })

            setInterval(()=>{itens.forEach((item)=>{this.elements[item].forEach((time)=>{
                time.innerText = this.commands[item]()
            })})},1000)
        })
        

        return this
    }
}