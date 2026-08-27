Guide rapide — Ajouter les images Lanacom au projet

1) Créez le dossier public/assets/lanacom/ si nécessaire.

2) Copiez vos fichiers images (par ex. lanacom1.jpg ... lanacom12.jpg) depuis votre dossier local (ex: Downloads) vers le dossier du projet.

Exemple PowerShell (à exécuter depuis le terminal à la racine du projet) :

```powershell
# crée le dossier destination
New-Item -ItemType Directory -Force -Path .\public\assets\lanacom\

# copier tous les jpg/png depuis le dossier Downloads\lanacom\lanacom vers le dossier du projet
Copy-Item -Path "C:\Users\souha\Downloads\lanacom\lanacom\*" -Destination .\public\assets\lanacom\ -Recurse -Force
```

3) Vérifiez que les fichiers sont nommés : lanacom1.jpg, lanacom2.jpg, ..., lanacom12.jpg

4) Redémarrez le serveur de développement Vite si nécessaire :

```powershell
npm run dev
```

Remarques :
- `src/data/portfolio.json` a été mis à jour pour inclure 12 entrées pointant vers `/assets/lanacom/lanacom1.jpg`... `/assets/lanacom/lanacom12.jpg`.
- Si vos images portent d'autres noms, renommez-les ou mettez à jour les chemins dans `src/data/portfolio.json`.
- Si vous préférez stocker les images dans `src/assets` au lieu de `public`, dites-le-moi et j'adapterai les chemins et instructions.
