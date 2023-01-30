const header = document.createElement('template');
const footer = document.createElement('template');

header.innerHTML = `
<header>
<nav>
    <div class="wrapper">
        <p class="logo">MA</p>
        <ul>
            <li><a href="#nouvelle">Nouvelles</a></li>
            <li><a href="#faction">Les factions</a></li>
            <li><a href="">Magasin</a></li>
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
        <ul>
            <li>Nouvelles</li>
            <li>Les factions</li>
            <li>Nous contacter</li>
            <li class="logo">MA</li>
            <li>magasin</li>
            <li>Notre équipe</li>
            <li>Rejoindre l’équipe</li>
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