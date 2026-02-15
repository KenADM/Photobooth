const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const context = canvas.getContext('2d');

// richiedo accesso alla camera
async function initCamera() { 
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
    } catch (e) {
        console.error("Error accessing camera: ", e);
    }
}

// scatto la foto
snap.addEventListener('click', () => {
    context.drawImage(video, 0, 0, 640, 480);
});

//per inizializzare la camera quando la pagina viene caricata
initCamera();