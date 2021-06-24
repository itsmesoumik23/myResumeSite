$("body").fadeOut(0);
$("body").fadeIn(1500)

var d = new Date().getFullYear()
$(".dynamic").html(d);


var elem = document.getElementById("myBar0");
var limit = Number(elem.innerHTML)
var width = 1;
var id = setInterval(frame, 15);
function frame() {
    if (width >= limit) {
        clearInterval(id);
        $("#myBar0").text(limit + "%")
    } else {
        width++;
        elem.style.width = width + '%';
    }
}

var elem1 = document.getElementById("myBar1");
var limit1 = Number(elem1.innerHTML)
var width1 = 1;
var id1 = setInterval(frame1, 15);
function frame1() {
    if (width1 >= limit1) {
        clearInterval(id1);
        $("#myBar1").text(limit1 + "%")
    } else {
        width1++;
        elem1.style.width = width1 + '%';
    }
}

var elem2 = document.getElementById("myBar2");
var limit2 = Number(elem2.innerHTML)
var width2 = 1;
var id2 = setInterval(frame2, 15);
function frame2() {
    if (width2 >= limit2) {
        clearInterval(id2);
        $("#myBar2").text(limit2 + "%")
    } else {
        width2++;
        elem2.style.width = width2 + '%';
    }
}

var elem3 = document.getElementById("myBar3");
var limit3 = Number(elem3.innerHTML)
var width3 = 1;
var id3 = setInterval(frame3, 15);
function frame3() {
    if (width3 >= limit3) {
        clearInterval(id3);
        $("#myBar3").text(limit3 + "%")
    } else {
        width3++;
        elem3.style.width = width3 + '%';
    }
}

var elem4 = document.getElementById("myBar4");
var limit4 = Number(elem4.innerHTML)
var width4 = 1;
var id4 = setInterval(frame4, 15);
function frame4() {
    if (width4 >= limit4) {
        clearInterval(id4);
        $("#myBar4").text(limit4 + "%")
    } else {
        width4++;
        elem4.style.width = width4 + '%';
    }
}

var elem5 = document.getElementById("myBar5");
var limit5 = Number(elem5.innerHTML)
var width5 = 1;
var id5 = setInterval(frame5, 15);
function frame5() {
    if (width5 >= limit5) {
        clearInterval(id5);
        $("#myBar5").text(limit5 + "%")
    } else {
        width5++;
        elem5.style.width = width5 + '%';
    }
}

var elem6 = document.getElementById("myBar6");
var limit6 = Number(elem6.innerHTML)
var width6 = 1;
var id6 = setInterval(frame6, 15);
function frame6() {
    if (width6 >= limit6) {
        clearInterval(id6);
        $("#myBar6").text(limit6 + "%")
    } else {
        width6++;
        elem6.style.width = width6 + '%';
    }
}
