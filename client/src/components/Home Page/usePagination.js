import { useState } from "react";

const usePagination = (countries) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return {
    setCurrentPage,
    currentPage,
    handleNextPage,
    handlePrevPage,
  };
};

export default usePagination;