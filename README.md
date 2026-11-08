# ECMMP
Projet expérimental d’environnement de développement modulaire en MicroPython, inspiré de VS Code et conçu pour la calculatrice NumWorks..


# ECMMP — Environnement de Codage Modulaire en MicroPython

**ECMMP** est un projet expérimental visant à concevoir un environnement de développement modulaire en MicroPython, inspiré de logiciels comme Visual Studio Code et adapté aux ressources matérielles limitées de la calculatrice graphique NumWorks.

L'objectif est de proposer un espace de travail capable d'accueillir différents langages, modules et outils directement sur la calculatrice.

## Présentation du projet

Reproduire un environnement de développement de type IDE sur une calculatrice représente un véritable défi technique.

MicroPython est une implémentation allégée de Python, tandis que la NumWorks dispose de ressources matérielles bien plus limitées qu'un ordinateur conventionnel. La conception de l'ECMMP doit donc tenir compte de ces contraintes dès son architecture.

Le projet est né en 2026, à la suite d'une redécouverte de l'environnement MicroPython de la calculatrice NumWorks et de plusieurs expérimentations autour de la programmation sur cette plateforme.

## Objectifs

L'ECMMP poursuit plusieurs objectifs :

- Concevoir un environnement de développement modulaire directement sur NumWorks.
- Organiser les fonctionnalités autour d'une architecture évolutive.
- Permettre l'intégration de différents langages et outils.
- Adapter les mécanismes de développement aux limitations de MicroPython.
- Exploiter au mieux les ressources matérielles disponibles.

## Plateforme cible

Le projet est conçu pour fonctionner dans l'environnement MicroPython de la calculatrice graphique NumWorks.

| Caractéristique | Spécification |
|---|---|
| Microcontrôleur | STM32F730V8T6 |
| Architecture processeur | ARM Cortex-M7 |
| Fréquence maximale | 216 MHz |
| Mémoire SRAM | 256 Ko |
| Mémoire Flash externe | 8 Mo |
| Environnement logiciel | Epsilon / MicroPython |

Ces caractéristiques constituent la base matérielle du projet. Les performances réelles dépendent également de l'architecture logicielle et des ressources disponibles pendant l'exécution.

## Architecture du projet

L'ECMMP repose sur une organisation en trois grandes couches :

### C1 — Cœur du projet

La couche principale constitue le socle de l'environnement. Elle regroupe les éléments fondamentaux nécessaires à son fonctionnement et à son organisation.

### C2 — Langages et modules

Cette couche accueille les différents langages, modules et outils destinés à enrichir les possibilités de l'environnement de développement.

### C3 — Compléments et extensions

La dernière couche regroupe les fonctionnalités complémentaires et les extensions permettant de faire évoluer l'environnement sans remettre en cause son architecture générale.

Cette organisation vise à faciliter l'évolution et la modularité du projet.

## Contraintes techniques

La conception de l'ECMMP doit notamment prendre en compte :

- Les limitations de MicroPython par rapport à Python standard.
- La quantité limitée de mémoire vive disponible.
- La puissance de calcul du microcontrôleur.
- L'espace de stockage disponible.
- Les particularités de l'environnement d'exécution de NumWorks.

L'objectif n'est donc pas de reproduire intégralement un IDE informatique classique, mais d'en adapter certains principes à une plateforme embarquée.

## Technologies utilisées

- **MicroPython** : environnement principal de programmation.
- **Python** : langage de référence pour la conception des mécanismes.
- **NumWorks / Epsilon** : plateforme matérielle et logicielle cible.

## Documentation

Le projet est accompagné d'une documentation technique détaillant notamment :

- L'étude du matériel NumWorks.
- Le fonctionnement du système d'exploitation Epsilon.
- L'environnement MicroPython.
- L'architecture générale de l'ECMMP.
- Les choix techniques et les contraintes rencontrées.

## État du projet

L'ECMMP est un projet en développement. Son architecture et ses fonctionnalités sont susceptibles d'évoluer au fur et à mesure de sa conception et de son expérimentation sur la calculatrice.

## Indépendance du projet

ECMMP est un projet indépendant, développé à des fins expérimentales et pédagogiques.

NumWorks, Epsilon et MicroPython sont mentionnés à titre de référence. Le projet n'est ni officiellement affilié à NumWorks, ni développé ou validé par cette entreprise.

## Droits d'auteur

**© 2026 Tiago Da Silva — All Rights Reserved.**

Toute reproduction, modification, redistribution ou réutilisation de ce projet nécessite l'autorisation écrite préalable de son auteur.

---

*ECMMP — Environnement de Codage Modulaire en MicroPython.*
