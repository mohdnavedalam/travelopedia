import React, { FormEvent, useState } from "react";
import { useDeleteDestinationMutation, useUpdateDestinationMutation } from "../../api/DestinationApi";

const Destination = (props: any) => {
    const [deleteDestination] = useDeleteDestinationMutation();
    const [updateDestination] = useUpdateDestinationMutation();
    const [isUpdating, setIsUpdating] = useState(false);
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");

    const handleDelete = (id: string) => {
        deleteDestination(id);
    };

   const handleUpdate = () => {
        let city = "", country = "";
        
        if (newCity == "")
            city = props.destination.city;
        else 
            city = newCity;

        if (newCountry == "")
            country = props.destination.country;
        else
            country = newCountry;

        updateDestination({
            id: props.destination.id,
            city: city,
            country: country,
            days: props.destination.days
        });

        setIsUpdating(!isUpdating);
        setNewCity("");
        setNewCountry("");
   };

    return (
        <div key={props.destination.id} className="row py-1" style={{ borderBottom: "1px solid #333", borderTop: "1px solid #333" }}>
            <div className="col-1 offset-2">
                {props.destination.id}
                {/* &nbsp; &nbsp;
                {props.key} */} {/* pending  */}
            </div>
            <div className="col-2 offset-1">
                <div className="row">
                    <div className="col-6 p-1">
                        {isUpdating ? (
                            <input 
                                type="test"
                                placeholder="city ..."
                                className="form-control"
                                defaultValue={props.destination.city}
                                onChange={(e: FormEvent<HTMLInputElement>) => setNewCity(e.currentTarget.value)}
                            />
                        ) : (
                            <span>{props.destination.city}</span>
                        )}
                    </div>
                    <div className="col-6 p-1">
                        {isUpdating ? (
                            <input 
                                type="test"
                                placeholder="country ..."
                                className="form-control"
                                defaultValue={props.destination.country}
                                onChange={(e: FormEvent<HTMLInputElement>) => setNewCountry(e.currentTarget.value)}
                            />
                        ) : (
                            <span>{props.destination.country}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-2 text-warning">
                {props.destination.days} days
            </div>
            <div className="col-3 p-1">
                <button className="btn btn-warning me-2" onClick={() => setIsUpdating(!isUpdating)}>{isUpdating ? "Cancel" : "Edit"}</button>
                {isUpdating ? <button className="btn btn-primary me-2" onClick={() => handleUpdate()}>Update</button> : ""}
                <button className="btn btn-danger" onClick={() => handleDelete(props.destination.id)}>Delete</button>
                {/* <button className="btn btn-danger form-control" onClick={() => deleteDestinationMutation({id: destination.id})}>Delete</button> */}
                {/* <button className="btn btn-danger form-control" onClick={() => deleteDestinationMutation(destination.id)}>Delete</button> */}
            </div>
        </div>
    );
};

export default Destination;