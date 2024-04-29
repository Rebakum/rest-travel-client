import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";


const MyList = () => {
    const { currentUser } = useContext(AuthContext);
    const [userTouristSpots, setUserTouristSpots] = useState([]);
    console.log(currentUser?.email)
    useEffect(() => {
        (currentUser.email){

            fetch(`http://localhost:5000/myList/${currentUser?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUserTouristSpots(data)
    
                })
        }
    }, [currentUser]);


    return ( 
    <div>
        {/* {
          userTouristSpots.map(toristsSpots=>)  
        } */}

        <div className="mx-10 my-20">
            <h1>My List</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 shadow-2xl gap-5 p-10">
                <div className="flex justify-between rounded-2xl items-center p-10 shadow-xl">
                    <div><img src={userTouristSpots.image} alt="Movie" /></div>
                    <div>
                        <h2 className="card-title">ToouristsName:{userTouristSpots.touristsName}</h2>
                        <p>LOcation:{userTouristSpots.location}</p>
                        <p>TravelTime{userTouristSpots.travelTimen}</p>
                        <p>Seasonality:{userTouristSpots.season}</p>

                    </div>

                    <div className="flex flex-col gap-1">
                        <button className="btn btn-primary"><GrView></GrView></button>
                        <button className="btn btn-primary"><CiEdit></CiEdit></button>
                        <button className="btn btn-primary">X</button>
                    </div>
                </div>
               

            </div>

        </div>
        </div>
    );
};

export default MyList;