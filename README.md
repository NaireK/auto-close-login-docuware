# Auto Close Login DocuWare

Une extension Chrome développée pour **fermer automatiquement** les onglets dont l'URL contient `LoginSuccess`, tout en vous laissant le **contrôle manuel** via une interface simple (pause/activation).

---

## 🚀 Fonctionnalités

- 🔒 Ferme automatiquement les onglets avec "LoginSuccess" dans l’URL (insensible à la casse ou aux espaces).
- 🟢 Bouton pour activer / 🔴 mettre en pause l’automatisation.
- ⚙️ Interface propre et responsive.
- 🖼️ Icône et logo personnalisés.

---

## 📂 Structure du projet

auto-close-login-docuware/
├── background.js # Script principal qui ferme les onglets ciblés  
├── popup.html # Interface de l’extension  
├── popup.js # Logique du bouton pause/activation  
├── popup.css # Style de l’interface  
├── manifest.json # Déclaration de l’extension Chrome  
├── icon16.png # Icône affichée dans la barre d’outils  
├── Factoria-logo.png # Logo affiché dans la popup  

---

## 🛠️ Installation (dev)

1. Cloner ce dépôt ou télécharger le ZIP.
2. Aller dans `chrome://extensions/` dans Chrome.
3. Activer le **mode développeur** (coin supérieur droit).
4. Cliquer sur **"Charger l’extension non empaquetée"**.
5. Sélectionner le dossier du projet.

---

## ✅ Conditions de déclenchement

L'extension fermera automatiquement un onglet si son URL contient une variante du terme `LoginSuccess`, par exemple :

- `https://example.com/LoginSuccess`
- `https://example.com/login-success`
- `https://example.com/LOGIN success?id=123`

---

## 📌 Remarques

- Fonctionne uniquement sur Chrome (ou navigateurs basés sur Chromium).
- Ne collecte aucune donnée.
- Peut être activée ou désactivée à tout moment via l'interface de l'extension.

---

## 📸 Aperçu

<!-- Ajoute ici un fichier screenshot.png si tu veux une capture d'écran -->
![screenshot](./image.png)

---

## 🧑‍💻 Auteur

Développé par [NaireK](https://github.com/NaireK) pour usage interne à Factoria.