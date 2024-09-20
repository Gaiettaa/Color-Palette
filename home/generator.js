document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    // Verifica che il file sia un'immagine JPG o PNG
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('image');
            img.src = e.target.result;
            img.style.display = 'block'; // Mostra l'immagine
            
            // Attende che l'immagine sia completamente caricata prima di generare la palette
            img.onload = function() {
                document.getElementById('loading').style.display = 'block'; // Mostra il messaggio di caricamento
                setTimeout(() => {
                    generatePalette(img);
                }, 1000);
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert('Per favore, carica un file immagine in formato JPG o PNG.');
        document.getElementById('upload').value = ''; // Resetta il campo di input
        document.getElementById('image').style.display = 'none'; // Nasconde l'immagine
        document.getElementById('palette').innerHTML = ''; // Pulisce la palette
    }
});

function generatePalette(img) {
    const colorThief = new ColorThief();
    
    // Verifica che l'immagine sia caricata
    try {
        const palette = colorThief.getPalette(img, 5); // Estrae 5 colori
        const paletteContainer = document.getElementById('palette');
        paletteContainer.innerHTML = ''; // Pulisce la palette precedente
        
        palette.forEach(color => {
            const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            const hexColor = rgbToHex(color[0], color[1], color[2]);
            
            getColorName(hexColor).then(colorName => {
                const colorBox = document.createElement('div');
                colorBox.className = 'color-box';
                colorBox.style.backgroundColor = rgbColor;
                
                const colorCode = document.createElement('div');
                colorCode.className = 'color-code';
                colorCode.textContent = `${hexColor} - ${colorName}`;
                
                colorBox.appendChild(colorCode);
                paletteContainer.appendChild(colorBox);
            }).catch(() => {
                console.error('Errore durante il recupero del nome del colore.');
            });
        });

        document.getElementById('loading').style.display = 'none';
    } catch (error) {
        console.error('Errore durante la generazione della palette:', error);
        document.getElementById('loading').style.display = 'none';
    }
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16).padStart(2, '0');
        return hex;
    }).join('');
}

function getColorName(hex) {
    // Usa un'API per ottenere il nome del colore
    return fetch(`https://www.thecolorapi.com/id?hex=${hex.slice(1)}`)
        .then(response => response.json())
        .then(data => data.name.value || 'Unknown Color')
        .catch(() => 'Unknown Color');document.getElementById('upload').addEventListener('change', function(event) {
            const file = event.target.files[0]; // Ottiene il file selezionato dall'utente
            
            // Verifica che il file sia un'immagine in formato JPG o PNG
            if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
                const reader = new FileReader(); // Crea un nuovo FileReader per leggere il file
                reader.onload = function(e) {
                    const img = document.getElementById('image'); // Seleziona l'elemento immagine
                    img.src = e.target.result; // Imposta l'immagine caricata come sorgente dell'elemento img
                    img.style.display = 'block'; // Mostra l'immagine
                    
                    // Aspetta che l'immagine sia completamente caricata prima di generare la palette
                    img.onload = function() {
                        document.getElementById('loading').style.display = 'block'; // Mostra il messaggio di caricamento
                        setTimeout(() => {
                            generatePalette(img); // Dopo 3 secondi, genera la palette di colori
                        }, 3000);
                    };
                };
                reader.readAsDataURL(file); // Legge il file come URL di dati per visualizzare l'immagine
            } else {
                // Mostra un avviso se il file non è in formato JPG o PNG
                alert('Per favore, carica un file immagine in formato JPG o PNG.');
                document.getElementById('upload').value = ''; // Resetta il campo di input
                document.getElementById('image').style.display = 'none'; // Nasconde l'immagine
                document.getElementById('palette').innerHTML = ''; // Pulisce la palette esistente
            }
        });
        
        function generatePalette(img) {
            const colorThief = new ColorThief(); // Crea un'istanza di ColorThief per estrarre i colori
            
            // Prova a generare la palette di colori dall'immagine
            try {
                const palette = colorThief.getPalette(img, 5); // Estrae una palette di 5 colori
                const paletteContainer = document.getElementById('palette'); // Seleziona il contenitore della palette
                paletteContainer.innerHTML = ''; // Pulisce eventuali palette precedenti
                
                // Per ogni colore nella palette, crea un box con il colore e il codice
                palette.forEach(color => {
                    const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`; // Converte i valori RGB in una stringa
                    const hexColor = rgbToHex(color[0], color[1], color[2]); // Converte il colore in formato HEX
                    
                    // Ottiene il nome del colore usando un'API esterna
                    getColorName(hexColor).then(colorName => {
                        const colorBox = document.createElement('div'); // Crea un nuovo div per il box del colore
                        colorBox.className = 'color-box'; // Assegna la classe 'color-box'
                        colorBox.style.backgroundColor = rgbColor; // Imposta lo sfondo del box con il colore RGB
                        
                        const colorCode = document.createElement('div'); // Crea un div per il codice colore
                        colorCode.className = 'color-code'; // Assegna la classe 'color-code'
                        colorCode.textContent = `${hexColor} - ${colorName}`; // Inserisce il codice HEX e il nome del colore
                        
                        colorBox.appendChild(colorCode); // Aggiunge il codice colore al box
                        paletteContainer.appendChild(colorBox); // Aggiunge il box alla palette
                    }).catch(() => {
                        console.error('Errore durante il recupero del nome del colore.'); // Stampa un errore se fallisce
                    });
                });
        
                // Nasconde il messaggio di caricamento dopo aver generato la palette
                document.getElementById('loading').style.display = 'none';
            } catch (error) {
                // Se c'è un errore nella generazione della palette, stampa l'errore
                console.error('Errore durante la generazione della palette:', error);
                document.getElementById('loading').style.display = 'none'; // Nasconde comunque il messaggio di caricamento
            }
        }
        
        function rgbToHex(r, g, b) {
            // Converte i valori RGB in un formato HEX
            return '#' + [r, g, b].map(x => {
                const hex = x.toString(16).padStart(2, '0'); // Converte ogni valore RGB in HEX e aggiunge uno zero se necessario
                return hex;
            }).join(''); // Unisce i valori HEX in una stringa
        }
        
        function getColorName(hex) {
            // Usa un'API esterna per ottenere il nome del colore in base al codice HEX
            return fetch(`https://www.thecolorapi.com/id?hex=${hex.slice(1)}`) // Rimuove il simbolo '#' e invia la richiesta
                .then(response => response.json()) // Converte la risposta in JSON
                .then(data => data.name.value || 'Unknown Color') // Restituisce il nome del colore o 'Unknown Color' se non trovato
                .catch(() => 'Unknown Color'); // Se la richiesta fallisce, restituisce 'Unknown Color'
        }
        
}

