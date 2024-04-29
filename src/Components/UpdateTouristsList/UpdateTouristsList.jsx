import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateTouristsList = () => {
    const [data, setData] = useState([])
    const locate = useLocation()
    useEffect(() => {
        fetch(`http://localhost:5000/addTouristsSport/${locate.state}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    console.log(data)

    const {
        _id,
        image,
        touristsName,
        countryName,
        location,
        description,
        averageCost,
        season,
        travelTime,
        totalVisitorsYear,
        name,
        email
    } = data;


    const handleUpdateTouristsList = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const touristsName = form.touristsName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsYear = form.totalVisitorsYear.value;
        const name = form.name.value;
        const email = form.email.value;

        const updatedData = {

            image,
            touristsName,
            countryName,
            location,
            description,
            averageCost,
            season,
            travelTime,
            totalVisitorsYear,
            name,
            email
        };
        console.log(updatedData);



        //-----send data to the server--

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Added successfull Continue',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                    })
                }
            })


    }


    return (
        <div>
            <div className="mx-10 p-10 bg-slate-200 rounded-2xl shadow-2xl">
                <h1 className="text-xl text-center text-primary my-10">Add Tourists Sport</h1>

                <div>

                    <form onSubmit={handleUpdateTouristsList}>
                        {/* form-imageURL/Tourists spot name*/}
                        <div className="flex justify-center items-center gap-5">
                            <label className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Images</span>
                                </label>
                                <input type="text" id="image" name="image" defaultValue={image} placeholder="imageURL" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Tourists spot name</span>
                                </label>
                                <input type="text" id="touristsName" name="touristsName" defaultValue={touristsName} placeholder="Tourists spot name" className="input input-bordered w-full " />
                            </label>
                        </div>

                        {/* form-Tourists spot name/Location */}
                        <div className="flex justify-center items-center gap-5">
                            <label className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Country name</span>
                                </label>
                                <input type="text" id="countryName" name="countryName" defaultValue={countryName} placeholder="Country Name" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Location</span>
                                </label>
                                <input type="text" id="location" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full " />
                            </label>
                        </div>

                        {/* form-Short description/Average cost */}
                        <div className="flex justify-center items-center gap-5">

                            <label className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Short description
                                    </span>
                                </label>
                                <input type="text" id="description" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Average cost</span>
                                </label>
                                <input type="text" id="averageCost" name="averageCost" defaultValue={averageCost} placeholder="Average cost" className="input input-bordered w-full " />
                            </label>

                        </div>
                        {/* form-/Seasonality */}
                        <div className="flex justify-center items-center gap-5">

                            <label className="form-control  w-full ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Seasonality
                                    </span>
                                </label>
                                <select name="season" id="season" defaultValue={season} className="w-full p-2 border rounded-md focus:outline-[#FF497C]">
                                    <option value="" disabled hidden>Select seasonality</option>
                                    <option value="summer">Summer</option>
                                    <option value="reainy-seasion">Reainy-seasion</option>
                                    <option value="autam">Autam</option>
                                    <option value="lateAutam">Late-Autam</option>
                                    <option value="winter">Winter</option>
                                    <option value="spring">spring</option>

                                </select>
                            </label>
                        </div>
                        {/* form-Travel time/Tota Visitors PerYear */}
                        <div className="flex justify-center items-center gap-5">
                            <label className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Travel time
                                    </span>
                                </label>
                                <select name="travelTime" id="travelTime" defaultValue={travelTime} className="w-full p-2 border rounded-md focus:outline-[#FF497C]">
                                    <option value="" disabled hidden>travel</option>
                                    <option value="2days">2days</option>
                                    <option value="3days">3days</option>
                                    <option value="4days">4days</option>
                                    <option value="5days">5days</option>
                                    <option value="6days">6days</option>
                                    <option value="7days">7days</option>
                                </select>
                            </label>
                            <label className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Tota Visitors PerYear
                                    </span>
                                </label>
                                <input type="text" id="year" name="totalVisitorsYear" defaultValue={totalVisitorsYear} placeholder="10000" className="input input-bordered w-full " />
                            </label>
                        </div>
                        {/* form-UserName/Email */}
                        <div className="flex justify-center items-center gap-5">
                            <label className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">UserName</span>
                                </label>
                                <input type="text" id="name" name="name" defaultValue={name} placeholder="UserName" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text-alt text-primary">Email
                                    </span>
                                </label>
                                <input type="text" id="email" name="email" defaultValue={email} placeholder="Email" className="input input-bordered w-full " />
                            </label>
                        </div>

                        {/* form-button*/}

                        <div className=" w-full">
                            <label className="form-control mt-5 ">
                                <input type="submit" value="Add Coffee" className="input input-bordered w-full btn text-secondary btn-primary " />
                            </label>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTouristsList;

