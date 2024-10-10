import { useGetAllPeopleQuery } from "../../api/DisplayApi";

const PeopleList = () => {
    const {data, isLoading, isSuccess, isError} = useGetAllPeopleQuery('');
    if (isLoading) {
        return <p>Loading ...</p>
    } else if (isSuccess) {
        return (
            <div>
                {data.map((people: any) => {
                    {console.log(people)}
                    <article key = {people.id}>
                        <div className="text-center text-info p-2">
                            <div>
                                {people.name} - {people.city}
                            </div>
                        </div>
                    </article>
                })}
            </div>
        );
    } else if (isError) {
        return <p>Error</p>;
    }
};

export default PeopleList;