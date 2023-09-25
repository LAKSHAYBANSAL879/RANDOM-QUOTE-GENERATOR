console.log("hello")
const quote=document.getElementById("randomQuotes");
const author=document.getElementById("author")
const btn=document.getElementById("btn");
const api_url ="https://api.quotable.io/random";

async function quoteGen(url){
    const response=await fetch(url);
    var data= await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
btn.addEventListener("click",()=>{
    quoteGen(api_url);
});
quoteGen(api_url);
// function to listen quote
let speech=new SpeechSynthesisUtterance();
let btns=document.getElementById("sound")
let voicesSelect=document.getElementById("languages")
let voices=[]
window.speechSynthesis.onvoiceschanged=()=>{
voices=window.speechSynthesis.getVoices();
speech.voice=voices[0];
voices.forEach((voice,i)=>
    (voicesSelect.options[i]=new Option(voice.name,i)));
};
voicesSelect.addEventListener("change",()=>{
    speech.voice=voices[voicesSelect.value];
})
 function convertspeech(){
    speech.text = quote.innerHTML;
    window.speechSynthesis.speak(speech);
 }
btns.addEventListener("click",convertspeech);
function copy() {
    const tempInput = document.createElement("textarea");
    tempInput.value = quote.innerHTML;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}