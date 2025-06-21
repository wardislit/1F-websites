function togglePanel() {
    const panel = document.getElementById('panel');
    panel.classList.toggle('show');
}

function togglePayPanel() {
    const panel = document.getElementById('payment-panel');
    panel.classList.toggle('show');
}

function successPayPanel() {
    togglePanel();
    togglePayPanel();
    const panel = document.getElementById('success-panel');
    panel.classList.toggle('show');
    setTimeout(function() {
        location.reload();
    }, 2000); 
}