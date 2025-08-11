import NoImageThumbnail from "../../components/common/NoImageThumbnail";

const CardItem = ({ data, onClick }) => {

    console.log(data)

    return (
        <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={() => onClick()}>
            <div>
                <img src={NoImageThumbnail()} alt={`${data?.name}-thumbnail`} />
            </div>

            <div className="p-4">
                <h3>{data.name}</h3>
            </div>
        </div>
    );
};

export default CardItem;
