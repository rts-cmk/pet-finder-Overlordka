# Opgave: Admin-side til Pet Finder App

Du skal udvide din Pet Finder applikation, som er bygget med Vite og React, med en ny admin-side. Formålet er at give dig mulighed for at tilføje nye dyr til dit API, der kører på JSON-server.  

Admin-siden skal være tilgængelig via en separat route, og den skal indeholde en formular, hvor du kan indtaste oplysninger om et dyr. Når du indsender formularen, skal data sendes som en POST-request til JSON-server, så dyret gemmes i API’et og derefter vises i din eksisterende Pet Finder app.  

## Krav
- Opret en ny route i React, fx `/admin`, som viser din admin-side.  
- Lav en formular med de nødvendige felter og håndter input med React state.  
- Brug `fetch` til at sende POST-request til JSON-server.  
- Sørg for, at listen over dyr opdateres, så det nye dyr vises i appen.  

## Ekstra udfordring
Når du har styr på det grundlæggende, kan du udfordre dig selv yderligere ved at:  
- Tilføje funktioner til at redigere eller slette dyr.  
- Lave en simpel adgangskontrol, så kun bestemte brugere kan se admin-siden.  
