import { useGetRandomDestinationsQuery } from "../../api/RandomDestinationApi";

const RandomDestination = () => {
    const { data, isLoading, isSuccess, isError, /*error*/ } = useGetRandomDestinationsQuery(''); // work on error pending
    let content;
    if (isLoading) {
        content = <p>Loading ...</p>;
    } else if (isSuccess) {
        content = (
            <div className="text-center border p-3 ms-1">
                <h4 className="text-white-50">Random Travel Suggestion:</h4>
                {data.city}, {data.country}
            </div>
        );
    } else if (isError) {
        content = <p>{/*error*/}Error</p>;
    }
    return (
        <div className="pt-3">{content}</div>
    );
}

export default RandomDestination;