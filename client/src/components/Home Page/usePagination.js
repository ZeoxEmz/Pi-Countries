import { useState } from "react";
import { useDispatch } from "react-redux";
import {get_countries} from "../../redux/actions"

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch()

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(get_countries(currentPage + 1))
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    dispatch(get_countries(currentPage - 1))
  };

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
  };
};

export default usePagination;