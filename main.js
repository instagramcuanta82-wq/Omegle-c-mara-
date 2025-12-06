async function startCamera() {
    const video = document.getElementById("local");
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
    } catch (err) {
        console.error("Error al activar la cámara:", err);
        alert("No se pudo activar la cámara.");
    }
}

startCamera();
