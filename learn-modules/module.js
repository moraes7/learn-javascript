export const serieA = [
    "Athletico-PR",
    "Atlético-GO",
    "Atlético-MG",
    "Bahia",
    "Botafogo",
    "RedBull Bragantino",
    "Corinthians",
    "Criciúma",
    "Cruzeiro",
    "Cuiabá",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Palmeiras",
    "São Paulo",
    "Vasco",
    "Vitória"
]

export function listaTimes(times, elementId) {
    const ul = document.getElementById(elementId);
    times.forEach(times => {
        const li = document.createElement('li');
        li.textContent = times;
        ul.appendChild(li);
    })
};