document.getElementById('copyButton').addEventListener('click', function() {
    var email = 'danieleke@live.no';
    navigator.clipboard.writeText(email).then(function() {
        alert('Email address copied to clipboard!');
    }).catch(function(error) {
        alert('Failed to copy email address: ', error);
    });
});

document.getElementById('emailButton').addEventListener('click', function() {
    var email = 'danieleke@live.no';
    var subject = 'Portfolio';
    var body = 'Please hire me 🥺';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});