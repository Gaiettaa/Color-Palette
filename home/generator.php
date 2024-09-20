<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generatore di Palette</title>
    <link rel="stylesheet" href="generator.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Barra di navigazione principale -->
  <nav class="navbar">
    <ul class="nav-links">
      <!-- Sezione dei link a sinistra della navbar -->
      <div class="nav-links-left">
        <li><a href="index.html">Palette</a></li>
        <li><a href="generator.html">Generator Palette</a></li>
      </div>
      <!-- Sezione dei link a destra della navbar -->
      <div class="nav-links-right">
        <li><a href="contact.html">Contact Us</a></li>
      </div>
    </ul>
    <!-- Logo della navbar -->
    <div class="logo">
      <img src="ColorPalette.png" alt="Logo"/>
    </div>
  </nav>

    <div class="container">
        <h1>Color Palette Generator</h1>
        <input type="file" id="upload" accept="image/*">
        <div class="image-container">
            <img id="image" alt="Immagine da cui estrarre i colori" style="display:none;">
    </div>
    <div id="palette" class="palette"></div>
   
        <div id="loading" class="loading" style="display: none;"></div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.2/color-thief.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/color-name@1.0.2/dist/color-name.min.js"></script>
    <script src="generator.js"></script>
</body>
</html>
