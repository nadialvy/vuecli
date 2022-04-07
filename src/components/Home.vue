<template>
    <div class="cont pt-5 mt-3">
        <main role="main">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style="filter: invert(100%);"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" style="filter: invert(100%);"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" style="filter: invert(100%);"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3" style="filter: invert(100%);"></li>
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
                    <div class="carousel-item">
                        <img class="d-block w-75" src="./../assets/images/rv.png" alt="Third slide" style="object-fit: cover; margin: auto">
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

            <div class="container marketing mt-5 pt-5">
                <div class="row feat d-flex justify-content-center">
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
                        <h2>Heading</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>
            </div>  
        </main>
    </div>
</template>

<script>
    export default{
        name: 'Home_page',
    }
</script>

<style scoped>
    .cont{
        border: 1px solid black;
    }
    .feat{
        /* border: 1px solid black; */
    }
    .feat div h2, .feat div p, .feat div img{
        margin-top: 1rem;
        text-align: center;
    }
    .feat div img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
