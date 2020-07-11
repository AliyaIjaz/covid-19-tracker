import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import BarGraph from './bar';
import PieChart from './Pie';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    fontWeight: 'bold',
    marginTop: '20px',
  },
});


export default function CountryData(props) {
  const classes = useStyles();
  const classesTypography = useStylesTypography();

  //{countryData && countryData.countrydata && countryData.countrydata[0].total_active_cases}

  return (
    <div className={classes.root}>
      <div style={{ color: 'red' }}>
        <Typography variant="h2" gutterBottom>
          {props.title}
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className={classesTypography.root} style={{ color: 'blue' }}>
              <Typography variant="subtitle2" gutterBottom>
                Total Cases
              </Typography>
            </div>
            <div className={classesTypography.root} style={{ color: 'blue' }}>
              <Typography variant="h6" gutterBottom>
                <CountUp start={0} duration = {2} end = {props.totalCases} separator = ',' />
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className={classesTypography.root} style={{ color: 'orange' }}>
              <Typography variant="subtitle2" gutterBottom>
                Total Active
              </Typography>
            </div>
            <div className={classesTypography.root} style={{ color: 'orange' }}>
              <Typography variant="h6" gutterBottom>
              <CountUp start={0} duration = {2} end = {props.totalActive} separator = ',' />
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className={classesTypography.root} style={{ color: 'green' }}>
              <Typography variant="subtitle2" gutterBottom>
                Total Recovered
              </Typography>
            </div>
            <div className={classesTypography.root} style={{ color: 'green' }}>
              <Typography variant="h6" gutterBottom>
              <CountUp start={0} duration = {2} end = {props.totalRecovered} separator = ',' />
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className={classesTypography.root} style={{ color: 'red' }}>
              <Typography variant="subtitle2" gutterBottom>
                Total Deaths
              </Typography>
            </div>
            <div className={classesTypography.root} style={{ color: 'red' }}>
              <Typography variant="h6" gutterBottom>
              <CountUp start={0} duration = {2} end = {props.totalDeaths} separator = ',' />
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classesTypography.root} style={{ color: 'blue' }}>
              <Typography variant="subtitle2" gutterBottom>
                Total New Cases Today
              </Typography>
            </div>
            <div className={classesTypography.root} style={{ color: 'blue' }}>
              <Typography variant="h6" gutterBottom>
              <CountUp start={0} duration = {2} end = {props.totalNewCasesToday} separator = ',' />
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classesTypography.root} style={{ color: 'red' }}>
              <Typography variant="subtitle2" gutterBottom>
                Total Deaths Today
              </Typography>
            </div>
            <div className={classesTypography.root} style={{ color: 'red' }}>
              <Typography variant="h6" gutterBottom>
              <CountUp start={0} duration = {2} end = {props.totalDeathsToday} separator = ',' />
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper>
            <div>
              <BarGraph 
                tc = {props.totalCases}
                tr = {props.totalRecovered}
                td = {props.totalDeaths}
                />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <div>
              <PieChart 
               tc = {props.totalCases}
               tr = {props.totalRecovered}
               td = {props.totalDeaths}
               />
            </div>
          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}
