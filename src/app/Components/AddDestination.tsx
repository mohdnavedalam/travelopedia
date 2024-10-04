const AddDestination = () => {
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
                        />
                    </div>
                    <div className="col-5 p-1">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="enter country ..."
                        />
                    </div>
                    <div className="col-2 p-1">
                        <button className="btn btn-success form-control">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddDestination;