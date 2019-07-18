var century,year,month,day;
var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var males=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var females=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


function calculate(){
  century=document.getElementById('century').value;
  year=document.getElementById('year').value;
  month=document.getElementById('month').value;
  day=document.getElementById('day').value;
  dayOfTheWeek=(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
  return (Math.round(dayOfTheWeek));
}


function validation1(){
  if(document.getElementById("century").value == "" || century<=1 || century>21){
    alert("Please enter a valid century");
    return false;
  } else {
    return true;
  };
}
function val2(){
  validation1();
  if (document.getElementById("year").value == "" || year <=1 || year>99){
    alert("Please enter a valid year!");
    return false;
  } else {
    return true;
  }
}
function val3(){
  val2();
  if (document.getElementById("month").value == "" || month<=1 || month>21){
    alert("Please enter a valid month");
    return false;
   } else{
      return true;
    };
  }
function val4(){
  val3();
  if(document.getElementById("day").value == "" || day<=1 || day>21){
    alert("Please enter a valid day");
    return false;
  } else {
    return true;
  }
}
// alert(val4());

function lookDayOfTheWeek(){
  var calc=calculate();
  val4();
  var gender=document.getElementsByName('gender');
  if (gender[0].checked==true){
    gender=="male"
  } else if(gender[1].checked==true){
    gender=="female"
  } else {
    alert("Please enter you gender!");  
  };
  if (gender=="male" && calc==0){
    document.write("you born on " + weekDays[0]+".Akan name is " + males[0]);
  } else if (gender=="female" && calc==0){
    document.write("you born on "+weekDays[0]+"Akan name is "+ females[0]);
  } else if (gender=="male" && calc==1){     
    document.write("you born on "+weekDays[1]+"Akan name is "+ males[1]);
  } else if (gender=="female" && calc==1){
    document.write("You born on "+ weekDays[1]+ "Akan name is "+ females[1]);
  } else if (gender=="male" && calc==2){
    document.write("You born on "+weekDays[2]+"Akan name is "+ males[2]);
  } else if (gender=="female" && calc==2){
    document.write("you born on "+weekDays[2]+"Akan name is "+ females[2]);
  } else if (gender=="male" && calc==3){
    document.write("you born on "+weekDays[3]+"Akan name is "+ males[3]);
  } else if (gender=="female" && calc==3){
    document.write("you born on "+weekDays[3]+"Akan name is "+ females[3]);
  } else if (gender=="male" && calc==4){
    document.write("you born on "+weekDays[4]+"Akan name is "+ males[4]);
  } else if (gender=="female" && calc==4){
    document.write("you born on "+weekDays[4]+"Akan name is "+ females[4]);
  } else if (gender=="male" && calc==5){
    document.write("you born on "+weekDays[5]+"Akan name is "+ males[5]);
  } else if (gender=="female" && calc==5){
    document.write("you born on "+weekDays[5]+"Akan name is "+ females[5]);
  } else if (gender=="male" && calc==6){
    document.write("you born on "+weekDays[6]+"Akan name is "+ males[6]);
  } else
    document.write("you born on "+weekDays[6]+"Akan name is "+ females[6]);
};  