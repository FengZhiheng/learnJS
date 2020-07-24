function myFunction() {
    // document.write("<h1>这是第一个段落</h1>");
    // document.write("<h2>这是第二个段落</h2>");
    // document.getElementById("demo").innerHTML(Date());
    // document.getElementById("demo").innerHTML("???");

    document.getElementById("myPar").innerHTML="你好世界！";
    document.getElementById("myDiv").innerHTML="你最近怎么样?";
}


function myFunction2() {
    // document.write("<h1>这是第一个段落</h1>");
    // document.write("<h2>这是第二个段落</h2>");
    // document.getElementById("demo").innerHTML(Date());
    // document.getElementById("demo").innerHTML("???");

    // document.getElementById("myPar").innerHTML="你好世界！";
    document.getElementById("myDiv").innerHTML="你最近怎么样?";
    document.getElementById("myPar").innerHTML=Date();
}


function restore() {
    // document.write("<h1>这是第一个段落</h1>");
    // document.write("<h2>这是第二个段落</h2>");
    // document.getElementById("demo").innerHTML(Date());
    // document.getElementById("demo").innerHTML("???");

    document.getElementById("myPar").innerHTML="我是一个段落。";
    document.getElementById("myDiv").innerHTML="我是一个div。";
}

function load() {
    var firstname;
    firstname = "Hege";
    document.write(firstname);
    document.write("<br>");
    firstname = "Tove";
    document.write(firstname);
}


function sayHello() {
    var time = new Date().getHours();
    var x = "";
    if(time < 20){
        x = "Good Day!";
        document.getElementById("demo").innerHTML=x;
    }else{
        x = "Good Night!";
        document.getElementById("demo").innerHTML=x;
    }
}

function randomTest() {
    var r=Math.random();
    var x=document.getElementById("demo")
    document.getElementById("ccc").innerText = r;
    if (r>0.5){
        x.innerHTML="<a href='http://www.runoob.com'>访问菜鸟教程</a>";
    }
    else{
        x.innerHTML="<a href='http://wwf.org'>Visit WWF</a>";
    }
}


function WhichDay() {
    var x;
    var d=new Date().getDay();
    switch (d){
        case 0:x="今天是星期日";
            break;
        case 1:x="今天是星期一";
            break;
        case 2:x="今天是星期二";
            break;
        case 3:x="今天是星期三";
            break;
        case 4:x="今天是星期四";
            break;
        case 5:x="今天是星期五";
            break;
        case 6:x="今天是星期六";
            break;
    }
    document.getElementById("demo").innerHTML=x;
}


function alertx() {
    // alert("你好，我是一个警告框！");
    // alert("Hello\nHow are you?");
    var x;
    var person=prompt("请输入你的名字","Harry Potter");
    if (person!=null && person!=""){
        x="你好 " + person + "! 今天感觉如何?";
        document.getElementById("demo").innerHTML=x;
    }
}

function alert2(text) {
    alert(text);
    // alert("Hello\nHow are you?");

}


function parmFuncion(name, job) {
    alert("Welcome " + name + ", the " + job);
}


function parmReturn() {
    return("Hello World");
}

function parmReturnFather() {
    document.write(parmReturn());
}


function MathF(a, b) {
    return a * b;
}

function f1(){
    document.getElementById("demo").innerHTML = MathF(10,3);
}

function changeText(id) {
    id.innerHTML = "Oooops!";
}


function showmessagex() {
    var txt="";
    try {
        adddlert("Welcome guest!");
    }
    catch (err) {
        txt="本页有一个错误。\n\n";
        txt+="单击确定继续跳转\n";
        txt+="或者单击取消返回\n\n";
        if(confirm(txt)){
            document.location.href = "//www.runoob.com/";
        }
    }

}