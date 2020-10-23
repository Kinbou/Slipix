-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 21 oct. 2020 à 18:55
-- Version du serveur :  10.3.24-MariaDB
-- Version de PHP : 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `eran7268_slipix`
--

-- --------------------------------------------------------

--
-- Structure de la table `lanes`
--

CREATE TABLE `lanes` (
  `id` int(11) NOT NULL,
  `lane` varchar(20) NOT NULL,
  `nameChampion` varchar(50) NOT NULL,
  `intro` varchar(200) NOT NULL,
  `champion_id` int(11) NOT NULL,
  `competence_id` int(11) NOT NULL,
  `strength` varchar(1000) NOT NULL,
  `weakness` varchar(1000) NOT NULL,
  `youtube_id` varchar(50) NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lanes`
--

INSERT INTO `lanes` (`id`, `lane`, `nameChampion`, `intro`, `champion_id`, `competence_id`, `strength`, `weakness`, `youtube_id`, `actif`, `created_at`, `updated_at`) VALUES
(1, 'jungle', 'zac', 'Zac est un jungler tank très polyvalent qui une fois totalement maitrisé, peut être redoutable dans vos games !', 1, 1, 'Très fort pour gank\r\n| Beaucoup de cc (contrôle de foule)\r\n| Grosse engage de teamfights\r\n| Champion jamais inutile, même en retard\r\n| Bon dégâts juste avec un Liandry', 'Trop long pour les objectifs (drake, Herald, Nashor)\r\n| Faible duelliste contre d\'autres junglers\r\n| Pas bon en afk farming\r\n| Besoin d\'une bonne vision pour les engages', '1', 1, '2020-07-29 18:07:27', NULL),
(2, 'jungle', 'olaf', 'Olaf est un jungler bruiser qui fera passer les autres guerriers pour des magiciens', 2, 2, 'Un excellent Early/Mid game\r\n| Farm très rapidement la jungle\r\n| Très bon duelliste contre d\'autres junglers\r\n| Counter les compositions avec beaucoup de cc (contrôle de foule)\r\n| Rapide pour les objectifs', 'Le Q Spell pas facile à prendre en mains\r\n| S\'épuise en fin de partie même si très bien dans la game\r\n| Très sensible contre de la mobilité/dash\r\n| Dépendant d\'un très bon early game pour carry', '2', 1, '2020-07-29 18:41:54', NULL),
(3, 'jungle', 'ekko', 'Ekko est un jungle assassin qui fera tourner la tête de vos adversaires !', 3, 3, 'Beaucoup de mobilité\r\n| Très bon Mid/Late Game\r\n| Capable de se repositionner avec l\'ultime\r\n| Bon pour Gank avec le Z et le E\r\n| Le combo Zhonya + Ultime redoutable en teamfight pour temporiser', 'Faible en Early Game\r\n| Champion prévisible donc pas facil epour engage un teamfight\r\n| Pas simple de placer l\'ultime pour les dégats\r\n| Sensible contre les compositions avec des cc (Contrôle de Foule)\r\n| Pas bon en afk farming', '3', 1, '2020-07-30 20:56:28', NULL),
(4, 'jungle', 'lee-sin', 'Lee Sin est un jungler très plaisant à jouer mais qui demande beaucoup de maîtrise', 4, 4, 'Un excellent Early/Mid Game\r\n| Bon duelliste contre d\'autres junglers\r\n| S\'adapte avec et contre toutes les compositions\r\n| Peu se jouer tanky, bruiser ou assassin\r\n| Grande mobilité', 'Très long à maitriser (combos, insec, gestion de l\'ultime)\r\n| S\'épuise en fin de partie même si très bien dans la game\r\n| Dépendant d\'un très bon early game pour carry\r\n| Doit être spam pour bien progresser (si possible OTP)', '4', 1, '2020-07-30 21:02:46', NULL),
(5, 'jungle', 'gragas', 'Gragas est un jungler polyvalent qui aime rentrer dans le tas', 5, 5, ' Bon farm dans la jungle\r\n| Très bon gank en général\r\n| Très polyvalent en TeamFight ( engage, disengage)\r\n| peu se jouer tanky ou full Ap assassin\r\n| Aucun moment faible (early game, mid game, late game)', ' Pas un bon duelliste contre d\'autres junglers\r\n| Très long à maitriser ( combos, gestion de l\'ultime )\r\n| Très dépendant du flash en teamfights\r\n| beaucoup de combos durs à réaliser\r\n| Lent pour les objectifs neutre (drake, herals, nashor)', '5', 0, '2020-07-30 21:06:21', NULL),
(6, 'jungle', 'hecarim', 'Hécarim est le cavalier fantomatique de la faille !', 6, 6, 'Très bonne mobilité\r\n| Gros Early-mid game\r\n| Une force d\'engage devastatrice\r\n| Peut se jouer assassin ou bruiser\r\n| Très bon clear de jungle', 'Sensible aux ralentissements \r\n| S\'épuise fortement en late game\r\n| Une fois derrière impossible de comeback\r\n| Beaucoup de mauvais match-up dans la jungle', '6', 1, '2020-07-30 21:11:34', NULL),
(7, 'toplane', 'volibear', 'VOLIBEAR EST LE DIEU FOUDROYANT DE LA TOPLANE !', 7, 7, 'Dégâts hybride (Physique et Magique)\r\n| Polyvalent (Pas de temps faible)\r\n| Très bonne phase de lane\r\n| Possibilité de dive avec l\'ultime\r\n| Peu de mauvais match-up', 'Sensible au kiting\r\n| Faible capacité d\'engage\r\n| Champion très prévisible\r\n| Les animations des sorts sont lentes (facile à outplay)', '7', 1, '2020-07-31 09:21:38', NULL),
(8, 'toplane', 'pantheon', 'Pantheon est le bruiser spartiate de la faille !', 8, 8, 'Un des meilleurs early game du jeu\r\n| Très peu de mauvais match-up\r\n| Capacité de roaming avec l\'ultime\r\n| Le E redoutable quand bien utilisé en teamfight\r\n| Possibilité d\'être joué mid/top\r\n| Grande force de dive via le Z et le E', 'Pas très mobile en teamfights\r\n| Se fait outscale par beaucoup de toplaners\r\n| Une fois derrière impossible de revenir dans la game\r\n| Dépendant de son early game\r\n| Le passif des stacks de sorts pas si facile à gérer\r\n| Playstyle agressif obligatoire', '8', 1, '2020-07-31 09:23:35', NULL),
(9, 'toplane', 'rumble', 'RUMBLE EST LE YORDLE FLAMBOYANT DE LA FAILLE !', 9, 9, 'Très bon poke en lane avec le A/E\r\n| Polyvavent au niveau des match-up\r\n| Un des meilleurs ulti à teamfights du jeu\r\n| Fais beaucoup de dégats peu importe la cible (tank, adc, bruiser...)\r\n| Possibilité d\'être joué mid/top', 'Peu de mobilité\r\n| Sensible aux CC quand pas de Zhonya\r\n| L\'ulti demande beaucoup de pratique\r\n| Très compliqué de tenir la lane contre un bruiser quand derrière\r\n| Demande de la CC dans votre équipe pour l\'ulti\r\n| La jauge de surchauffe peu embêter dans certains plays', '9', 1, '2020-07-31 09:33:56', NULL),
(10, 'toplane', 'camille', 'CAMILLE EST LA FEMME CISEAUX DE LA FAILLE !', 10, 10, 'Dégâts BRUT sur le A\r\n| Très bon splitpusher\r\n| Bonne mobilité avec le E et l\'ultime\r\n| Gros mid-late game\r\n| Efficace avec la téléportation', 'Beaucoup de mauvais match-up\r\n| Faible en early game\r\n| Ne brille pas en teamfight\r\n| Très sensible aux contrôles', '10', 1, '2020-07-31 09:38:06', NULL),
(11, 'toplane', 'mordekaiser', 'MORDEKAISER EST UN BRUISER MAGIQUE QUI MAITRISE L\'OCTOGONE !', 11, 11, 'Dégâts magiques sur un bruiser toplane (très rare)\r\n| Très polyvalent contre les autres duellistes\r\n| Peut splitpush et aussi teamfight via son ultime\r\n| Se faire gank n\'est pas un problème à partir du level 6\r\n| Bon push/tenue de lane via le Z', 'Pas de mobilité (kiting pas évident)\r\n| Très compliqué contre les ranges toplane\r\n| Une fois derrière trop dur de revenir dans la game\r\n| très sensible à l\'anti-heal et au casque adaptatif\r\n| De lourds cooldown en early-game\r\n| Ne peut rien faire contre un champion avec une QSS', '11', 1, '2020-07-31 09:40:34', NULL),
(12, 'toplane', 'gnar', 'GNAR LE YORDLE BIPOLAIRE ! ', 12, 12, 'Bonne phase de lane\r\n| Bon Teamfight avec l\'ultime\r\n| Possibilité full tank ou stuff 1v1\r\n| Flash + ultime redoutable', 'La jauge de Mega gnar pas facile à gérer\r\n| Doit bien gérer le E car lourd cooldown pour les ganks\r\n| Polyvalent mais n\'excelle pas en split ou en teamfight', '12', 1, '2020-07-31 09:42:09', NULL),
(13, 'toplane', 'kled', 'KLED LE FURIEUX DE LA TOPLANE ! ', 13, 14, 'Des dégâts en % de PV MAX\r\n| De l\'anti heal sur le A\r\n| Un snowball très puissant\r\n| Bonne mobilité\r\n| L\'ultime très bon en teamfight', 'Très dépendant de toucher le A\r\n| N\'excelle pas en teamfight\r\n| Pas de regen en lane\r\n| certains match-up sont très compliqués', '13', 1, '2020-07-31 09:46:36', NULL),
(14, 'toplane', 'vladimir', 'VLADIMIR LE VAMPIRE DE LA FAILLE ! ', 14, 15, 'Beaucoup de sustain\r\n| GrosseTemporisation avec le Z + Zhonya \r\n| Un des meilleurs late game du jeu\r\n| Dégâts de zone en teamfight', 'Un early-game très fragile\r\n| Sensible à l\'anti-heal\r\n| De lourds cooldown en early-game\r\n| Dépendant du flash en teamfight', '14', 1, '2020-07-31 09:48:36', NULL),
(15, 'midlane', 'lux', 'LUX EST LA DAME LUMIERE PAR EXCELLENCE ! ', 15, 16, 'Une cage sur 2 champions\r\n| Un ultime avec très peu de cooldown\r\n| Bonne portée\r\n| Très dure à tomber avec barrière\r\n| Waveclear correct', 'De lourds cooldown en early-game\r\n| Très dépendant de toucher le A\r\n| Champions très prévisible\r\n| Pas de mobilité/escape', '15', 1, '2020-07-31 09:50:15', NULL),
(16, 'midlane', 'zed', 'ZED LE NARUTO DE LA FAILLE ! ', 16, 17, ' Bon poke en lane\r\n| Pas de mana\r\n| Un excellent early/mid game\r\n| Peut splitpush au level 16\r\n| Bon roaming\r\n| Très plaisant à jouer', ' Très faible contre de l\'armure\r\n| L\'exhaust est un gros counter\r\n| Le Zhonya est un gros counter\r\n| Certains match-up très compliqués\r\n| Demande beaucoup de games', '16', 1, '2020-07-31 18:21:23', NULL),
(17, 'midlane', 'leblanc', 'LEBLANC LA MANIPULATRICE DE LA FAILLE ! ', 17, 18, ' Très grande mobilité\r\n| Roaming excellent\r\n| Bon scaling\r\n| Un burst impressionant ', ' Banshee est un gros counter\r\n| Manteau de la nuit est un gros counter\r\n| Les CC annulent le Z de Leblanc\r\n| Très manavore en early-game\r\n| Pas facile en teamfight', '17', 1, '2020-07-31 19:02:50', NULL),
(18, 'midlane', 'ryze', 'RYZE LE MAGE AUX 1000 REWORKS ! ', 18, 19, ' Bon push/depush\r\n| Un des meilleurs mage late game\r\n| Tanky avec le stuff (Séculaire/Seraphin)\r\n| Des dégâts de zone\r\n| Jouable mid/top', ' Peu de mobilité\r\n| L\'ultime pas facile à prendre en mains\r\n| Peu de dégâts en early-game\r\n| Sensible aux ganks\r\n| Positionnement pas facile', '18', 1, '2020-07-31 19:20:10', NULL),
(19, 'midlane', 'ahri', 'AHRI LA KITSUNE DE LA FAILLE ! ', 19, 20, ' Bonne phase de lane\r\n| Le mélange entre un mage/assassin\r\n| Bonne mobilité avec l\'ultime\r\n| Le charme très fort pour les catch\r\n| Bon roaming', ' Peu dégâts en early-game\r\n| Champion prévisible\r\n| Sensible avant le lvl 6\r\n| très manavore en phase de lane', '19', 1, '2020-07-31 19:44:39', NULL),
(20, 'midlane', 'yasuo', 'YASUO LE DISGRACIE DE LA FAILLE !', 20, 21, ' Grande mobilité\r\n| Powerspike 2 objets puissant\r\n| Bon scaling\r\n| DPS/BURST\r\n| Mur de vent redoutable', ' Sensible aux ganks\r\n| Demande beaucoup de games\r\n| Demande une composition adaptée\r\n| Pas facile en teamfight\r\n| Une fois derrière dur de revenir', '20', 1, '2020-07-31 21:20:08', NULL),
(21, 'jungle', 'evelynn', '', 21, 22, '', '', '', 0, '2020-08-01 18:37:42', NULL),
(22, 'jungle', 'shaco', '', 22, 23, '', '', '', 0, '2020-08-01 18:56:40', NULL),
(23, 'jungle', 'xinZhao', '', 23, 24, '', '', '', 0, '2020-08-01 19:11:13', NULL),
(24, 'toplane', 'aatrox', '', 24, 13, '', '', '', 0, '2020-08-01 19:21:43', NULL),
(25, 'toplane', 'darius', '', 25, 25, '', '', '', 0, '2020-08-01 19:33:29', NULL),
(26, 'toplane', 'sett', '', 26, 26, '', '', '', 0, '2020-08-01 19:48:59', NULL),
(27, 'toplane', 'yasuo', '', 20, 21, '', '', '', 0, '2020-08-01 19:50:21', NULL),
(28, 'midlane', 'ekko', '', 3, 3, '', '', '', 0, '2020-08-01 19:55:35', NULL),
(29, 'midlane', 'vladimir', '', 14, 15, '', '', '', 0, '2020-08-01 22:36:22', NULL),
(30, 'midlane', 'katarina', 'KATARINA LA MITRAILLETTE AUX DAGUES ! ', 27, 27, ' Bonne phase de lane\r\n| Parfaite pour le roaming\r\n| Un snowball immense \r\n| Des dégâts de zone\r\n| Powerspike Pistolame très bon', ' Très sensible aux contrôles\r\n| Pas un bon late-game\r\n| Demande beaucoup de pratique\r\n| Une fois derrière inutile', '21', 1, '2020-08-01 22:56:35', NULL),
(31, 'midlane', 'akali', ' ', 28, 28, '', '', '', 0, '2020-08-01 23:01:11', NULL),
(32, 'midlane', 'orianna', '', 29, 29, '', '', '', 0, '2020-08-02 20:29:52', NULL),
(33, 'midlane', 'galio', '', 30, 30, '', '', '', 0, '2020-08-02 20:42:42', NULL),
(34, 'midlane', 'zoe', '', 31, 31, '', '', '', 0, '2020-08-02 20:57:40', NULL),
(35, 'midlane', 'annie', '', 32, 32, '', '', '', 0, '2020-08-02 21:07:16', NULL),
(36, 'midlane', 'twisted-fate', '', 33, 33, '', '', '', 0, '2020-08-09 17:58:11', NULL),
(37, 'midlane', 'kassadin', '', 34, 34, '', '', '', 0, '2020-08-09 18:16:17', NULL),
(38, 'midlane', 'veigar', '', 35, 35, '', '', '', 0, '2020-08-09 18:27:10', NULL),
(39, 'midlane', 'corki', '', 36, 36, '', '', '', 0, '2020-08-10 08:57:53', NULL),
(40, 'midlane', 'fizz', '', 37, 37, '', '', '', 0, '2020-08-10 16:09:57', NULL),
(41, 'midlane', 'yone', 'YONE LE FRERE REVENANT ! ', 38, 38, 'Bonne mobilité\r\n| Powerspike 2 objets puissant\r\n| Fort en Teamfight\r\n| DPS/BURST\r\n| Capacité de plays monstrueuse', 'Sensible aux ganks\r\n| Faible phase de lane\r\n| Demande beaucoup de games\r\n| Champion prévisible ', '22', 1, '2020-09-07 18:48:59', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `lanes`
--
ALTER TABLE `lanes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `champion_id` (`champion_id`),
  ADD KEY `competence_id` (`competence_id`),
  ADD KEY `youtube_id` (`youtube_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `lanes`
--
ALTER TABLE `lanes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
