window.faucetsData = [
    {
        id: "freebitco",
        name: "FreeBitco.in",
        type: "faucet",
        trustScore: 4.9,
        bonus: "100% Bonus en tu primer depósito + 4.08% interés anual",
        summary: "La faucet más antigua y confiable del mercado. Ofrece loterías, apuestas y ahorros.",
        referralLink: "https://freebitco.in/?r=8850009",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=FreeBitco.in+Screenshot",
        strategies: "Usa el modo 'Multiply BTC' con la estrategia Martingala suave para maximizar puntos RP.",
        script: "// Script básico para Auto-Roll\nsetInterval(() => {\n  const button = document.querySelector('#free_play_form_button');\n  if (button && button.display !== 'none') button.click();\n}, 600000);",
        reviews: [
            { user: "CriptoJuan", text: "Pagando desde hace años sin fallos.", rating: 5 },
            { user: "Elena_BTC", text: "Muy buena, los intereses son un plus.", rating: 4 }
        ]
    },
    {
        id: "rollercoin",
        name: "RollerCoin",
        type: "mining",
        trustScore: 4.7,
        bonus: "1000 Satoshis Gratis al empezar",
        summary: "Simulador de minería virtual donde juegas mini-juegos para ganar poder de minado real.",
        referralLink: "https://rollercoin.com/?r=mjsn8xfw",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=RollerCoin+Screenshot",
        strategies: "Juega al menos 50 juegos al día para mantener tu PC al máximo nivel (Level 4).",
        script: "N/A - Se recomienda juego manual para evitar ban.",
        reviews: [
            { user: "GamerPro", text: "Divertido y rentable a largo plazo.", rating: 5 },
            { user: "NoobMiner", text: "Tarda en arrancar pero vale la pena.", rating: 4 }
        ]
    },
    {
        id: "faucetcrypto",
        name: "FaucetCrypto",
        type: "ptc",
        trustScore: 4.5,
        bonus: "Bonus de nivel progresivo (hasta +25%)",
        summary: "Multicoin faucet con sistema de RPG y niveles. Muy interactiva.",
        referralLink: "https://faucetcrypto.com/ref/TU_ID", // Falta este link específico en el mensaje del usuario, lo dejamos como recordatorio o placeholder si no lo pasó.
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=FaucetCrypto+Screenshot",
        strategies: "Completa los 'Shortlinks' primero para subir de nivel rápido y ganar más bonus.",
        script: "document.querySelectorAll('.ptc-btn').forEach(b => b.classList.add('highlight'));",
        reviews: [
            { user: "Mario22", text: "Pagos instantáneos a FaucetPay.", rating: 5 }
        ]
    },
    {
        id: "viefaucet",
        name: "Vie Faucet",
        type: "faucet",
        trustScore: 4.9,
        bonus: "Bono diario acumulativo y desafíos de actividad",
        summary: "Una de las faucets mejor valoradas. Múltiples formas de ganar: Faucet (cada 4 min), PTC, Shortlinks y Offerwalls.",
        referralLink: "https://viefaucet.com?r=695319a6a769fff7e0ca7622",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=VieFaucet+Screenshot",
        strategies: "Usa el bono diario cada 24h para multiplicar tus ganancias de la faucet manual.",
        script: "setInterval(() => { console.log('Ready to claim?'); }, 240000);",
        reviews: [
            { user: "ProClaimer", text: "Excelente interfaz y pagos instantáneos.", rating: 5 },
            { user: "CryptoFan", text: "La mejor para Doge y LTC.", rating: 5 }
        ]
    },
    {
        id: "litecoinfarm",
        name: "Litecoin Farm (Alerta)",
        type: "mining",
        trustScore: 1.5,
        bonus: "N/A - ¡CUIDADO!",
        summary: "ATENCIÓN: Múltiples reportes indican que este sitio puede ser un SCAM. Se recomienda NO invertir dinero real.",
        referralLink: "#",
        image: "https://via.placeholder.com/600x400/440000/ffffff?text=ALERTA+RIESGO",
        strategies: "EVITAR este sitio. Mantener los fondos a salvo.",
        script: "N/A",
        reviews: [
            { user: "Victima1", text: "No pagan y piden dinero para retirar.", rating: 1 }
        ]
    },
    {
        id: "easytrx",
        name: "EasyTrx.io",
        type: "faucet",
        trustScore: 4.4,
        bonus: "Reclamos ilimitados de TRX",
        summary: "Plataforma sencilla enfocada en la red Tron. Interfaz limpia y funcional.",
        referralLink: "https://easytrx.io/?ref=plk666",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=EasyTrx+Preview",
        strategies: "Ideal para acumular TRX rápidamente mientras realizas otras tareas.",
        script: "N/A",
        reviews: [
            { user: "TronFan", text: "Simple y cumple lo que promete.", rating: 4 }
        ]
    },
    {
        id: "tronpayu",
        name: "Tronpayu.io",
        type: "faucet",
        trustScore: 4.6,
        bonus: "Bono por referidos y juegos internos",
        summary: "Faucet de Tron confiable con juegos de azar provably fair y buena comunidad.",
        referralLink: "https://tronpayu.io/?ref=plk666",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=Tronpayu+Preview",
        strategies: "Aprovecha los juegos internos con cautela para multiplicar tus ganancias.",
        script: "N/A",
        reviews: [
            { user: "CrypTop", text: "Muy buena para ganar TRX gratis.", rating: 5 }
        ]
    },
    {
        id: "cointiply",
        name: "Cointiply",
        type: "ptc",
        trustScore: 4.9,
        bonus: "Bono de lealtad diario hasta 100%",
        summary: "Probablemente la mejor plataforma de recompensas cripto. Ofertas, encuestas, juegos y una faucet de alta frecuencia.",
        referralLink: "https://cointiply.com/r/X4EJl",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=Cointiply+Preview",
        strategies: "Mantén tu racha diaria para el bono de lealtad. Las encuestas de TheoremReach suelen pagar muy bien.",
        script: "N/A - Recomendamos usar su App oficial.",
        reviews: [
            { user: "ProMiner", text: "He retirado cientos de dólares aquí. Muy confiable.", rating: 5 }
        ]
    },
    {
        id: "keran_usdt",
        name: "Keran USDT",
        type: "faucet",
        trustScore: 4.2,
        bonus: "Reclamos directos de USDT",
        summary: "Faucet sencilla para acumular Tether. Interfaz rápida sin demasiada publicidad invasiva.",
        referralLink: "https://keran.co/index.php?ref=127580",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=Keran+Preview",
        strategies: "Úsalo como complemento a tus otras faucets de USDT.",
        script: "N/A",
        reviews: [
            { user: "TetherFan", text: "Pagos directos a FaucetPay.", rating: 4 }
        ]
    },
    {
        id: "bestchange_faucet",
        name: "BestChange Faucet",
        type: "faucet",
        trustScore: 5.0,
        bonus: "Bitcoin gratis cada 60 minutos",
        summary: "El monitor de exchanges más famoso tiene su propia faucet de BTC. 100% confiable y legendario.",
        referralLink: "https://www.bestchange.com/",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=BestChange+Preview",
        strategies: "Es un reclamo rápido, ideal para visitarlo cada vez que cambies de pestaña.",
        script: "N/A",
        reviews: [
            { user: "OldSchool", text: "Llevan años pagando, es un clásico.", rating: 5 }
        ]
    },
    {
        id: "doge_bank",
        name: "DogeBank",
        type: "faucet",
        trustScore: 4.0,
        bonus: "Bonos diarios de Dogecoin",
        summary: "Plataforma enfocada en Dogecoin con sistema de bonificaciones por actividad y reclamos periódicos.",
        referralLink: "https://doge-bank.pro/p/79721",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=DogeBank+Preview",
        strategies: "Entra a diario para reclamar el bono acumulativo y subir de nivel.",
        script: "N/A",
        reviews: [
            { user: "MuchWow", text: "Simple y divertida para juntar unos Doges.", rating: 4 }
        ]
    },
    {
        id: "faucet_wallet",
        name: "FaucetWallet",
        type: "faucet",
        trustScore: 4.3,
        bonus: "Multi-moneda y grifo rápido",
        summary: "Micro-billetera y faucet que permite recolectar múltiples criptomonedas en un solo lugar.",
        referralLink: "https://faucetwallet.io/",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=FaucetWallet+Preview",
        strategies: "Centraliza tus pequeños reclamos aquí para llegar más rápido al mínimo de retiro.",
        script: "N/A",
        reviews: [
            { user: "CryptoCollector", text: "Muy útil para organizar varias monedas.", rating: 5 }
        ]
    },
    {
        id: "scalevance",
        name: "Scalevance",
        type: "mining",
        trustScore: 3.8,
        bonus: "Minería en la nube gratuita (Simulada)",
        summary: "Simulador de minería que permite generar ganancias pasivas mientras la pestaña está abierta.",
        referralLink: "https://scalevance.com/",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=Scalevance+Preview",
        strategies: "Déjalo abierto en una pestaña secundaria. Reinicia el proceso regularmente para optimizar.",
        script: "N/A",
        reviews: [
            { user: "IdleEarner", text: "Lento pero constante, funciona bien de fondo.", rating: 4 }
        ]
    },
    {
        id: "bnb_doge",
        name: "BNBfaucet Doge",
        type: "faucet",
        trustScore: 4.1,
        bonus: "Doge gratis cada pocos minutos",
        summary: "Faucet clásica de Dogecoin con retiros rápidos a billeteras compatibles.",
        referralLink: "https://bnbminers.site/earn/doge/",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=BNBDoge+Preview",
        strategies: "Combínalo con DogeBank para maximizar tus ganancias en esta moneda.",
        script: "N/A",
        reviews: [
            { user: "DogeLover", text: "Paga bien comparado con otros grifos.", rating: 4 }
        ]
    },
    {
        id: "vipusdt",
        name: "VIPUSDT",
        type: "faucet",
        trustScore: 4.5,
        bonus: "Alto rendimiento en USDT",
        summary: "Plataforma de alta categoría para reclamar y gestionar ganancias en USDT.",
        referralLink: "https://vipusdt.biz/r/422806196",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=VIPUSDT+Preview",
        strategies: "Recomendado para usuarios activos que buscan acumular stablecoins.",
        script: "N/A",
        reviews: [
            { user: "StablePro", text: "Interfaz limpia y pagos fluidos.", rating: 5 }
        ]
    },
    {
        id: "litecoinfarm_online",
        name: "Litecoin Farm Online",
        type: "mining",
        trustScore: 3.5,
        bonus: "Bonos por registro y minería activa",
        summary: "Versión alternativa de Litecoin Farm. Aunque tiene apariencia dudosa, el usuario reporta que permite retiros.",
        referralLink: "https://litecoinfarm.online/index.php?ref=332667",
        image: "https://via.placeholder.com/600x400/0a0b10/00ff88?text=LitecoinFarm+Online",
        strategies: "Usa la versión gratuita y retira lo acumulado regularmente. Prudencia con las inversiones.",
        script: "N/A",
        reviews: [
            { user: "User1", text: "Retirando sin problemas por ahora.", rating: 4 }
        ]
    }
];
