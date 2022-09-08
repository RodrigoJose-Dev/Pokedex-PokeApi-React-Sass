import "../styles/components/pagination.sass";

const Pagination = ({
    currentPage,
    totalPages,
    onPreviousPage,
    onNextPage,
}) => {
    return (
        <div className="container">
            <button onClick={onPreviousPage}>◀</button>
            <div>
                {currentPage} de {totalPages}
            </div>
            <button onClick={onNextPage}>▶</button>
        </div>
    );
};

export default Pagination;
