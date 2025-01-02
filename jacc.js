
// Fonction pour animer les chiffres
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // Valeur cible
        const current = +counter.innerText; // Valeur actuelle
        const increment = target / 100; // Vitesse de l'animation

        if (current < target) {
            counter.innerText = Math.ceil(current + increment); // Incrémenter
            setTimeout(updateCount, 20); // Rafraîchir toutes les 20ms
        } else {
            counter.innerText = target; // S'assurer d'afficher la cible exacte
        }
    };

    updateCount();
});

document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.querySelector('.map-container');
    const mapImage = document.querySelector('.map-image');
    const mapOverlay = document.querySelector('.map-overlay');

    // Animation dynamique au survol
    mapContainer.addEventListener('mousemove', (e) => {
        const rect = mapContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mapImage.style.transform = `scale(1.05) perspective(500px) rotateX(${(y - rect.height/2) / 20}deg) rotateY(${-(x - rect.width/2) / 20}deg)`;
    });

    mapContainer.addEventListener('mouseleave', () => {
        mapImage.style.transform = 'scale(1) perspective(500px) rotateX(0) rotateY(0)';
    });
});

function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    // Compteurs animés avec données vérifiées
    animateCounter(document.getElementById('researchersCount'), 0, 8900000, 2000);
    animateCounter(document.getElementById('publicationsCount'), 0, 2500000, 2000);
    animateCounter(document.getElementById('computationPower'), 0, 1200, 2000);

    // Graphique des investissements R&D
    const ctx = document.getElementById('researchInvestmentChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['USA', 'Chine', 'Japon', 'Allemagne', 'Corée du Sud'],
            datasets: [{
                label: 'Investissement R&D (Milliards $)',
                data: [582, 441, 170, 132, 88],
                backgroundColor: [
                    'rgba(44, 62, 80, 0.7)', 
                    'rgba(52, 152, 219, 0.7)', 
                    'rgba(231, 76, 60, 0.7)', 
                    'rgba(46, 204, 113, 0.7)', 
                    'rgba(241, 196, 15, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Investissements Mondiaux en Recherche et Développement'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Milliards de Dollars'
                    }
                }
            }
        }
    });
});

const container = document.querySelector('.containertt');
const body = document.body;

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // 3D Tilt Effect
  const rotateX = -(y - rect.height / 2) / 20;
  const rotateY = (x - rect.width / 2) / 20;

  container.style.transform = `
    perspective(1000px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    scale(1.02)
  `;
});

container.addEventListener('mouseleave', () => {
  container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
});


(function() {
    var equations = [
        {
            name: " Maxwell-Gauss",
            symbol: "∇ · E = ρ / ε₀",
            description: "Relation entre le champ électrique et la densité de charge (THEOREME DE GAUSS). ",
            details: "Mesure la distribution des charges électriques dans l'espace"
        },
        {
            name: "Mawxell-Flux", 
            symbol: "∇ · B = 0",
            description: "Absence de monopoles magnétiques (FLUX CONSERVATIF).",
            details: " Montre que les lignes de champ magnétique sont toujours fermées"
        },
        {
            name: "Maxwell-Faraday",
            symbol: "∇ × E = -∂B/∂t",
            description: "Induction électromagnétique (LOI DE FARADAY). ",
            details: "Explique comment un champ magnétique changeant induit un champ électrique"
        },
        {
            name: "Maxwell-Ampère",
            symbol: "∇ × B = μ₀(J + ε₀ ∂E/∂t)",
            description: "Relation entre champs électriques et magnétiques (THEOREME D'AMPERE). ",
            details: "Décrit comment les courants électriques et les champs électriques variables génèrent des champs magnétiques"
        }
    ];

    var container = document.getElementById('equations-container');

    equations.forEach(function(eq) {
        var card = document.createElement('div');
        card.className = 'equation-card';
        card.innerHTML = 
            '<h4>' + eq.name + '</h4>' +
            '<div class="equation-symbol">' + eq.symbol + '</div>' +
            '<p class="equation-description">' + eq.description + '</p>' +
            '<div class="equation-details">' +
            '    <h3>Détails</h3>' +
            '    <p>' + eq.details + '</p>' +
            '</div>';

        card.addEventListener('click', function() {
            card.classList.toggle('active');
        });

        container.appendChild(card);
    });
})();