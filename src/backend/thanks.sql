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
-- Structure de la table `thanks`
--

CREATE TABLE `thanks` (
  `id` int(50) NOT NULL,
  `name` varchar(20) NOT NULL,
  `icon` varchar(20) NOT NULL,
  `image` varchar(20) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `borderColor` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `thanks`
--

INSERT INTO `thanks` (`id`, `name`, `icon`, `image`, `content`, `borderColor`, `created_at`, `updated_at`) VALUES
(1, 'spyritray', 'thank_mui.png', 'pictureSpyritRay.png', '\"Pour notre patron préféré, j\'ai commencé le jeux en regardant ses vidéos, et depuis le confinement je try hard pour finalement, en grande partie grâce à lui, atteindre le plat il y a peu avec 75-80% de wr sur Talon :D \"', 'multicolor', '2020-10-21 14:51:59', '0000-00-00 00:00:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `thanks`
--
ALTER TABLE `thanks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `thanks`
--
ALTER TABLE `thanks`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
