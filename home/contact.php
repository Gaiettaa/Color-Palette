<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generatore di Palette</title>
    <link rel="stylesheet" href="contact.css">
    <link rel="stylesheet" href="style.css">
    <script
        src="https://kit.fontawesome.com/64d58efce2.js"
        crossorigin="anonymous"
      ></script>
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
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Keep in touch!</h3>
            <p class="text">
            By filling in the form, I will have a way to contact you!
            If everything goes well then you will be brought back to the homepage of the site, 
            otherwise you will remain on the form page and have to re-fill it.
            </p>
  
            <div class="info">
              <div class="information">
                <i class="fas fa-map-marker-alt"></i>&nbsp &nbsp
                <p>Cascina Melghera 15, 20088, Rosate</p>
              </div>
              <div class="information">
                <i class="fas fa-envelope"></i>&nbsp &nbsp
                <p>gaiapaini@gmail.com</p>
              </div>
              <div class="information">
                <i class="fas fa-phone"></i>&nbsp&nbsp
                <p>+39 366 393 1866</p>
              </div>
            </div>
  
            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100088173663205">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/_gaiapaini_/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>
  
            <!-- Modificato l'attributo 'action' e il 'method' -->
            <form action="palette.php" method="POST" autocomplete="off">
              <h3 class="title">Contact us</h3>
  
              <div class="input-container">
                <input type="text" name="name" class="input" required />
                <label for="name">Username</label>
                <span>Username</span>
              </div>
  
              <div class="input-container">
                <input type="email" name="email" class="input" required />
                <label for="email">Email</label>
                <span>Email</span>
              </div>
  
              <div class="input-container">
                <input type="tel" name="phone" class="input" required />
                <label for="phone">Phone</label>
                <span>Phone</span>
              </div>
  
              <div class="input-container textarea">
                <textarea name="message" class="input" required></textarea>
                <label for="message">Message</label>
                <span>Message</span>
              </div>
  
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.2/color-thief.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/color-name@1.0.2/dist/color-name.min.js"></script>
    <script src="contact.js"></script>
</body>
</html>
