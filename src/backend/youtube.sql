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
-- Structure de la table `youtube`
--

CREATE TABLE `youtube` (
  `id` int(11) NOT NULL,
  `youtube_intro` varchar(50) NOT NULL,
  `youtube_content_coaching` varchar(500) NOT NULL,
  `youtube_identifiant` varchar(200) NOT NULL,
  `youtube_actor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `youtube`
--

INSERT INTO `youtube` (`id`, `youtube_intro`, `youtube_content_coaching`, `youtube_identifiant`, `youtube_actor`) VALUES
(1, 'Le Chewing-Gum de la jungle', '', '8aV7hl6nOjA', 'PatateVolante'),
(2, 'Le Viking de la Jungle', '', 'I2mHhmvetyw', 'Sixen'),
(3, 'Le bon timing de la jungle', '', 'w3Q1camdA6w|WhccITr_MPc', 'Valyaris'),
(4, 'Le moine aveugle la jungle', 'Je lui apprend comment carry rapidement la partie en imposant un gros rythme forcant les ennemis à faire des erreurs.\r\n|Voici une game intéressante ou je donne tout pour gagner avec une mauvaise team', '-bepaqTftOU|dwNxojvhv8k|m84s-82xmPU', 'Sixen'),
(5, 'La taverne vivante de la jungle', '', '', 'moi-même'),
(6, 'CHAAAAARGEZ !', 'Je lui explique comment impacter la map rapidement en tant que Jungler.', 'w3PiG3IH2Ms|uAmTtf3wwBY', 'Sixen'),
(7, 'MANGER MANGER !', '', 'jR1bx6yB_F8', 'Fright'),
(8, 'NOUS SOMMES DES SPARTIATES !', '', 'lyOHLJqaAtU', 'Fright'),
(9, 'BRÛLEZ LES TOUS !', '', 'jfC6SrcywBE', 'PEYJEYM'),
(10, 'Confirmation découpage !', '', 'dtFRWf5Qby0', 'Midark'),
(11, 'L\'ARMURE VIVANTE DE LA TOPLANE !', '', 'FYzijPUtswE', 'PEYJEYM'),
(12, 'TRANSFOOORMATION !', '', '0lqNOyMn-JQ', 'MIDARK'),
(13, 'MONTURE LET\'S GO !', '', 'OAwOw5j3L9I', 'Midark'),
(14, 'LA RIVIERE VIRERA AU ROUGE !', '', 'QKCp3Jhgt8U', 'DAMSHIRO'),
(15, 'On allume tout !', 'Je lui explique que jouer trop safe n\'est pas bon pour progresser et apporter son impact dans la partie.', 'kc7qQ-WrllE|yX6EcSmjQRU', 'FLASHSHAD0W'),
(16, 'Multiclonage !', 'Voici une vidéo détaillée de tous les combos pour bien jouer Zed dans la faille, à vous de carry avec le maitre des ombres !\r\n| VOICI UNE SERIE DE GAMEPLAYS EXPLICATIFS TRES COMPLETS POUR SAVOIR COMMENT JOUER ZED DIRECTEMENT SUR LE TERRAIN !', 'RUfnWTcpun4|URdTk1O1uV8|DqatM5lDtuY|h9d7ETAHPxY|hFAzvE9YTD8|HZjqA8-jTnY|2MKfplv0rck|vRgkuaIkrDQ', 'Moi-même'),
(17, 'ATTRAPE MOI SI TU PEUX !', '', '-FeIogXBo4A', 'DAMSHIRO'),
(18, 'TEMPÊTE DE RUNES !', '', 'Q-oX4GyOsQU', 'DAMSHIRO'),
(19, 'LE CHARME ASSASSIN !', 'Je lui explique qu\'il faut parfois prendre des initiatives et tenter des plays pour gagner la game !', '-XDKAuygndI|djvQl7o_He0', 'DAMSHIRO'),
(20, 'YASUO LE DISGRACIE DE LA FAILLE ! ', 'Voici une vidéo débat ou je parle de la mentalité des joueurs envers les Yasuo, vidéo intéressante qui remet en avant les nombreux clichés.\r\n| Je lui explique que connaître son champion et se faire confiance est très important pendant les fights.', '8tUt9RLxODo|benqT0QZdLk|Ou_gVGQeYNk|uKVDl9wCl2U', 'FLASHSHAD0W'),
(21, 'PAUVRE BOTLANE !', '', 'oVSJOPW5OkI|nU09oq9O-EY|TbuBh_mFkec|jcJlFTtlg8U', 'FLASHSHAD0W'),
(22, 'Hasagi numéro 2!', '', '5LYn_O-Bh1E', 'Fright');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `youtube`
--
ALTER TABLE `youtube`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `youtube`
--
ALTER TABLE `youtube`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
