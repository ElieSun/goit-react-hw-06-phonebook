import { Input } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';


export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const handleChange = evt => {
        dispatch(setFilter(evt.target.value));
    };

    return(
        <>
        <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            placeholder='Search...'
        />
        </>
    )
}
