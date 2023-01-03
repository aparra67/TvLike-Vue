<template>
    <div class="container-fluid">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-1 mt-5 border-top footer-page">
            <div class="col-xs-12 col-sm-12 col-md-4 d-flex align-items-center section">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src="../../public/TvLike-transparent.png" width="100" height="80" class="d-inline-block align-text-top"/>
                </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 d-flex align-items-center section">
                <span class="text-white texto">Copyright &copy; 2022 Todos los derechos reservados| Este sitio fue realizado por Angel Parra.</span>
            </div>
            <ul id ="social-items" class="nav col-md-4 list-unstyled d-flex">
                <li><a class="text-muted" href="#"><i class="bi bi-twitter"></i></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-instagram"></i></a></li>
                <li class="ms-3 me-3"><a class="text-muted" href="#"><i class="bi bi-facebook"></i></a></li>
            </ul>
        </footer>
    </div>
</template>
<style scoped>
    .footer-page {
        background: #1b2557d9;
    }
    #social-items {
        justify-content: end;
    }
    @media(min-width: 250px) and (max-width: 991px) {
        .footer-page {
            flex-direction: column;
            align-content: center;
        }
        .section {
            flex-direction: column;
        }
        .section-1 a {
            margin: 0 !important;
        }
        .texto {
            text-align: center;
            font-size: 15px;
            margin-bottom: 10px;
        }
        #social-items {
            margin-top: 10px;
            margin-bottom: 20px;
            justify-content: center;
        }
    }
</style>
