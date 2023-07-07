
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
            createBubbles(50);
            shakeCount = 0;
        }
    } else {
        shakeCount = 0;
    }

    lastX = x;
    lastY = y;
    lastZ = z;
}

function createBubbles(numBolle) {
    const bolleShake = [];
    const body = document.body;

    for (let i = 0; i < numBolle; i++) {
        const nuovaBolla = document.getElementById("bolla").cloneNode(true);
        nuovaBolla.style.width = (Math.random() * 50) + "px";
        nuovaBolla.style.height = nuovaBolla.style.width;
        nuovaBolla.style.left = (Math.random() * 100) + "vw";
        nuovaBolla.id = "bollaShake" + (i + 1);
        body.appendChild(nuovaBolla);
        bolleShake.push(nuovaBolla);
    }

    bolleShake.forEach(function (bolla) {
        gsap.to("#" + bolla.id, {
            duration: Math.random() * 2 + 1,
            y: "-1000px",
            opacity: 0,
            repeat: 1,
            ease: "linear",
            onComplete: function() {
                body.removeChild(bolla);
            }
        });
    });

    bolleShake.length = 0;
}
