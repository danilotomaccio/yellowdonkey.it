
const threshold = 15;
let lastX, lastY, lastZ;
let shakeCount = 0;

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', shakeDetection, false);
} else {
    alert("Il tuo browser non supporta l'API Device Motion");
}

function shakeDetection(event) {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    if (lastX === null) {
        lastX = x;
        lastY = y;
        lastZ = z;
        return;
    }

    const deltaX = Math.abs(x - lastX);
    const deltaY = Math.abs(y - lastY);
    const deltaZ = Math.abs(z - lastZ);

    if (deltaX + deltaY + deltaZ > threshold) {
        shakeCount++;
        if (shakeCount > 2) {
            createBubble(50);
            shakeCount = 0;
        }
    } else {
        shakeCount = 0;
    }

    lastX = x;
    lastY = y;
    lastZ = z;
}

function createBubble(numBolle) {
    const bolle = [document.getElementById("bolla")];
    const body = document.body;

    for (let i = 0; i < numBolle; i++) {
        const nuovaBolla = document.getElementById("bolla").cloneNode(true);
        nuovaBolla.style.width = (Math.random() * 50) + "px";
        nuovaBolla.style.height = nuovaBolla.style.width;
        nuovaBolla.style.left = (Math.random() * 100) + "vw";
        nuovaBolla.id = "bolla" + (i + 1);
        body.appendChild(nuovaBolla);
        bolle.push(nuovaBolla);
    }

    bolle.forEach(function (bolla) {
        gsap.to("#" + bolla.id, {
            duration: Math.random() * 2 + 1,
            y: "-1000px",
            opacity: 0.3,
            repeat: 1,
            ease: "linear"
        });
    });
}
