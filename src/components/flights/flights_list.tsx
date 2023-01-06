import { Card, Grid, Typography } from '@mui/material'

import { ITrip } from './interface';

const FlightsList = ({ flights }: { flights: ITrip[] }) => {

  return <Grid container spacing={3} rowSpacing={3}>
    {flights.map(cFlight => <Grid item sm={6} md={4} key={cFlight.id}>
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

export default FlightsList
