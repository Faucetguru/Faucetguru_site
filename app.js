const faucets = window.faucetsData;

const faucetList = document.getElementById('faucet-list');
const faucetDetail = document.getElementById('faucet-detail');
const hero = document.getElementById('hero');
const navBtns = document.querySelectorAll('.nav-btn');

function init() {
    renderList(faucets);
    setupEventListeners();
}

function renderList(data) {
    faucetList.innerHTML = '';
    data.forEach(faucet => {
        const card = document.createElement('div');
        card.className = 'faucet-card';
        card.innerHTML = `
            <span class="card-tag">${faucet.type}</span>
            <h3 class="card-title">${faucet.name}</h3>
            <div class="trust-badge">
                <span class="rating-stars">${'★'.repeat(Math.floor(faucet.trustScore))}</span>
                <span>${faucet.trustScore}</span>
            </div>
            <div class="card-bonus">${faucet.bonus}</div>
            <p style="color: var(--text-dim); font-size: 0.9rem;">${faucet.summary.substring(0, 80)}...</p>
        `;
        card.onclick = () => showDetail(faucet);
        faucetList.appendChild(card);
    });
}

function showDetail(faucet) {
    hero.classList.add('hidden');
    faucetList.classList.add('hidden');
    faucetDetail.classList.remove('hidden');

    faucetDetail.innerHTML = `
        <button class="back-btn" id="back-to-list">← Volver al listado</button>
        <div class="detail-header">
            <div class="detail-info">
                <span class="card-tag">${faucet.type}</span>
                <h2>${faucet.name}</h2>
                <div class="trust-badge">
                    <span class="rating-stars" style="font-size: 1.5rem;">${'★'.repeat(Math.floor(faucet.trustScore))}</span>
                    <span style="font-size: 1.5rem;">${faucet.trustScore} / 5</span>
                </div>
                <p>${faucet.summary}</p>
                <div class="card-bonus" style="margin-top: 20px;">
                    <strong>BONUS EXCLUSIVO:</strong> ${faucet.bonus}
                </div>
                <a href="${faucet.referralLink}" target="_blank" class="cta-btn">¡Regístrate y Gana Ahora!</a>
            </div>
            <div class="screenshot-container">
                <img src="${faucet.image}" alt="${faucet.name}" style="width:100%; height:100%; object-fit: cover; border-radius: 20px;">
            </div>
        </div>

        <div class="strategy-section">
            <h3>Estrategia Recomendada</h3>
            <p>${faucet.strategies}</p>
            ${faucet.script !== 'N/A' ? `
                <h4 style="margin-top: 20px;">Script / Código Útil:</h4>
                <pre><code>${faucet.script}</code></pre>
            ` : ''}
        </div>

        <div style="margin-top: 40px;">
            <h3>Opiniones de Usuarios</h3>
            ${faucet.reviews.map(r => `
                <div style="background: var(--bg-card); padding: 15px; border-radius: 10px; margin-top: 10px;">
                    <strong>${r.user}</strong> <span style="color: gold;">${'★'.repeat(r.rating)}</span>
                    <p style="color: var(--text-dim);">${r.text}</p>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('back-to-list').onclick = () => {
        faucetDetail.classList.add('hidden');
        hero.classList.remove('hidden');
        faucetList.classList.remove('hidden');
    };
}

function setupEventListeners() {
    navBtns.forEach(btn => {
        btn.onclick = () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            const filteredData = filter === 'all' ? faucets : faucets.filter(f => f.type === filter);
            renderList(filteredData);

            // Si estamos en detalle, volver al listado
            faucetDetail.classList.add('hidden');
            hero.classList.remove('hidden');
            faucetList.classList.remove('hidden');
        };
    });

    document.getElementById('home-link').onclick = () => {
        location.reload();
    };

    document.getElementById('blog-link').onclick = () => {
        showBlog();
    };
}

function showBlog() {
    hero.classList.add('hidden');
    faucetList.classList.add('hidden');
    faucetDetail.classList.remove('hidden');

    faucetDetail.innerHTML = `
        <button class="back-btn" id="back-to-list-blog">← Volver al listado</button>
        <div class="strategy-section" style="text-align: center; padding: 100px 20px;">
            <h2 style="font-size: 3rem; margin-bottom: 20px;">Blog Faucet Guru</h2>
            <p style="font-size: 1.2rem; color: var(--text-dim);">Próximamente: Las mejores estrategias, noticias del mundo cripto y tutoriales paso a paso.</p>
            <div style="margin-top: 40px; opacity: 0.5; font-size: 5rem;">✍️</div>
        </div>
    `;

    document.getElementById('back-to-list-blog').onclick = () => {
        faucetDetail.classList.add('hidden');
        hero.classList.remove('hidden');
        faucetList.classList.remove('hidden');
    };
}

init();
