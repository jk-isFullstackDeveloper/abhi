import Map from './Map';
import './Connect.css';
import ConnectForm from './ConnectForm';
import ConnectDetails from './ConnectDetails';

const Connect = () => {
    return (
        <>
            <p className="ConnectHead">CONNECT</p>

            {/* Connect Address */}
            <p className='ConnAddress'>
                Red Chillies Entertainments Pvt. Ltd.<br />
                Backstage,Plot no. 612,<br />
                Junction of Rama Krishna Mission Road & 15th Road,<br />
                Santacruz (West), Mumbai 400054<br />
            </p>

            {/* connectivity area */}
            <div className='conArea' >
                
                {/* Map */}
                <Map />

                {/* Form */}
                <div className='form'>
                    <ConnectForm />
                </div>
                <div className='details'>
                    <ConnectDetails />
                </div>
            </div>
        </>
    )
}

export default Connect