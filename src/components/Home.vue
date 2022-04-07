<template>
    <div class="container mt-3">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style="filter: invert(100%);"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" style="filter: invert(100%);"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" style="filter: invert(100%);"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-75" src="./../assets/images/suho.png" alt="First slide" style="object-fit: cover; margin: auto">
                </div>
                <div class="carousel-item">
                <img class="d-block w-75" src="./../assets/images/exo.png" alt="Second slide" style="object-fit: cover; margin: auto">
                </div>
                <div class="carousel-item">
                <img class="d-block w-75" src="./../assets/images/nct.png" alt="Third slide" style="object-fit: cover; margin: auto">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style="filter: invert(100%);">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style="filter: invert(100%);">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Home_page',
    }
</script>
