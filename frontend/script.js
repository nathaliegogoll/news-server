const addElement = async () => {
    const response = await fetch('http://localhost:3000');
    const articles = await response.json();

    const a = document.getElementById("list-container");
    var loading = document.getElementById("loading");
    a.removeChild(loading);

    articles.forEach(e => {
        const newListItem = document.createElement("li");
        const newLink = document.createElement('a')
        newLink.setAttribute('href', e.link);
        newLink.setAttribute('target', '_blank')
        newLink.textContent = e.title;
    
        newListItem.appendChild(newLink);

        const currentDiv = document.getElementById("list-container");
        currentDiv.append(newListItem);
    })  
}

addElement();