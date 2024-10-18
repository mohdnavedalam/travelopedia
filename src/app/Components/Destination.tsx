import { useDeleteDestinationMutation } from "../../api/DestinationApi";

const Destination = (props: any) => {
    const [deleteDestination] = useDeleteDestinationMutation();
    const handleDelete = (id: string) => {
        deleteDestination(id);
    };
    return (
        <div key={props.destination.id} className="row py-1" style={{ borderBottom: "1px solid #333", borderTop: "1px solid #333" }}>
            <div className="col-1 offset-2">
                {props.destination.id}
                &nbsp; &nbsp; 
                {props.key}
            </div>
            <div className="col-2 offset-1">
                {props.destination.city}, {props.destination.country}
            </div>
            <div className="col-2 text-warning">
                {props.destination.days} days
            </div>
            <div className="col-2">
                <button className="btn btn-danger form-control" onClick={() => handleDelete(props.destination.id)}>Delete</button>
                {/* <button className="btn btn-danger form-control" onClick={() => deleteDestinationMutation({id: destination.id})}>Delete</button> */}
                {/* <button className="btn btn-danger form-control" onClick={() => deleteDestinationMutation(destination.id)}>Delete</button> */}
            </div>
        </div>
    );
};

export default Destination;