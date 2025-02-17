document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("terminal-input");

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = input.value.trim().toLowerCase();

            // Pārbaudām komandu un atveram atbilstošo lapu
            if (command === 'sudo cd open page-1') {
                window.location.href = "page-1.html";
            } else if (command === 'sudo cd open page-2') {
                window.location.href = "page-2.html";
            } else if (command === 'sudo cd open page-3') {
                window.location.href = "page-3.html";
            } else if (command === 'sudo cd open page-4') {
                window.location.href = "page-4.html";
            } else if (command === 'sudo cd open page-5') {
                window.location.href = "page-5.html";
            } else if (command === 'sudo cd open page-6') {
                window.location.href = "page-6.html";
            } else if (command === 'sudo cd open page-gallery') {
                window.location.href = "gallery.html";
            } else if (command === 'sudo cd open page-home') {
                window.location.href = "index.html";
            }   else {
                alert("Unknown command! Try: sudo cd open page-1");
            }

            input.value = ""; // Notīra ievades lauku
        }
    });
});
