import "../styles/components/pagination.sass";

const Pagination = ({
    currentPage,
    totalPages,
    onPreviousPage,
    onNextPage,
}) => {
    return (
        <div id="container">
            <button id="left-btn" onClick={onPreviousPage}>
                ◀
            </button>
            <>
                {currentPage} de {totalPages}
            </>
            <button id="right-btn" onClick={onNextPage}>
                ▶
            </button>
        </div>
    );
};

export default Pagination;
