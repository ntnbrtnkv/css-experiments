import './style.scss';

const el = document.getElementById('text');
if (el) {
    el.innerText = new URLSearchParams(location.search).get('text') || 'Try adding "?text=hello" in url';
}
