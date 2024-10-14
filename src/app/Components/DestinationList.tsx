import React, { FormEvent } from "react";
import { useGetAllDestinationsQuery } from "../../api/DestinationApi";
import { useDeleteDestinationMutation } from "../../api/DestinationApi";

const DestinationList = () => {
    const { data, isLoading, isSuccess, isError, /*error*/ } = useGetAllDestinationsQuery(''); // work on error pending
    const [deleteDestinationMutation] = useDeleteDestinationMutation();
    const handleDelete = (id: string) => {
        deleteDestinationMutation(id);
    };
    let content;
    if (isLoading) {
        content = <p>Loading ...</p>;
    } else if (isSuccess) {
        // console.log(data);
        // content = <p>Success ...</p>;
        content = data.map((destination: any) => {
            return (
                <div key={destination.id} className="row py-1" style={{ borderBottom: "1px solid #333", borderTop: "1px solid #333" }}>
                    <div className="col-1 offset-2">
                        {destination.id}
                    </div>
                    <div className="col-2 offset-1">
                        {destination.city}, {destination.country}
                    </div>
                    <div className="col-2 text-warning">
                        {destination.days} days
                    </div>
                    <div className="col-2">
                        <button className="btn btn-danger form-control" onClick={() => handleDelete(destination.id)}>Delete</button>
                        {/* <button className="btn btn-danger form-control" onClick={() => deleteDestinationMutation({id: destination.id})}>Delete</button> */}
                        {/* <button className="btn btn-danger form-control" onClick={() => deleteDestinationMutation(destination.id)}>Delete</button> */}
                    </div>
                </div>
            );
        });
    } else if (isError) {
        content = <p>{/*error*/}Error</p>;
    }
    return (
        <div className="pt-3">{content}</div>
    );
};

export default DestinationList;