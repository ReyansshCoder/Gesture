Webcam. set({width:350,height:300,image_format:'png',png_quality:90});
camera=document.getElementById("camera");
Webcam. attach("#camera")
function pic(){
Webcam. snap(function (data_uri){
document.getElementById("result").innerHTML='<img id="i1" src="'+data_uri+'"/>';});}
p_1="";
p_2="";
function speak(){
var ap= window. speechSynthesis;
sp1= "Nice Pic    The first prediction is "+p_1;
sp2= "Now The second prediction is "+p_2;
var utter_it= new SpeechSynthesisUtterance(sp1+sp2);
ap.speak(utter_it);
}
console.log("ml5 ka version no. ye raha ",ml5.version)
my_model= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x7isberXQ/model.json',modelLoaded);
function modelLoaded(){
console.log("Apka model load ho chuka hai adhik jankari ke liye apne app ko call lagaya")
}
//**tum model loadtm asti */
function idenify(){
i2= document.getElementById("i1");
my_model.classify(i2,gotResult);    
}
function gotResult(error,results){
if(error){console.log(error)}
else{
console.log(results)
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
p_1=results[0].label;
p_2=results[1].label;
speak();
if(results[0].label=="Thumbs Up"){
document.getElementById("update_emoji").innerHTML="&#128077;";}
if(results[0].label=="Thumbs Down"){
    document.getElementById("update_emoji").innerHTML="&#128078;";}
    if(results[0].label=="Victory"){
        document.getElementById("update_emoji").innerHTML="&#9996;";}

        if(results[1].label=="Thumbs Up"){
            document.getElementById("update_emoji_2").innerHTML="&#128077;";}
            if(results[1].label=="Thumbs Down"){
                document.getElementById("update_emoji_2").innerHTML="&#128078;";}
                if(results[1].label=="Victory"){
                    document.getElementById("update_emoji_2").innerHTML="&#9996;";}
            



}


}