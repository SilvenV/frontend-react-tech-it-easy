import checkImg from '../assets/check.png';
import minusImg from '../assets/minus.png';

const check = <img src={checkImg} className='iconSmall' alt='Check'/>
const minus = <img src={minusImg} className='iconSmall' alt='NotCheck'/>

function listOptionNames(tv) {
    return (
        <>
            {tv.options.map((option, index) => (
                <span key={index}>
                    {option.applicable ? check : minus} {option.name}
                    {index < tv.options.length - 1 && ' '}
                </span>
            ))}
        </>
    );
}

export default listOptionNames;