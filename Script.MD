
DROP TABLE IF EXISTS `categoryitems`;
CREATE TABLE IF NOT EXISTS `categoryitems` (
  `id_categoryitems` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL,
  PRIMARY KEY (`id_categoryitems`),
  UNIQUE KEY `category` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `categoryitems`
--

INSERT INTO `categoryitems` (`id_categoryitems`, `category`) VALUES
(2, 'accessoire'),
(1, 'vetement');

-- --------------------------------------------------------

--
-- Structure de la table `genderitems`
--

DROP TABLE IF EXISTS `genderitems`;
CREATE TABLE IF NOT EXISTS `genderitems` (
  `id_genderitem` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `gender` varchar(30) NOT NULL,
  PRIMARY KEY (`id_genderitem`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `genderitems`
--

INSERT INTO `genderitems` (`id_genderitem`, `gender`) VALUES
(1, 'masculin'),
(2, 'feminin'),
(3, 'unisex');

-- --------------------------------------------------------

--
-- Structure de la table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id_item` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `color_oitem` varchar(100) NOT NULL,
  `price_item` bigint UNSIGNED NOT NULL,
  `description_item` text,
  `quantity_item` int UNSIGNED NOT NULL DEFAULT '0',
  `item_id_category_fk` tinyint UNSIGNED NOT NULL,
  `item_id_gender_fk` tinyint UNSIGNED NOT NULL,
  `size_item` varchar(255) NOT NULL,
  `name_item` varchar(255) NOT NULL,
  PRIMARY KEY (`id_item`),
  UNIQUE KEY `name_item` (`name_item`),
  KEY `item_id_category_fk` (`item_id_category_fk`),
  KEY `item_id_gender_fk` (`item_id_gender_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `items`
--

INSERT INTO `items` (`id_item`, `color_oitem`, `price_item`, `description_item`, `quantity_item`, `item_id_category_fk`, `item_id_gender_fk`, `size_item`, `name_item`) VALUES
(8, 'blue', 1, 'pulover', 0, 1, 2, 'xxl', 'polo'),
(9, 'bleu marine', 20, 'professionnel', 0, 1, 1, '48', 'daro'),
(10, 'bordeau', 1, 'jolie', 0, 1, 1, 'l', 'nike');

-- --------------------------------------------------------

--
-- Structure de la table `sells`
--

DROP TABLE IF EXISTS `sells`;
CREATE TABLE IF NOT EXISTS `sells` (
  `id_sells` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_item` int UNSIGNED NOT NULL,
  `quantity_sell` int UNSIGNED NOT NULL,
  `price_sell` bigint UNSIGNED NOT NULL,
  PRIMARY KEY (`id_sells`),
  KEY `id_item` (`id_item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `supply`
--

DROP TABLE IF EXISTS `supply`;
CREATE TABLE IF NOT EXISTS `supply` (
  `id_supply` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_item` int UNSIGNED NOT NULL,
  `quantity_supply` int UNSIGNED NOT NULL,
  `price_supply` bigint UNSIGNED NOT NULL,
  PRIMARY KEY (`id_supply`),
  KEY `id_item` (`id_item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`item_id_category_fk`) REFERENCES `categoryitems` (`id_categoryitems`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`item_id_gender_fk`) REFERENCES `genderitems` (`id_genderitem`);

--
-- Contraintes pour la table `sells`
--
ALTER TABLE `sells`
  ADD CONSTRAINT `sells_ibfk_1` FOREIGN KEY (`id_item`) REFERENCES `items` (`id_item`);

--
-- Contraintes pour la table `supply`
--
ALTER TABLE `supply`
  ADD CONSTRAINT `supply_ibfk_1` FOREIGN KEY (`id_item`) REFERENCES `items` (`id_item`);
COMMIT;