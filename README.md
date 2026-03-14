# SUAP+ IFBA: Matrícula Inteligente 🌿

O **SUAP+ IFBA** é uma extensão de navegador (Manifest V3) desenvolvida para facilitar a vida dos estudantes do IFBA (especialmente do Campus Salvador) durante o período de matrícula. Ela traduz os códigos complexos do SUAP para uma interface legível e ajuda no controle da carga horária do semestre.

---

### 🧐 O Problema
O sistema SUAP utiliza códigos de horários como `2N1314` ou `3V789` que são difíceis de interpretar rapidamente. Além disso, o estudante precisa calcular manualmente se as matérias selecionadas atingem a carga horária necessária do seu Projeto Pedagógico de Curso (PPC).

### ✨ A Solução
Esta extensão atua diretamente na página de matrícula do SUAP, injetando funcionalidades que:
* **Traduzem horários:** `3N1314` vira **"Terça (Noite) - 18:40 | 19:30"**.
* **Somam Carga Horária:** Calcula automaticamente o total de horas (ex: 360h) das matérias que você selecionou.
* **Monitoram o Progresso:** Exibe uma barra de progresso baseada na meta total do seu curso.
* **Termômetro de Vagas:** Mostra visualmente a relação entre vagas e pedidos para evitar filas desnecessárias.

---

### 🚀 Funcionalidades Principais

* **Tradução Universal:** Funciona para os turnos Matutino (M), Vespertino (V) e Noturno (N).
* **PPC Configurável:** Através do ícone da extensão, você define a meta de horas do seu curso (ex: 3215h para Licenciatura em Geografia).
* **Privacidade:** Nenhum dado sai do seu navegador. As configurações são salvas no seu `chrome.storage` local.
* **Interface Nativa:** Os elementos são estilizados para parecerem parte do sistema original do IFBA.

---

### ⚙️ Como Instalar (Manual)

Como a extensão é focada na comunidade acadêmica, a instalação é feita via Modo de Desenvolvedor:

1.  **Baixe este repositório** (Clique em `Code > Download ZIP`) e extraia a pasta.
2.  Abra o seu navegador (Chrome, Edge ou Brave) e vá para `chrome://extensions`.
3.  Ative a chave **"Modo do desenvolvedor"** no canto superior direito.
4.  Clique em **"Carregar sem compactação"**.
5.  Selecione a pasta onde você extraiu os arquivos da extensão.

---

### 💻 Estrutura do Repositório

```text
SUAP-Plus/
├── docs/             # Os documentos utilizados para estruturar esse plugin
├── icons/            # Ícones em PNG (16px, 48px, 128px)
├── src/
│   ├── content.js    # Script que modifica a página do SUAP
│   ├── popup.js      # Lógica para salvar a meta de horas
│   ├── popup.html    # Interface de configuração
│   └── style.css     # Estilização dos componentes injetados
├── manifest.json     # Arquivo de configuração da extensão
└── README.md         # Documentação
```
## 🤝 Como Contribuir

Achou um código de horário que não foi traduzido? Tem uma ideia para melhorar o cálculo de **ACEX** ou **Estágio**? Toda ajuda é bem-vinda!

1.  **Faça um Fork** do projeto.
2.  **Crie uma Branch** para sua modificação:
    ```bash
    git checkout -b feature/nova-melhoria
    ```
3.  **Abra um Pull Request** detalhando as alterações.

---

## ⚖️ Licença e Aviso Legal

Este projeto está sob a licença **MIT**.

> [!IMPORTANT]
> **Esta extensão não é uma ferramenta oficial do IFBA.** Ela foi desenvolvida de forma independente por estudantes para auxiliar a comunidade acadêmica. Use com responsabilidade e **sempre confira os dados oficiais no SUAP** antes de confirmar sua matrícula.

---
<p align="center">Desenvolvido com ❤️ para os estudantes do IFBA.</p>
