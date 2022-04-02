export default function verifyInput()
{
    const 
        S = document.querySelectorAll.bind(document),
        inputs = [...S('#hour'),...S('#min'),...S('#sec')]

    inputs.forEach(input=>input.addEventListener('input',verify))

    function verify({target})
    {
        target.value = target.value.slice(0,2)
        if(target.value >= 60)
        {
            target.value = 59
        }
    }
}