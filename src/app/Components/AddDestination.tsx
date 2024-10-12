import { useState } from "react";

const AddDestination = () => {
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // addDestination
        setNewCity("");
        setNewCountry("");
    };
    const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCity(e.target.value);
    }
    return (
        <div className="p-4 ms-1 border">
            <form>
                <div className="row col-8 offset-2">
                    <h4>enter a new destination</h4>
                    <div className="col-5 p-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter city ..."
                            value={newCity}
                            onChange={handleChangeCity}
                        />
                    </div>
                    <div className="col-5 p-1">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="enter country ..."
                            value={newCountry}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCountry(e.target.value)}
                        />
                    </div>
                    <div className="col-2 p-1">
                        <button className="btn btn-success form-control" onClick={handleSubmit}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddDestination;