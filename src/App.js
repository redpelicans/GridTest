import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FlagIcon from './FlagIcon';

const datas = [
  {
    firstname: 'Thomas',
    lastname: 'Tridon',
    country: 'fr',
    phoneNumber: '06 00 00 00 00',
    mail: 'thomas.tridon@redpelicans.com',
    assets: [
      'UI/UX',
      'ReactJS',
      'NodeJS'
    ],
    status: 'Pending',
    rating: 5,
    reporter: {
      firstname: 'Eric',
      lastname: 'Basley'
    }
  }
];

const App = () => {
  return (
    <Grid container>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          avatar={
            <Avatar>
              <Typography>TT</Typography>
            </Avatar>
          }
          title={
            <Fragment>
              <Typography>Thomas Tridon</Typography>
              <FlagIcon
                code='fr'
              />
              <Typography>PhoneNumber</Typography>
              <Link underline='always'>Mail</Link>
            </Fragment>
          }
        />
        <CardContent spacing={8}>
          <Grid container spacing={8}>
            <Grid item>
              <Chip color='primary' label='UI/UX' variant='outlined' />
            </Grid>
            <Grid item>
              <Chip color='primary' label='ReactJS' variant='outlined' />
            </Grid>
            <Grid item>
              <Chip color='primary' label='NodeJS' variant='outlined' />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Button
            fullWidth
            variant='contained'
          >
            <Typography>
              Pending
            </Typography>
          </Button>
        </CardContent>
        <CardActions>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item>
              <Typography>Eric Basley</Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default App;
