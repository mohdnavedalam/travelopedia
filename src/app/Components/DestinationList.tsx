import React from "react";
import { useGetAllDestinationsQuery } from "../../api/DisplayApi";

const DestinationList = () => {
    const {data, isLoading, isSuccess, isError, /*error*/} = useGetAllDestinationsQuery(''); // wrok on error pending
    let content;
    if (isLoading) {
        content = <p>Loading ...</p>;
    } else if (isSuccess) {
        // console.log(data);
        // content = <p>Success ...</p>;
        content = data.map((destination: any) => {
            return (
                <article key={destination.id}>
                    <div className="text-center text-info p-2">
                        <div>
                            {destination.city}, {destination.country} - {destination.days} days
                        </div>
                    </div>
                </article>
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