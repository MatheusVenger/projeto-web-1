function searchItem() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const itemList = document.getElementById('itemList');
    const itens = itemList.getElementsByClassName('item');

    for (let i = 0; i < itens.length; i++) {
        const name = itens[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (name.includes(input)) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
}
