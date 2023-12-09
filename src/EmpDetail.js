import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './EmpDetail.css';

const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Donor's Detail</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>
                            <h2>Donor name : <b>{empdata.name}</b>  ({empdata.id})</h2>
                            <h2>Blood Group: <b>{empdata.blood_group}</b></h2>
                            <h3>Contact Details</h3>
                            <h5>Email : {empdata.email}</h5>
                            <h5>Phone : {empdata.phone}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;