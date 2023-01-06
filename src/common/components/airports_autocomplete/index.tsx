import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Airport, IAirporMenuItem, IAirportAutocomplete } from './interface';
const defaultProps = {
  options: [],
  getOptionLabel: (option: any) => option.title,
};
const AutocompleteAirports = (props: IAirportAutocomplete) => {
  const { label = '', onChange } = props
  const [airports, setAirports] = useState<IAirporMenuItem[]>([])
  const [loading, setLoading] = useState(false)

  const onChangeInput = (e: any) => {
    const _value = e.target.value
    const value = _value.trim()
    if (value.length >= 3) {
      fetchAirport(value)
    }
  }

  const onSelect = (e: any, v: any) => {
    if (v == null) {
      onChange(null)
      return
    }
    const { id } = v as IAirporMenuItem
    onChange(id)
  }

  const fetchAirport = async (airport: string) => {
    try {
      setLoading(true)
      const response = await fetch(`https://dev.charterpad.com/serve/api/airport/${airport}/keyword`)
      const json = await response.json();
      const airports: Airport[] = json.result
      const _airports: IAirporMenuItem[] = airports.map(cAirport => {
        return ({ title: cAirport.name, id: cAirport.id } as IAirporMenuItem)
      })
      setAirports(_airports)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

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
