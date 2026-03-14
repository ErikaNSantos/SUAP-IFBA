// Dicionário de tradução baseado no Guia de Matrícula IFBA
const MAPA_HORARIOS = {
    dias: { '2': 'Segunda', '3': 'Terça', '4': 'Quarta', '5': 'Quinta', '6': 'Sexta', '7': 'Sábado' },
    periodos: {
        '1': '07:00', '2': '07:50', '3': '08:40', '4': '09:30', '5': '10:40', '6': '11:30', // Manhã
        '7': '13:20', '8': '14:10', '9': '15:20', '10': '16:10', '11': '17:00', '12': '17:50', // Tarde
        '13': '18:40', '14': '19:30', '15': '20:20', '16': '21:10' // Noite
    }
};

function traduzirCodigo(codigo) {
    const regex = /^([2-7])([MVN])(\d+)$/;
    const match = codigo.match(regex);
    
    if (!match) return codigo;

    const [_, dia, turno, periodosStr] = match;
    const periodos = periodosStr.match(/.{1,2}/g) || []; // Divide em pares (13, 14...)
    
    const nomeDia = MAPA_HORARIOS.dias[dia];
    const horarios = periodos.map(p => MAPA_HORARIOS.periodos[p]).join(' | ');
    
    return `${nomeDia}: ${horarios}`;
}

// 1. Tradução e Melhoria Visual
function processarTabelaMatricula() {
    const celulas = document.querySelectorAll('td');
    let cargaHorariaTotal = 0;

    celulas.forEach(td => {
        const texto = td.innerText.trim();
        
        // Traduz códigos de horário
        if (/^[2-7][MVN]\d+$/.test(texto)) {
            td.innerHTML = `<span class="badge-horario" title="${texto}">${traduzirCodigo(texto)}</span>`;
        }

        // 2. Termômetro de Vagas (Lógica de Procura/Vagas)
        if (texto.includes('/') && td.cellIndex > 3) {
            const partes = texto.split('/');
            if (partes.length >= 2) {
                const vagas = parseInt(partes[0]);
                const pedidos = parseInt(partes[1]);
                const ratio = (pedidos / vagas) * 100;
                
                td.innerHTML += `<div class="termometro-container">
                    <div class="termometro-bar" style="width: ${Math.min(ratio, 100)}%; background: ${ratio > 90 ? '#ff4d4d' : '#4caf50'}"></div>
                </div>`;
            }
        }

        // 3. Soma de Carga Horária (Ex: "60h")
        if (texto.toLowerCase().endsWith('h') && !isNaN(parseInt(texto))) {
            cargaHorariaTotal += parseInt(texto);
        }
    });

    atualizarResumoCarga(cargaHorariaTotal);
}

// Injeta um painel flutuante com o total de horas
async function atualizarResumoCarga(totalSelecionado) {
    // Busca a meta definida pelo usuário, padrão 3000h se não existir
    const data = await chrome.storage.sync.get(['metaHoras']);
    const metaTotal = data.metaHoras || 3000;

    let painel = document.getElementById('extensao-resumo');
    if (!painel) {
        painel = document.createElement('div');
        painel.id = 'extensao-resumo';
        document.body.appendChild(painel);
    }

    const progressoSemestre = ((totalSelecionado / metaTotal) * 100).toFixed(2);

    painel.innerHTML = `
        <strong>Resumo da Matrícula</strong><br>
        Selecionado: ${totalSelecionado}h<br>
        <small>Meta do Curso: ${metaTotal}h</small><br>
        <div class="barra-progresso-container">
            <div class="barra-progresso-fill" style="width: ${Math.min(progressoSemestre, 100)}%"></div>
        </div>
        <small>${progressoSemestre}% da carga total</small>
    `;
}

// Observador para carregar quando o SUAP mudar a página via AJAX
const observer = new MutationObserver(() => processarTabelaMatricula());
observer.observe(document.body, { childList: true, subtree: true });