const btn = document.getElementById('btn');
const input = document.getElementById('horas');

// Carrega valor atual
chrome.storage.sync.get(['metaHoras'], (res) => {
    if (res.metaHoras) input.value = res.metaHoras;
});

btn.onclick = () => {
    const val = parseInt(input.value);
    if (val) {
        chrome.storage.sync.set({ metaHoras: val }, () => {
            btn.innerText = "Guardado!";
            setTimeout(() => btn.innerText = "Guardar", 2000);
        });
    }
};