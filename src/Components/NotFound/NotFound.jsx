import { Link } from 'react-router-dom';
import NotFoundImg from '../../assets/images/404.png'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={NotFoundImg} alt="" />
            <Link to='/'>
                <button className=' btn btn-error'>Go Back tO HOme</button>
            </Link>
        </div>
    );
};

export default NotFound;