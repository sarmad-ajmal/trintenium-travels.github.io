import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import useAirportsAutocomplete from './index.hook';
import { IAirportAutocomplete } from './interface';

const defaultProps = {
  getOptionLabel: (option: any) => option.title,
};
const AutocompleteAirports = (props: IAirportAutocomplete) => {
  const { label = '' } = props
  const { airports, loading, onChangeInput, onSelect
  } = useAirportsAutocomplete(props)

  return (<Autocomplete
    {...defaultProps}
    options={airports}
    autoComplete
    includeInputInList
    loading={loading}
    onChange={onSelect}

    renderInput={(params) => (
      <TextField {...params} label={label} variant="standard" onChange={onChangeInput} />
    )}
  />)
}
export default AutocompleteAirports
