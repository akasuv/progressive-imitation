import "./index.css";

function createLink({label, href, primary=false}) {
    let link = document.createElement('a');
    link.innerText = label;
    link.href = href;

    const mode = primary ? 'link--primary' : 'link-secondary';

    link.classList.add(...['link', mode]);
    return link;
}

export default createLink;
