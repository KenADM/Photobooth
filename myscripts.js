const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const context = canvas.getContext('2d');
let width = 500;
let height = 375;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// richiedo accesso alla camera
async function initCamera() { 
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
    } catch (e) {
        window.alert("allow camera access to use the photobooth");
        console.error("Error accessing camera: ", e);

    }
}

// scatto la foto
snap.addEventListener('click', async () => {
    document.getElementById("snap").disabled = true;
    context.clearRect(0, 0, canvas.width ,canvas.height);
    context.fillStyle = "white";
    context.fillRect(0, 0, 600, 1800);
    let y = 50;
    for (let i = 0; i < 4; i++) {
        
        for (let j = 0; j < 4; j++) {
            document.getElementById("counter").innerHTML=3-j;
            await delay(1000);
        }
        context.drawImage(video, 50, y, width, height);

        y += height;
        y += 25;
    
    }
    document.getElementById("snap").disabled = false;
});

//per inizializzare la camera quando la pagina viene caricata
initCamera();