import React , {useState} from 'react';
import SyncLoader from "react-spinners/SyncLoader";
function Loader() {
    let [loading, setLoading] = useState(true);
    
    return (
        <div style={{marginTop:'150px'}}>
            <div className="sweet-loading text-center">
                <SyncLoader color='#000' loading={loading} css='' size={80} />
            </div>
        </div>

    )
}

export default Loader
