

function clickButton(){
    validationButton()
}

function validationButton(){
    let day=document.querySelector('.day').value
    let month=document.querySelector('.month').value
    let tahun=document.querySelector('.tahun').value
    document.querySelector('.hari').innerHTML=day
    document.querySelector('.tanggal').innerHTML=month
    document.getElementById('years').innerHTML=tahun
}