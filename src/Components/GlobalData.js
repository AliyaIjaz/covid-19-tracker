import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';




const useStyles = makeStyles((theme) => ({
  root: {
   display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
      padding:30,
    },
  },
}));

const useStylesTypography = makeStyles({
  root1: {
    width: '100%',
    maxWidth: 500,
    color: 'blue',
    fontWeight: 'bold',
    textAlign:"center",
  },
  root2: {
    width: '100%',
    maxWidth: 500,
    color: 'orange',
    fontWeight: 'bold',
  },
  root3: {
    width: '100%',
    maxWidth: 500,
    color: 'green',
    fontWeight: 'bold',
  },
  root4: {
    width: '100%',
    maxWidth: 500,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default function GlobalData() {
  const classes = useStyles();
  const classesTypography = useStylesTypography();

  const [globalData, setGlobalData] = useState();
  const [dataLoding, setDataLoading] = useState(false);

  useEffect( () => {
    setDataLoading(true);
    async function fetchGlobalData() {
      const apiResponse = await fetch("https://api.thevirustracker.com/free-api?global=stats");
      const apiData = await apiResponse.json();
      console.log(apiData);
      setGlobalData(apiData);
      setDataLoading(false);
    }
    fetchGlobalData();
  },[])
  const loading = 'Loading...';
  
  if(dataLoding) {
    return (
      <div className={classes.root}>
        <Paper elevation={3}>
           <div className = {classesTypography.root1}>
              <Typography variant="h4" gutterBottom>
                 {loading}
               </Typography>
              <Typography variant="subtitle2" gutterBottom>
                  Total Cases Of Cronavirus Globally
              </Typography>
           </div>
        </Paper>
  
        <Paper elevation={3}>
           <div className = {classesTypography.root2}>
              <Typography variant="h4" gutterBottom>
                {loading}
               </Typography>
              <Typography variant="subtitle2" gutterBottom>
                 Total Active cases
              </Typography>
           </div>
        </Paper>
  
        <Paper elevation={3}>
           <div className = {classesTypography.root3}>
              <Typography variant="h4" gutterBottom>
               {loading}
               </Typography>
              <Typography variant="subtitle2" gutterBottom>
                 Total Recovered
              </Typography>
           </div>
        </Paper>
  
        <Paper elevation={3}>
           <div className = {classesTypography.root4}>
              <Typography variant="h4" gutterBottom>
               {loading}
               </Typography>
              <Typography variant="subtitle2" gutterBottom>
                 Total Deaths
              </Typography>
           </div>
        </Paper>  
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
         <div className = {classesTypography.root1}>
            <Typography variant="h4" gutterBottom>
            <CountUp start = {0} duration={2} end = {globalData && globalData.results && globalData.results[0].total_cases} separator="," />
             </Typography>
            <Typography variant="subtitle2" gutterBottom>
               Total Cases Of Cronavirus Globally
            </Typography>
         </div>
      </Paper>

      <Paper elevation={3}>
         <div className = {classesTypography.root2}>
            <Typography variant="h4" gutterBottom>
            <CountUp start = {0} duration={2} end = {globalData && globalData.results && globalData.results[0].total_active_cases} separator="," />
              </Typography>
            <Typography variant="subtitle2" gutterBottom>
               Total Active Cases
            </Typography>
         </div>
      </Paper>

      <Paper elevation={3}>
         <div className = {classesTypography.root3}>
            <Typography variant="h4" gutterBottom>
            <CountUp start = {0} duration={2} end = {globalData && globalData.results && globalData.results[0].total_recovered} separator="," />
             </Typography>
            <Typography variant="subtitle2" gutterBottom>
               Total Recovered
            </Typography>
         </div>
      </Paper>

      <Paper elevation={3}>
         <div className = {classesTypography.root4}>
            <Typography variant="h4" gutterBottom>
              <CountUp start = {0} duration={2} end = {globalData && globalData.results && globalData.results[0].total_deaths} separator="," />
             </Typography>
            <Typography variant="subtitle2" gutterBottom>
               Total Deaths
            </Typography>
         </div>
      </Paper> 
    </div>
  );
}
