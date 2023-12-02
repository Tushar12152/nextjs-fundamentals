
const DynamicPage = ({params,searchParams}) => {

    console.log(params);

    return (
        <div>
            <h1>this is dynamic page : {params.id}</h1>
            <h1>search by : {searchParams.category}</h1>
            <h1>search by price : {searchParams.price}</h1>
        </div> 
    );
};

export default DynamicPage;