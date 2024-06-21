function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por Favor, diogite um numero')
    }else{
        let n = Number(num.value)
        let  c = 1
        tab.innerHTML = ''
        while(c <=10){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}