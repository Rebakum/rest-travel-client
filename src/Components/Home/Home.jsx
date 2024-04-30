
import { useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';
import TouristsCard from '../TouristsCard/TouristsCard';
import AllCountry from '../AllCountry/AllCountry';

const Home = () => {
    const datas = useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <div className='mx-10 my-20 '>
                <div className='flex justify-center items-center flex-col  my-20 bg-pink-100 text-blue-950 shadow-2xl p-10 *:my-3 rounded-2xl'>
                <h2 className='text-5xl rancho text-center font-bold  '>Wellcome My Tourists Sport</h2>
                <p className='text-center w-1/2 poppins'>When you travel for fun, you're a tourist. Some local inhabitants of vacation destinations might have a negative image of obnoxious, camera-toting tourists, but really they're just travelers who are curious about different parts of the world. Beaches, amusement parks, </p>

                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5'>
                    {
                        datas.map(data => <TouristsCard key={data._id} data={data}></TouristsCard>)
                    }
                </div>
            </div> 
            <AllCountry></AllCountry>

        </div>
    );
};

export default Home;