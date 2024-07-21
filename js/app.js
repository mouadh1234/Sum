var x=0;
var y=0;
function calculate() {
    
var div = document.getElementById("div")
x= Number(document.getElementById("xinput").value)
y= Number(document.getElementById("yinput").value)

var somme=(x+y);
var resultinfo = document.getElementById("result")
resultinfo.innerText= somme;
div.style.display = "block";
}

var notes = [15,16,19,18,13,10,5,8,9,6]
var s = 0

    for (let i = 0; i < notes.length-1; i++) {
        s += notes[i];
        
    }
    var resultinfo = document.getElementById("rst")
    resultinfo.innerText= s/notes.length;

var min = notes[0]
notes.map((note)=>{
if(note<min){
    min=note
}
})