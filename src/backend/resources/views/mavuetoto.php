<h1>Bonjour <?= $name ?></h1>

<p>Le chiffre est: <?= $chiffre; ?></p>

<a href="">Alle vers la page toto ( oui, on y est déjà mais c'est pour l'exemple...)</a>

<a href="<?= route('test') ?>">Lien vers la route "test"</a>
<?php

// Si notre fichier était mavue.blade.php (moteur de template blade) on pourrait afficher $name avec {{ $name }}
