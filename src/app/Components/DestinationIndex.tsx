import AddDestination from "./AddDestination";
import DestinationList from "./DestinationList";
import PeopleList from "./PeopleList";

const DestinationIndex = () => {
    return (
        <div className="text-white-50">
            <h2 className="text text-center">Travel List</h2>
            <AddDestination />
            <DestinationList />
            <PeopleList />
        </div>
    );
};

export default DestinationIndex;