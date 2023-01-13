import { Card, Grid, Typography } from '@mui/material'
import { PLANE_IMG } from './constants';

import { ITrip } from './interface';
const FlightsList = ({ flights }: { flights: ITrip[] }) => {

  return <Grid container spacing={3} rowSpacing={3}>
    {flights.map(cFlight => <Grid item sm={6} md={4} key={cFlight.id}>
      <Card variant="outlined" style={{ padding: 10, height: 180, }}>
        <img src={PLANE_IMG} alt='' height={100} width='100%' style={{ objectFit: 'cover' }} />
        <Typography variant='h5'>  {cFlight.title}</Typography>

        <Typography variant='subtitle1'> {cFlight?.tripCategory?.name}</Typography>
      </Card></Grid>)}
  </Grid>
}

export default FlightsList

