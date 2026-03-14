let selectedImage=null

let video=document.getElementById("camera")
let canvas=document.getElementById("canvas")

function uploadImage(){
document.getElementById("fileInput").click()
}

document.getElementById("fileInput").addEventListener("change",function(){

selectedImage=this.files[0]

document.getElementById("previewImg").src=
URL.createObjectURL(selectedImage)

document.getElementById("scanBtn").disabled=false

})


async function startCamera(){

let stream=await navigator.mediaDevices.getUserMedia({video:true})

video.srcObject=stream

video.onclick=function(){

canvas.width=video.videoWidth
canvas.height=video.videoHeight

let ctx=canvas.getContext("2d")

ctx.drawImage(video,0,0)

canvas.toBlob(blob=>{

selectedImage=blob

document.getElementById("previewImg").src=
URL.createObjectURL(blob)

document.getElementById("scanBtn").disabled=false

})

}

}



async function startScan(){

let ocrEndpoint=document.getElementById("ocrEndpoint").value
let ocrKey=document.getElementById("ocrKey").value

let safetyEndpoint=document.getElementById("safetyEndpoint").value
let safetyKey=document.getElementById("safetyKey").value


let response=await fetch(

ocrEndpoint+"/vision/v3.2/read/analyze",

{

method:"POST",

headers:{

"Ocp-Apim-Subscription-Key":ocrKey,
"Content-Type":"application/octet-stream"

},

body:selectedImage

})


let operation=response.headers.get("operation-location")


setTimeout(async()=>{

let result=await fetch(operation,{
headers:{
"Ocp-Apim-Subscription-Key":ocrKey
}
})

let data=await result.json()

let extractedText=""

data.analyzeResult.readResults.forEach(page=>{

page.lines.forEach(line=>{

extractedText+=line.text+" "

})

})


document.getElementById("ocrText").innerText=extractedText

analyzeContent(extractedText,safetyEndpoint,safetyKey)

},3000)

}



async function analyzeContent(text,endpoint,key){

let response=await fetch(

endpoint+"/contentsafety/text:analyze?api-version=2023-10-01",

{

method:"POST",

headers:{

"Ocp-Apim-Subscription-Key":key,
"Content-Type":"application/json"

},

body:JSON.stringify({
text:text
})

})

let result=await response.json()


result.categoriesAnalysis.forEach(cat=>{

if(cat.category==="Hate")
document.getElementById("hate").innerText=cat.severity

if(cat.category==="Violence")
document.getElementById("violence").innerText=cat.severity

if(cat.category==="SelfHarm")
document.getElementById("selfharm").innerText=cat.severity

if(cat.category==="Sexual")
document.getElementById("sexual").innerText=cat.severity

})

}