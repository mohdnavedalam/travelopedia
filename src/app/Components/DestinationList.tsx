import React, { FormEvent } from "react";
import { useGetAllDestinationsQuery } from "../../api/DestinationApi";
import Destination from "./Destination";

const DestinationList = () => {
    const { data, isLoading, isSuccess, isError, /*error*/ } = useGetAllDestinationsQuery(''); // work on error pending
    
    let content;
    if (isLoading) {
        content = <p>Loading ...</p>;
    } else if (isSuccess) {
        // console.log(data);
        // content = <p>Success ...</p>;
        content = data.map((destination: any) => {
            return (
                <Destination destination={destination} key={destination.id} />
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