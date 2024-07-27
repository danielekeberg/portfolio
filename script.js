document.getElementById('copyButton').addEventListener('click', function() {
    var email = 'danieleke@live.no';
    navigator.clipboard.writeText(email).then(function() {
        customAlert('Email address copied to clipboard!');
    }).catch(function(error) {
        customAlert('Failed to copy email address: ' + error);
    });
});

document.getElementById('emailButton').addEventListener('click', function() {
    var email = 'danieleke@live.no';
    var subject = 'Portfolio';
    var body = 'Please hire me 🥺';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

function customAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'flex';
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
}