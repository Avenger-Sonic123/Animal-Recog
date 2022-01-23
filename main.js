function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1rrOYfR9E/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults()
{
    function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";


        img = document.getElementById('Cat meowing');
        img1 = document.getElementById('cow mooing');
        img2 = document.getElementById('dog barking');
        img3 = document.getElementById('lion roaring');
        img4 = document.getElementById('background sound')

        if (results[0].label == "Cat meowing")
        {
            img.src = 'cat meowing gif.gif';
        }
        else if (results[0].label == "Cow mooing")
        {
            img1.src = 'cow mooing gif.gif';
        }
        else if (results[0].label == "Dog barking")
        {
            img2.src = 'dog barking gif.gif';
        }
        else if (results[0].label == "Animal roaring")
        {
            img3.src = 'lion roaring gif.gif';
        }
        else{
            img4.src = 'Ear gif.gif';
        }
    }
}
}