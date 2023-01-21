<template>
    <div class="row footer-container">
        <footer class="py-1 mt-3 border-top footer-page">
            <div class="col-xs-12 col-sm-12 col-md-4 d-flex align-items-center section">
                <a href="/" class="me-2 mb-md-0">
                    <img src="../../public/TvLike-transparent.png" width="100" height="80"
                        class="d-inline-block align-text-top" />
                </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 d-flex align-items-center mb-2 section">
                <p class="text-white mt-2 texto">Copyright &copy; 2023 Todos los derechos reservados</p>
                <span class="texto">Este sitio fue realizado por Angel Parra.</span>
            </div>
            <div id="social-items">
                <ul class="nav col-md-3 list-unstyled">
                    <li class="p-2"><a class="text-muted" href="https://twitter.com/angelp_19"><i class="bi bi-twitter"></i></a></li>
                    <li class="p-2"><a class="text-muted" href="https://www.instagram.com/angelparra5748/"><i class="bi bi-instagram"></i></a></li>
                    <li class="p-2"><a class="text-muted" href="https://github.com/aparra67"><i class="bi bi-github"></i></a></li>
                    <li class="p-2"><a class="text-muted" href="https://www.linkedin.com/in/angel-parra-acosta-b03383248/"><i class="bi bi-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>
<style scoped>
.footer-container {
    margin-top: auto;
}
.footer-page {
    display: flex;
    background: #1b2557d9;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center
}

.section {
    display: flex;
    flex-direction: column;
}

#social-items {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}
#social-items ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}
.section span {
    color: rgb(233, 236, 28);
}
@media(min-width: 250px) and (max-width: 991px) {
    .footer-page {
        flex-direction: column;
        align-content: center;
    }

    .section-1 a {
        margin: 0 !important;
    }

    .texto {
        text-align: center;
        font-size: 15px;
    }

    #social-items {
        margin-top: 10px;
        margin-bottom: 20px;
        justify-content: center;
    }
}
</style>
