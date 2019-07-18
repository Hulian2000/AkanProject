var century,year,month,day;
var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var males=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var females=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function calculate(){
  century=document.getElementById('century').value;
  year=document.getElementById('year').value;
  month=document.getElementById('month').value;
  day=document.getElementById('day').value;
  dayOfTheWeek=( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) mod 7
  return dayOfTheWeek;(Math.round(dayOfTheWeek));
}
function lookUp(){
  var calc=calculate();
  var gender=document.getElementsByName('gender');
  if (gender[0].checked==true){
    gender=="male"
  } else if(gender[1].checked==true){
    gender=="female"
  } else {
    console.log("Failed")
    }
  if (gender=="male"){
    if (calc==0){
      document.write("you born on"+weekDays[0]+"Akan name is"+ males[0])
    }else if (calc==1){
        document.write("You born on "+weekDays[1]+"Akan name is "+males[1]);
    }else if (calc==2){
        document.write("Your born on "+weekDays[2]+"Akan name is "+males[2]);
    } else if(calc==3){
        document.write("you born on "+weekDays[3]+"Akan name is "+males[3]);
    } else if (calc==4){
        document.write("You born on "+weekDays[4]+"Akan name is "+males[4]);
    } else if (calc==5){
        document.write("You born on "+weekDays[5]+"Akan name is "+males[5]);
    } else {
        document.write("You born on "+weekDays[6]+"Akan name is "+males[6]);
    }
  }else if (gender=="female"){
    if (calc==0) {
      document.write("you born on"+weekDays[0]+"Akan name is"+ females[0])
    }else if (calc==1){
        document.write("You born on "+weekDays[1]+"Akan name is "+females[1]);
    }else if (calc==2){
        document.write("Your born on "+weekDays[2]+"Akan name is "+females[2]);
    } else if(calc==3){
        document.write("you born on "+weekDays[3]+"Akan name is "+females[3]);
    } else if (calc==4){
        document.write("You born on "+weekDays[4]+"Akan name is "+females[4]);
    } else if (calc==5){
        document.write("You born on "+weekDays[5]+"Akan name is "+females[5]);
    } else {
        document.write("You born on "+weekDays[6]+"Akan name is "+females[6]);
    }
  } else {
    console.log("Failed");
  }
  }
