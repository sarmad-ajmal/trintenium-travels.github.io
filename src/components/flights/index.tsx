import React, { useRef, useState } from 'react';
import queryString from 'query-string';
import { Paper, Card, Grid, Typography, Stack, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import AutocompleteAirports from '../../common/components/airports_autocomplete';
import { DatePicker } from '../../common/components';
import { ITrip } from './interface';
const Flights = () => {
  const [loading, setLoading] = useState(false)
  const [flights, setFlights] = useState([])
  const fromRef = useRef<number | null>(null)
  const toRef = useRef<number | null>(null)
  const dateRef = useRef<string>('')

  const onChangeFromAirport = (id: number | null) => {
    fromRef.current = id
  }
  const onChangeToAirport = (id: number | null) => {
    toRef.current = id
  }
  const onChangeDate = (date: string) => {
    dateRef.current = date
  }
  const onFetch = async () => {
    if (!dateRef.current  && fromRef.current == null) {
      return
    }
    try {
      setLoading(true)
      const payload = queryString.stringify({
        departureAirportId: fromRef.current,
        arrivalAirport: toRef.current,
        etd: dateRef.current
      })
      const response = await fetch(`https://dev.charterpad.com/serve/api/trip/search?${payload}`)
      const json = await response.json();
      const trips = json.result.trips
      setFlights(trips)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  return <Paper elevation={0} style={{ width: '100%' }}>
    <Typography variant='h4'>
      Flight Planner
    </Typography>
    <Stack spacing={2} alignContent="center" justifyContent={'center'}>
      <Grid container spacing={1} >
        <Grid item sm={12} md={3} >

          <AutocompleteAirports label={'From'} onChange={onChangeFromAirport} />
        </Grid>
        <Grid item sm={12} md={3}>

          <AutocompleteAirports label="To" onChange={onChangeToAirport} />
        </Grid>
        <Grid item sm={8} md={3}>
          <DatePicker onChange={onChangeDate} />
        </Grid>
        <Grid item sm={1} md={1} >
          <IconButton onClick={onFetch} color='primary' disabled={loading}>
            <Search />
          </IconButton>
        </Grid>
      </Grid>
      <Grid ></Grid>
    </Stack>
    <FlightsList flights={flights} />
  </Paper>
}

export default Flights

const FlightsList = ({ flights }: { flights: ITrip[] }) => {

  return <Grid container spacing={3} rowSpacing={3}>
    {flights.map(cFlight => <Grid item sm={6} md={4}>
      <Card variant="outlined" style={{ padding: 10, minHeight: 200, }}>
        <Typography variant='h5'> Title</Typography>
        <Typography variant='body2'>
          {cFlight.title}
        </Typography>
        <Typography variant='h5'> Category</Typography>
        <Typography variant='body2'> {cFlight?.tripCategory?.name}</Typography>
      </Card></Grid>)}
  </Grid>
}