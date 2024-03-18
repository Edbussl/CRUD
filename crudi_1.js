// Array para armazenar os itens
let items = [];

// Função para adicionar um item
function addItem(text) {
    const item = { id: Date.now(), text };
    items.push(item);
    updateList();
}

// Função para remover um item
function removeItem(id) {
    items = items.filter(item => item.id !== id);
    updateList();
}

// Função para atualizar a lista na interface do usuário
function updateList() {
    const list = document.getElementById('item-list');
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.addEventListener('click', () => {
            removeItem(item.id);
        });
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

// Função para lidar com o envio do formulário
document.getElementById('crud-form').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('item-input');
    const text = input.value.trim();
    if (text !== '') {
        addItem(text);
        input.value = '';
    }
});

// Inicializa a lista
updateList();
