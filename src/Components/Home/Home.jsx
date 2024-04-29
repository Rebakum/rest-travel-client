
import { useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';
import TouristsCard from '../TouristsCard/TouristsCard';

const Home = () => {
    const datas = useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <div className='mx-10 my-20 '>
                <div className='flex justify-center items-center flex-col  my-20 bg-pink-100 text-blue-950 shadow-2xl p-10 *:my-3 rounded-2xl'>
                <h2 className='text-4xl text-center font-bold '>Tourists Sport</h2>
                <p className='text-center w-1/2'>When you travel for fun, you're a tourist. Some local inhabitants of vacation destinations might have a negative image of obnoxious, camera-toting tourists, but really they're just travelers who are curious about different parts of the world. Beaches, amusement parks, </p>

                </div>
                <div className='grid md:grid-cols-2  grid-cols-1 gap-5'>
                    {
                        datas.map(data => <TouristsCard key={data._id} data={data}></TouristsCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;