import { useGetAllPeopleQuery } from "../../api/PeopleApi";

const PeopleList = () => {
    const { data, isLoading, isSuccess, isError } = useGetAllPeopleQuery('');
    let content;
    if (isLoading) {
        content = <p>Loading ...</p>;
    } else if (isSuccess) {
        content = data.map((people: any) => {
            console.log(people)
            return (
                <article key={people.id}>
                    <div className="text-center text-info p-2">
                        <div>
                            {people.name} - {people.city}
                        </div>
                    </div>
                </article>
            )
        })
    } else if (isError) {
        content = <p>Error</p>;
    }
    return (
        <div className="pt-3">{content}</div>
    );
};

export default PeopleList;