const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const getenrateBtn = document.getElementById("generateBtn");
const download = document.getElementById("dawnload");
const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;
getenrateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmptyInput();
    
});
sizes.addEventListener("change",(e)=>{
    size = e.target.value;
    isEmptyInput();
    
});
download.addEventListener("click",()=>{
    let img = document.querySelector(".qr-body img");
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        download.setAttribute("href",imgAtrr);
    }
    else{
        download.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`)
    }
})
function isEmptyInput(){
    // if(qrText.value.length>0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate QR code")
    // }
    qrText.value.length>0? generateQRCode(): alert("Enter the or URL to generate your QR code ");
}
function generateQRCode(){
    qrContainer.innerHTML = "";

    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"

    });
}
