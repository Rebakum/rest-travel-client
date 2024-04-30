import { useLoaderData } from "react-router-dom";
import CountryData from "../CountryData/CountryData";





const AllCountry = () => {
    const datas = useLoaderData();
    console.log(datas)
    return (
        <div className="my-20 mx-10 poppins">
            <div className="my-20 mx-10 bg-blue-100 shadow-2xl flex justify-center items-center rounded-2xl p-10">
            <h2 className="text-5xl text-center rancho">International tourism the most popular countries</h2>
            </div>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-5 justify-center items-center">
           {
                datas.map(data=><CountryData key={data._id}data={data}></CountryData>)
            }
           </div>
        </div>
    );
};

export default AllCountry;