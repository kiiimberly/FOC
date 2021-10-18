function calculatebmi() {
var weight = document.bmiform.weight.value
var height = document.bmiform.height.value
if(weight > 0 && height > 0){	
var finalBmi = (703*weight)/(height*height)
document.bmiform.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiform.meaning.value = "Underweight BMI."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiform.meaning.value = "You are healthy."
}
if(finalBmi > 25){
document.bmiform.meaning.value = "Overweight BMI. Please go on a diet!"
}
}
else{
alert("Please Fill in everything correctly")
}
}