const GITHUB_ACCESS_TOKEN='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';

function loadNavigation(){
    fetch('nav.html')
    .then(res=> res.text())
    .then(navHtml => {
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', navHtml);
    })
    .catch(err => console.error(err))
}

loadNavigation();