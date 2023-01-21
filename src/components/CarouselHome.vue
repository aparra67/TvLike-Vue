<template>
  <div class="container">
    <div id="carouselExampleCaptions" class="carousel slide mt-5 mb-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img id="img-carousel" src="../../public/slider/slider-1.jpg" class="d-block w-100 img-slider" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Información y Detalles</h5>
            <p>Enterate de las peliculas que estan dando de que hablar.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img id="img-carousel" src="../../public/slider/slider-2.jpg" class="d-block w-100 img-slider" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Trailers de Peliculas</h5>
            <p>Disfruta de los mejores trailers de tus peliculas favoritas</p>
          </div>
        </div>
        <div class="carousel-item">
          <img id="img-carousel" src="../../public/slider/slider-3.jpg" class="d-block w-100 img-slider" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Posters</h5>
            <p>Las mejores imagenes de las peliculas que a ti te gustan</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <i class="bi bi-chevron-left icon-control"></i>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <i class="bi bi-chevron-right icon-control"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .img-slider {
    height: auto;
    opacity: 0.9;
    overflow: hidden;
  }
  h5 {
    color: white;
    font-weight: bold;
  }
  p {
    color: white;
    font-weight: bold;
  }
  .icon-control {
    color: rgb(233, 236, 28) !important;
    width: 4rem;
    height: auto;
    font-size: 3.5rem;
  }
  @media(min-width: 250px) and (max-width: 575px) {
    .icon-control {
      font-size: 1.5rem;
    }
  }
</style>
