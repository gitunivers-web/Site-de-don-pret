/**
 * Web3Forms Configuration
 *
 * Pour changer l'adresse email de réception des formulaires :
 * 1. Allez sur https://web3forms.com
 * 2. Entrez votre email professionnel et récupérez votre clé d'accès
 * 3. Dans Vercel (ou votre hébergeur), définissez la variable d'environnement :
 *    VITE_WEB3FORMS_ACCESS_KEY=votre_clé_ici
 * 4. Redéployez — aucune modification du code n'est nécessaire.
 *
 * Pour tester en local, créez un fichier .env.local à la racine du projet :
 *    VITE_WEB3FORMS_ACCESS_KEY=votre_clé_ici
 */

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
