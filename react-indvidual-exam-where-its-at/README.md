####MANTINE UI
...är ett React-baserat bibliotek som innehåller färdiga UI-components. Man installerar Mantine i npm och wrappar sin App i Main.jsx med <MantineProvider/> sen har man tillgång till hela biblioteket. Jag använde Mantines input-component som sökfält istället för att göra ett eget. Mantine är säkert otroligt bra om man sätter sig in lite mer i det. Dock ställde det till en hel del i mina CSS-filer så jag fick köra en !important-treatment här och där för att viss CSS skulle funka.

####MOTION
...är ett animationsbibliotek för js, react och vue. Installeras i npm och sen har man tillgång till svinmycket göttigt. Jag använde en stagger-animation på min eventen som laddas in lite mjukt och fint. Ger en proffsig känsla.

####UUID
...är ett verktyg för att generera unika serienummer. Jag använde det för att generera de unika numren på biljetterna.

####react-hot-toast
...är ett bibliotek för att visa snygga notiser. Jag använder det för att bekräfta att orders läggs till i varukorgen och sen att köpet av biljetter är klart. Installeras i npm och sen har man tillgång till hela härligheten.
