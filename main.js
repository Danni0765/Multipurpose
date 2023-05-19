function startClassification()
{
    navigator.mediaDevices.getUserMedia({adio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dzJFF6LgC/model.json' , modelReady
    )
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
if (error){
    console.log(error);

}
else{
    console.log(results);
    ranodm_r=Math.floor(Math.random()*255 )+1;
    ranodm_g=Math.floor(Math.random()*255 )+1;
    ranodm_b=Math.floor(Math.random()*255 )+1;

    document.getElementById("result_label").innerHTML='I can hear - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb("+ranodm_r+", "+ranodm_g+", "+ranodm_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+ranodm_r+", "+ranodm_g+", "+ranodm_b+")";

    img1 = document.getElementById('alien1');
    img2 = document.getElementById('alien2');
    img3 = document.getElementById('alien3');
    img4 = document.getElementById('alien4');
    
    if(results[0].label == "Clap"){
        img1.src='tom gif.gif';
        img2.src='bull.jpg';
        img3.src='lambert.jpg';
        img4.src='bull.jpg';
        }

    else if(results[0].label == "Snap"){
        img1.src='tom.jpg';
        img2.src='cow gif.gif';
        img3.src='lambert.jpg';
        img4.src='spike';
        }

    else if(results[0].label == "Bell"){
      img1.src='tom.jpg';
      img2.src='bull.jpg';
      img3.src='lion gif.gif';
      img4.src='spike.jpg';
        }
    else{
        img1.src='tom.jpg';
        img2.src='bull.jpg';
        img3.src='lambert.jpg';
        img4.src='spike.gif';  
    }

}

}