function playgame() {
    var random1 = Math.ceil(Math.random() * 6);
    var image1 =  "assets/c"+random1+".png";
    document.getElementById("img1").setAttribute("src", image1);



    var random2 = Math.ceil(Math.random() * 6);
    var image2 = "assets/c" + random2 + ".png";
    document.getElementById("img2").setAttribute("src", image2);

    if (random1 > random2) {
        document.getElementsByTagName("h1")[1].innerHTML = "Player1 Wins";
    }
    else if (random2 === random1) {
        document.getElementsByTagName("h1")[1].innerHTML = "Match Draw";
    }
    else {
        document.getElementsByTagName("h1")[1].innerHTML = "Player2 Wins";
    }
}
