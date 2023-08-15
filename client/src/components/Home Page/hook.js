import { useState } from "react";
import { useDispatch } from "react-redux";
import { ord_by_continent, ord_by_activity, sortCountries } from "../../redux/actions";

const useContinentChange = () => {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedActivity, setActivityChange] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [orderDirection, setOrderDirection] = useState("asc");
  const dispatch = useDispatch();

  const handleContinentChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedContinent(selectedValue);
    dispatch(ord_by_continent(selectedValue));
  };

  const handleActivityChange = (event) => {
    const selectedValue = event.target.value;
    setActivityChange(selectedValue);
    dispatch(ord_by_activity(selectedValue));
  };

  const handleOrderByChange = (event) => {
    const selectedValue = event.target.value;
    setOrderBy(selectedValue);
    dispatch(sortCountries(selectedValue, orderDirection));
  };

  const handleOrderDirectionChange = (event) => {
    const selectedValue = event.target.value;
    setOrderDirection(selectedValue);
    dispatch(sortCountries(orderBy, selectedValue));
  };

  return {
    selectedContinent,
    handleContinentChange,
    selectedActivity,
    handleActivityChange,
    orderBy,
    handleOrderByChange,
    orderDirection,
    handleOrderDirectionChange,
  };
};

export default useContinentChange;
