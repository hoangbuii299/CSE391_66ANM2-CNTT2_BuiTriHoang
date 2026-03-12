const nameInput = document.getElementById("name")
const birthInput = document.getElementById("birth")
const genderInput = document.getElementById("gender")
const emailInput = document.getElementById("email")
const pass = document.getElementById("pass")
const confirmPass = document.getElementById("confirmPass")
const steps = document.querySelectorAll(".step")
const progressBar = document.getElementById("progressBar")

let currentStep = 0

function showStep(index){

steps.forEach(step=>step.classList.remove("active"))

steps[index].classList.add("active")

progressBar.style.width = ((index+1)/steps.length*100)+"%"

}

document.getElementById("next1").onclick=function(){

if(name.value=="" || birth.value=="" || gender.value==""){
alert("Nhập đầy đủ")
return
}

currentStep=1
showStep(currentStep)

}

document.getElementById("back1").onclick=function(){

currentStep=0
showStep(currentStep)

}

document.getElementById("next2").onclick=function(){

if(pass.value !== confirmPass.value){
alert("Mật khẩu không khớp")
return
}

currentStep=2

document.getElementById("summary").innerHTML=

document.getElementById("summary").innerHTML = `
Tên: ${nameInput.value}<br>
Ngày sinh: ${birthInput.value}<br>
Giới tính: ${genderInput.value}<br>
Email: ${emailInput.value}
`

showStep(currentStep)

}

document.getElementById("back2").onclick=function(){

currentStep=1
showStep(currentStep)

}

showStep(0)