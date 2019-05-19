import React from 'react';

function Cards(){
    return (
        <div className="cards row justify-content-center">

            <div className="card1 for-patients col-lg-4 col-md-8">
                <p className=" card-text">For patients</p>
                <h5 className="card-titl">Find a doctor, book a visit and solve any health-related doubt</h5>
                <div className="card-body">
                    <select>
                        <option>CHOOSE COUNTRY</option>
                        <option value="http://www.doctoraliar.com">Argentina</option>
                        <option value="http://www.doctoralia.com.au">Australia</option>
                        <option value="http://www.doctoralia.com.br">Brazil</option>
                        <option value="http://www.doctoralia.cl">Chile</option>
                        <option value="http://www.doctoralia.co">Colombia</option>
                        <option value="http://www.znamylekar.cz">Czech</option>
                        <option value="http://www.doctoralia-fr.com">France</option>
                        <option value="http://www.miodottore.it">Italy</option>
                        <option value="http://www.doctoralia.com.mx">Mexico</option>
                        <option value="http://www.doctoralia.pe">Peru</option>
                        <option value="http://www.znanylekarz.pl">Poland</option>
                        <option value="http://www.doctoralia.com.pt">Portugal</option>
                        <option value="http://www.doctoralia.es">Spain</option>
                        <option value="http://www.doktortakvimi.com">Turkey</option>
                        <option value="http://www.doctoralia.co.uk">UK</option>
                    </select>
                    <img className="card-img-top img-fluid " data-aos="fade-left"
                        src="https://www.docplanner.com/img/screen-marketplace@2x.png" alt="Card image cap" ></img>
                </div>
            </div>


            <div className="card1 for-doctors col-lg-4 col-md-8">
                <p className="card-text">For doctors</p>
                <h5 className="card-title">Save time managing visits and cut no-shows by half</h5>

                <div>
                    <select >
                        <option>CHOOSE COUNTRY</option>
                        <option value="http://www.doctoraliar.com">Argentina</option>
                        <option value="http://www.doctoralia.com.au">Australia</option>
                        <option value="http://www.doctoralia.com.br">Brazil</option>
                        <option value="http://www.doctoralia.cl">Chile</option>
                        <option value="http://www.doctoralia.co">Colombia</option>
                        <option value="http://www.znamylekar.cz">Czech</option>
                        <option value="http://www.doctoralia-fr.com">France</option>
                        <option value="http://www.miodottore.it">Italy</option>
                        <option value="http://www.doctoralia.com.mx">Mexico</option>
                        <option value="http://www.doctoralia.pe">Peru</option>
                        <option value="http://www.znanylekarz.pl">Poland</option>
                        <option value="http://www.doctoralia.com.pt">Portugal</option>
                        <option value="http://www.doctoralia.es">Spain</option>
                        <option value="http://www.doktortakvimi.com">Turkey</option>
                        <option value="http://www.doctoralia.co.uk">UK</option>
                    </select>
                    <img class="card-img-top img-fluid " data-aos="fade-left"
                        src="https://www.docplanner.com/img/screen-saas@2x.png" alt="Card image cap" ></img>
                </div>
            </div>
        </div>
    )
}
export default Cards;