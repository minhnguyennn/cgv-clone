import "bootstrap/dist/css/bootstrap.css";
export default function Movies() {
   return (
      <>
         <div className="movies">
            <div className="movies-title">
               <h2>movie selection</h2>
            </div>
            <div
               id="carouselExampleSlidesOnly"
               class="carousel slide"
               data-ride="carousel"
            >
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="../Img/horror_movie_run.jpg" alt="First slide" />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="..." alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="..." alt="Third slide" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
