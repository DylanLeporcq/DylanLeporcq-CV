<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>Dylan Leporcq | Curriculum Vitae</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" media="screen and (max-width: 900px)" href="responsive.css">
    <link rel="stylesheet" media="screen and (max-width: 660px)" href="responsive2.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d49bbded3d.js" crossorigin="anonymous"></script>
</head>
<div id="background">
<body>



<!-- Menu with all menu buttons -->
<div id="side_menu">
    <span class="option o1"><i class="fas fa-user"></i>Présentation</span>
    <span class="option o2"><i class="fas fa-graduation-cap"></i>Formations</span>
    <span class="option o3"><i class="fas fa-chart-line"></i>Experiences</span>
    <span class="option o4"><i class="fas fa-chart-pie"></i>Compétences</span>
    <span class="option o5"><i class="fas fa-briefcase"></i>Portfolio</span>
    <span class="option o6"><i class="fas fa-envelope"></i>Contact</span>
</div>

<!-- Menu during the responsive mode -->
<div id="side_menu_responsive">
    <div class="o1">
        <span class="logoRes"><i class="fas fa-user"></i></span>
        <span class="responsiveClass">Présentation</span>
    </div>
    <div class="o2">
        <span class="logoRes"><i class="fas fa-graduation-cap"></i></span>
        <span class="responsiveClass">Formations</span>
    </div>
    <div class="o3">
        <span class="logoRes"><i class="fas fa-chart-line"></i></span>
        <span class="responsiveClass">Experiences</span>
    </div>
    <div class="o4">
        <span class="logoRes"><i class="fas fa-chart-pie"></i></span>
        <span class="responsiveClass">Compétences</span>
    </div>
    <div class="o5">
        <span class="logoRes"><i class="fas fa-briefcase"></i></span>
        <span class="responsiveClass">Portfolio</span>
    </div>
    <div class="o6">
        <span class="logoRes"><i class="fas fa-envelope"></i></span>
        <span class="responsiveClass">Contact</span>
    </div>
    <div class="o7">
        <span class="logoRes"><i class="far fa-times-circle"></i></span>
        <span class="responsiveClass">Fermer</span>
    </div>

</div>


<!-- Title of the CV -->
<h1><i id="showBTN" class="fab fa-elementor"></i>Dylan Leporcq</h1>



<!-- The main page, contain all of the element in display none mode -->
<div id="page">

    <!-- All of differents pages in include to not fill this page -->
    <div id="infos">
        <div class="insert i1"><?php include "pages/presentation.php";?></div>
        <div class="insert i2"><?php include "pages/formation.php";?></div>
        <div class="insert i3"><?php include "pages/experience.php";?></div>
        <div class="insert i4"><?php include "pages/competences.php";?></div>
        <div class="insert i5"><?php include "pages/portfolio.php";?></div>
        <div class="insert i6"><?php include "pages/contact.php";?></div>
    </div>

</div>


<!-- Links type script -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="script.js"></script>
<script src="./Chart.js"></script>
<script src="graphs.js"></script>
</body>
</div>
</html>