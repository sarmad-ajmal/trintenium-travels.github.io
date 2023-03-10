import { Box, Paper, Grid, Typography, Stack, IconButton, CircularProgress } from '@mui/material'
import { Search } from '@mui/icons-material'

import { DatePicker, AirportsAutocomplete } from '../../common/components';
import useFlights from './index.hook';
import FlightsList from './flights_list';

const Flights = () => {
  const { loading, flights, flightsFetchedOnce, onChangeDate, onChangeFromAirport, onChangeToAirport, onFetch } = useFlights()
  return <Paper elevation={0} style={{ width: '100%' }}>
    <Typography variant='h4'>
      Flight Planner
    </Typography>
    <Stack spacing={2} alignContent="center" justifyContent={'center'}>
      <Grid container spacing={1} >
        <Grid item sm={12} md={3} >

          <AirportsAutocomplete label={'From'} onChange={onChangeFromAirport} />
        </Grid>
        <Grid item sm={12} md={3}>

          <AirportsAutocomplete label="To" onChange={onChangeToAirport} />
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

    {!loading && !flights.length && flightsFetchedOnce && <Box justifyContent='center' marginTop={10} display='flex'>
      <Typography variant='subtitle1'>Nothing to show</Typography>

    </Box>}
    {loading && <Box justifyContent='center' marginTop={10} display='flex'>
      <CircularProgress />
    </Box>}
    {!loading && <FlightsList flights={flights} />}
  </Paper>
}

export default Flights

