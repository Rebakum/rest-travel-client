import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GrView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const { currentUser } = useContext(AuthContext);
    const [userTouristSpots, setUserTouristSpots] = useState([]);

    console.log(currentUser?.email)
    useEffect(() => {
        if (currentUser?.email) {

            fetch(`http://localhost:5000/myList/${currentUser?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUserTouristSpots(data)


                })
        }
    }, [currentUser]);

    console.log(userTouristSpots)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
       
        fetch(`http://localhost:5000/addTouristsSport/${id}`, {
            method: 'DELETE'
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // window.location.reload()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    
                }
            )

            })

    }
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 shadow-2xl my-20 mx-10 gap-10 p-10">
            {
                userTouristSpots.map(toristsSpots => <div key={toristsSpots._id} >

                    <div className="flex justify-between rounded-2xl items-center border p-10 border-primary hover:border-secondary shadow-xl">
                        <div><img className="rounded-2xl w-60 h-60" src={toristsSpots.image} alt="Movie" /></div>
                        <div>
                            <h2 className="card-title">ToouristsName:{toristsSpots.touristsName}</h2>
                            <p>Location : {toristsSpots.location}</p>
                            <p>TravelTime : {toristsSpots.travelTime}</p>
                            <p>Seasonality : {toristsSpots.season}</p>

                        </div>

                        <div className="flex flex-col gap-2">
                            <Link state={toristsSpots._id} to={`/details/${toristsSpots._id}`}>
                                <button className="btn btn-primary"><GrView></GrView></button>
                            </Link>
                            <Link state={toristsSpots._id} to={`/updateList/${toristsSpots._id}`}>
                                <button className="btn btn-primary"><CiEdit></CiEdit></button>
                            </Link>
                            <button onClick={() => handleDelete(toristsSpots._id)} className="btn btn-primary">X</button>
                        </div>
                    </div>



                </div>)
            }

        </div>
    );
};

export default MyList;