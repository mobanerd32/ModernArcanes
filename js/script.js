const header = document.createElement('template');
const footer = document.createElement('template');

header.innerHTML = `
<header>
<nav>
    <div class="wrapper">
        <p class="logo"><a href="index.html">MA</a></p>
        <ul>
            <li><a href="nouvelle.html">Nouvelles</a></li>
            <li><a href="faction.html">Les factions</a></li>
            <li><a href="Magasin.html">Magasin</a></li>
            <li><a href="">Notre équipe</a></li>
        </ul>
        <a href="download.html"><button>Télécharger</button></a>
    </div>
</nav>
</header>
`;

footer.innerHTML = `
<footer>
<div class="wrapper">
    <nav>
        <ul class="premierFooter">
            <li><a href="nouvelle.html">Nouvelles</a></li>
            <li><a href="faction.html">Les factions</a></li>
            <li><a href="">Nous contacter</a></li>
            <li class="logo">MA</li>
            <li><a href="magasin.html">magasin</a></li>
            <li><a href="">Notre équipe</a></li>
            <li><a href="">Rejoindre l’équipe</a></li>
        </ul>
        <ul class="copyright">
            <li>© 2019 — 2020</li>
            <li>Vie privé — Nétiquette</li>
        </ul>
    </nav>
</div>
</footer>
`;

document.body.prepend(header.content);
document.body.append(footer.content);