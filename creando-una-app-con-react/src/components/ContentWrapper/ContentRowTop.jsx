import imagenFondo from "../../assets/images/mandalorian.jpg" ;
import { GenresInDb } from "./GenresInDb";
import { ContentRowMovies } from "./ContenRowMovies";


export const ContentRowTop = () =>{
   return(
     <>
     {/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
{/*     	<!-- Content Row Last Movie in Data Base --> */}
					<div class="row">
						{/* <!-- Last Movie in DB --> */}

						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h5 class="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 + "rem"}}  src={imagenFondo} alt=" Star Wars - Mandalorian " />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a class="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/* <!-- End content row last movie in Data Base --> */}

	                      {/*<!-- Genres in DB --> */}
                        <GenresInDb />
	
						
						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

    </>
   )
}