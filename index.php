<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <meta name="keywords" content="BarraLibre.com, Barra Libre.com, Barra libre, barra libre, comida, market" />
    <meta name="author" content="Bryansank, U-Components" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <title>BarraLibre.com</title>
    <link rel="shortcut icon" href="./favicon.ico" />

    <!-- FONT AWESOME-->
        <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />-->
    <!-- END FONT AWESOME-->

    <!--STYLES-->
        <link rel="stylesheet" href="./css/style.css" />
    <!--END STYLES-->
</head>
<body>

    <?php include("./code/header.php"); ?>
    <!-- SUB-SECTION -->
    <section class="top-sub-section">
        <div class="wrapper">
            <h2 class="card-small-promo-h2 top">
                Escoge alguno de nuestros productos
            </h2>
        </div>
    </section>
    <!-- SECTION 1-->
    <?php include("./code/products.php"); ?>
    <!-- SUB-SECTION -->
    <section>
        <div class="wrapper">
            <h2 class="card-small-promo-h2">
                Chequea tu precio total acá
            </h2>
        </div>
    </section>
    <!-- SECTION 2 -->
    <?php include("./code/totalCard.php"); ?>
    <!-- SUB-SECTION -->
    <section>
        <div class="wrapper">
            <h2 class="card-small-promo-h2">
                Te tenemos Promociones.
            </h2>
        </div>
    </section>
    <!-- SECTION 3 -->
    <?php include("./code/promotion.php"); ?>
    <!-- SUB-SECTION -->
    <section>
        <div class="wrapper">
            <h2 class="card-small-promo-h2">
                Contáctanos para tu Compra.
            </h2>
        </div>
    </section>
    <?php include("./code/contact.php"); ?>
    <!--JAVASCRIPT-->
    <script type="text/javascript" src="./js/main.js"></script>
    <!--END JAVASCRIPT-->

</body>
</html>