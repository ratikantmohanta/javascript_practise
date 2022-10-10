function bmiCalculator (weight, height) {
    var bmi = Math.round((weight*10)/ Math.pow(height,2))/10;
    
    if (bmi < 18.5){
       return "Your BMI is "+ bmi +", so you are underweight."; 
    }
    else if(bmi >=18.5 && bmi < 24.9){
        return "Your BMI is "+ bmi +", so you have a normal weight.";
    }
    else{
        return "Your BMI is "+ bmi +", so you are overweight.";
    }
    
}

// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);

//bmi should equal 20 when it's rounded to the nearest whole number.

