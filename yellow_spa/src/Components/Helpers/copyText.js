export function copyText(text){
    function handler (event){
    event.clipboardData.setData('text/plain', text);
    event.preventDefault()
    document.removeEventListener('copy', handler, true) // remove handler to prevent memory leaks
}
document.addEventListener('copy', handler, true);
document.execCommand('copy');
}