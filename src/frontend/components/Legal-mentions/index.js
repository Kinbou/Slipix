import React from 'react';
import { motion } from 'framer-motion';

import { useTitle } from 'src/hooks/useTitle';
import { animationOne, transition } from 'src/utils/animations';
import './legal-mentions.scss';

const LegalMentions = () => {
  useTitle('Mentions légales');

  return (
    <motion.div
      className="legal-mentions"
      key="legalNotice"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <h1 className="globalTitle-page">Mentions légales</h1>
      <section className="legal-mentions__content">
        <p>
          Merci de lire avec attention les différentes modalités d’utilisation du
          présent site avant d’y parcourir ses pages. En vous connectant sur ce
          site, vous acceptez sans réserves les présentes modalités. Aussi,
          conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la
          confiance dans l’économie numérique, les responsables du présent site
          internet slipix-progresser-sur-league-of-legends.fr sont :
        </p>
        <h2 className="legal-mentions__title">Editeur du site</h2>
        <p>Société : Slipix</p>
        <p>Responsable éditorial : Jennifer BOUQUIN</p>
        <p>Site Web : https://www.slipix-progresser-sur-league-of-legends.fr/</p>
        <h2 className="legal-mentions__title">Hébergement</h2>
        <p>Hébergeur : Société 02Switch</p>
        <p>222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</p>
        <p>Site Web : www.o2switch.fr/</p>
        <h2 className="legal-mentions__title">Conditions d'utilisation</h2>
        <p>
          Ce site est proposé en différents langages web (HTML, HTML5, Javascript,
          CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus
          agréable, nous vous recommandons de recourir à des navigateurs modernes
          comme Safari, Firefox, Google Chrome, Edge etc…
        </p>
        <p>
          La société Slipix met en œuvre tous les moyens dont elle dispose, pour
          assurer une information fiable et une mise à jour fiable de ses sites
          internet. Toutefois, des erreurs ou omissions peuvent survenir.
          L’internaute devra donc s’assurer de l’exactitude des informations auprès
          de SLIPIX, et signaler toutes modifications du site qu’il jugerait utile.
          SLIPIX n’est en aucun cas responsable de l’utilisation faite de ces
          informations, et de tout préjudice direct ou indirect pouvant en découler.
        </p>
        <p>
          Cookies : Le site slipix-progresser-sur-league-of-legends.fr peut-être
          amené à vous demander l’acceptation des cookies pour des besoins de
          statistiques et d’affichage. Un cookies est une information déposée sur
          votre disque dur par le serveur du site que vous visitez. Il contient
          plusieurs données qui sont stockées sur votre ordinateur dans un simple
          fichier texte auquel un serveur accède pour lire et enregistrer des
          informations . Certaines parties de ce site ne peuvent être fonctionnelles
          sans l’acceptation de cookies.
        </p>
        <p>
          Liens hypertextes : Le site slipix-progresser-sur-league-of-legends.fr
          peut offrir des liens vers d’autres sites internet ou d’autres ressources
          disponibles sur Internet. SLIPIX ne dispose d’aucun moyen pour contrôler
          les sites en connexion avec ses sites internet.SLIPIX ne répond pas de la
          disponibilité de tels sites et sources externes, ni ne la garantit. Elle
          ne peut être tenue pour responsable de tout dommage, de quelque nature que
          ce soit, résultant du contenu de ces sites ou sources externes, et
          notamment des informations, produits ou services qu’ils proposent, ou de
          tout usage qui peut être fait de ces éléments. Les risques liés à cette
          utilisation incombent pleinement à l’internaute, qui doit se conformer à
          leurs conditions d’utilisation.
        </p>
        <p>
          Les utilisateurs, les abonnés et les visiteurs des sites internet ne
          peuvent pas mettre en place un hyperlien en direction de ce site sans
          l’autorisation expresse et préalable de SLIPIX.
        </p>
        <p>
          Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en
          place un hyperlien en direction d’un des sites internet de SLIPIX, il lui
          appartiendra d’adresser un email accessible sur le site afin de formuler
          sa demande de mise en place d’un hyperlien. SLIPIX se réserve le droit
          d’accepter ou de refuser un hyperlien sans avoir à en justifier sa
          décision.
        </p>
        <h2 className="legal-mentions__title">Services fournis</h2>
        <p>L’ensemble des activités de l'association ainsi que ses informations sont
          présentés sur notre site slipix-progresser-sur-league-of-legends.fr.
        </p>
        <p>
          SLIPIX s’efforce de fournir sur le site
          slipix-progresser-sur-league-of-legends.fr des informations aussi précises
          que possible. les renseignements figurant sur le site
          slipix-progresser-sur-league-of-legends.fr ne sont pas exhaustifs et les
          photos non contractuelles. Ils sont donnés sous réserve de modifications
          ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les
          informations indiquées sur le site slipix-progresser-sur-league-of-legends.
          fr sont données à titre indicatif, et sont susceptibles de changer ou
          d’évoluer sans préavis.
        </p>
        <h2 className="legal-mentions__title">Limitation contractuelles sur les données</h2>
        <p>Les informations contenues sur ce site sont aussi précises que possible
          et le site remis à jour à différentes périodes de l’année, mais peut
          toutefois contenir des inexactitudes ou des omissions. Si vous constatez
          une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de
          bien vouloir utiliser l'adresse mail donnée, en décrivant le problème de
          la manière la plus précise possible (page posant problème, type
          d’ordinateur et de navigateur utilisé, …).
        </p>
        <p>
          Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et
          sous sa seule responsabilité. En conséquence,SLIPIX ne saurait être tenu
          responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur
          ou d’une quelconque perte de données consécutives au téléchargement. De
          plus, l’utilisateur du site s’engage à accéder au site en utilisant un
          matériel récent, ne contenant pas de virus et avec un navigateur de
          dernière génération mis-à-jour.
        </p>
        <p>
          Les liens hypertextes mis en place dans le cadre du présent site internet
          en direction d’autres ressources présentes sur le réseau Internet ne
          sauraient engager la responsabilité de SLIPIX
        </p>
        <h2 className="legal-mentions__title">Propriété intellectuelle</h2>
        <p>Tout le contenu du présent site slipix-progresser-sur-league-of-legends.
          fr, incluant, de façon non limitative, les graphismes, images, textes,
          vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en
          forme sont la propriété exclusive de la société à l’exception des marques,
          logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.
        </p>
        <p>Toute reproduction, distribution, modification, adaptation,
          retransmission ou publication, même partielle, de ces différents éléments
          est strictement interdite sans l’accord exprès par écrit de SLIPIX Cette
          représentation ou reproduction, par quelque procédé que ce soit, constitue
          une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
          de la propriété intellectuelle. Le non-respect de cette interdiction
          constitue une contrefaçon pouvant engager la responsabilité civile et
          pénale du contrefacteur. En outre, les propriétaires des Contenus copiés
          pourraient intenter une action en justice à votre encontre.
        </p>


        <h2 className="legal-mentions__title">Litiges</h2>
        <p>
          Les présentes conditions du site slipix-progresser-sur-league-of-legends.
          fr sont régies par les lois françaises et toutes contestations ou litiges
          qui pourraient naître de l’interprétation ou de l’exécution de celles-ci
          seront de la compétence exclusive des tribunaux dont dépend le siège
          social de la société. La langue de référence, pour le règlement de
          contentieux éventuels, est le français.
        </p>
        <p>
          Les sources des informations diffusées sur le site
          slipix-progresser-sur-league-of-legends.fr sont réputées fiables mais le
          site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou
          d'omissions.
        </p>
        <p>
          Les informations communiquées sont présentées à titre indicatif et général
          sans valeur contractuelle. Malgré des mises à jour régulières, le site www.
          slipix-progresser-sur-league-of-legends.fr ne peut être tenu responsable
          de la modification des dispositions administratives et juridiques
          survenant après la publication. De même, le site ne peut être tenue
          responsable de l'utilisation et de l'interprétation de l'information
          contenue dans ce site.
        </p>
        <p>
          L'utilisateur s'assure de garder son mot de passe secret. Toute
          divulgation du mot de passe, quelle que soit sa forme, est interdite. Il
          assume les risques liés à l'utilisation de son identifiant et mot de
          passe. Le site décline toute responsabilité
        </p>
        <h2 className="legal-mentions__title">Données personnelles</h2>
        <p>SLIPIX se conforme à la Réglementation de Protection des Données Personnelles</p>
        <p>De manière générale, vous n’êtes pas tenu de nous communiquer vos données
          personnelles lorsque vous visitez notre site Internet
          slipix-progresser-sur-league-of-legends.fr.
        </p>
        {/* <p>Cependant, ce principe comporte certaines exceptions. En effet, pour
        certains services proposés par notre site, vous pouvez être amenés à nous
        communiquer certaines données telles que : votre nom et votre adresse
         électronique.</p> */}
        {/* <p>Dans tous les cas, vous pouvez refuser de fournir vos données
          personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site,
          notamment celui de poster des commentaires sur certaines pages du site</p> */}
        <p>Enfin, nous pouvons collecter de manière automatique certaines
          informations vous concernant lors d’une simple navigation sur notre site
          Internet, notamment : des informations concernant l’utilisation de notre
          site, comme les zones que vous visitez et les services auxquels vous
          accédez, votre adresse IP, le type de votre navigateur, vos temps d’accès.
        </p>
        <p>De telles informations sont utilisées exclusivement à des fins de
          statistiques internes, de manière à améliorer la qualité des services qui
          vous sont proposés. Les bases de données sont protégées par les
          dispositions de la loi du 1er juillet 1998 transposant la directive 96/9
          du 11 mars 1996 relative à la protection juridique des bases de données.
        </p>
      </section>
    </motion.div>
  );
};

export default LegalMentions;
