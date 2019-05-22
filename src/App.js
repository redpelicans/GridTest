import React, { Fragment } from 'react';
import { map } from 'ramda';
import initials from 'initials';
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

const App = ({ classes, datas }) => {
  return (
    <Grid container justify='center' spacing={16}>{
      map(({ assets, country, firstname, lastname, mail, phoneNumber, reporter, status }) => (
        <Grid container item className={classes.root}>
          <Card className={classes.card}>
            <CardHeader
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              avatar={
                <Avatar>
                  <Typography>{initials(`${firstname} ${lastname}`)}</Typography>
                </Avatar>
              }
              title={
                <Grid container>
                  <Typography>{`${firstname} ${lastname}`}</Typography>
                  <Grid container alignItems='center' spacing={8}>
                  <Grid item>
                    <FlagIcon
                      code={country}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>{phoneNumber}</Typography>
                  </Grid>
                  </Grid>
                  <Link className={classes.link} underline='always'>{mail}</Link>
                </Grid>
              }
            />
            <CardContent className={classes.content} spacing={8}>
              <Grid container justify='center' spacing={8}>{
                map(data => (
                  <Grid item>
                    <Chip color='primary' label={data} variant='outlined' />
                  </Grid>
                ))(assets)
              }</Grid>
            </CardContent>
            <CardContent>
              <Button
                fullWidth
                variant='contained'
              >
                <Typography>
                  {status}
                </Typography>
              </Button>
            </CardContent>
            <CardActions>
              <Grid container alignItems='center' justify='space-between'>
                <Grid item>
                  <Typography>{`${reporter.firstname} ${reporter.lastname}`}</Typography>
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
      ))(datas)
    }</Grid>
  );
}

export default App;
