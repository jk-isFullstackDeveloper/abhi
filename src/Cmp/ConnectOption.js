import './ConnectOption.css';
import { FaFacebook } from "react-icons/fa";

const ConnectOption = () => {
    return (
        <>
            <div className='enquireOption'>
                <FaFacebook />
                <p className='OptionHead'>BUSINESS ENQUIRY</p>
                <a className='enquireLink' href='#'>business@redchillies.com</a>
            </div>
        </>
    )
}

export default ConnectOption