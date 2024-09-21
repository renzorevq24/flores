onload = () =>{
    
    document.getElementById('btnHora').addEventListener('click', () => {
        console.log(es_11_11())
        if(es_11_11()){
            document.getElementById('lblHora').innerHTML = 'Bueno no era a esta hora xd, pero igual te lo mereces mi niñ preciosa ...'
            setTimeout(() => {
                window.location.href = "flores.html";
            }, 3000)
        }
        else {
            document.getElementById('lblHora').innerHTML = 'Esperate, aun no es la hora ...'
            setTimeout(() => {
                document.getElementById('lblHora').innerHTML = '11 : 11'
            }, 2500)
        }

    })

};

function es_11_11 () {
    let ahora = new Date(); 
    let horas = ahora.getHours(); 
    let minutos = ahora.getMinutes(); 
    return true
    if ((horas === 11 || horas === 23) && minutos === 11) {
        return true; 
    } else {
        return false; 
    }
}
