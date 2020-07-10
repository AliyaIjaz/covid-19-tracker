import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountryData from './CountryData';
import {FormControl, NativeSelect} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    title: {
        textAlign: 'left'
    },
    table: {
        height: 450,
        overflowY: 'scroll',
        display: 'block'
    }
}));

export default function AllCountries() {
  
    const [allCountryData, setAllCountryData] = useState([{}]);
    const [dropDownValue, setDropDownValue] = useState("PK");


    useEffect( () => {
      async function fetchAllCountryData() {
        const apiResponse = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
        const apiData = await apiResponse.json();
        setAllCountryData(Object.values(Object.values(apiData.countryitems)[0]));
        console.log("myData",Object.values(Object.values(apiData.countryitems)[0]));
      }
      fetchAllCountryData();
    },[])

    let title = " ";
    let totalCases = 0;
    let totalActive = 0;
    let totalRecovered = 0;
    let totalDeaths = 0;
    let totalNewCasesToday = 0;
    let totalDeathsToday = 0;

    for(var i=0; i<allCountryData.length; i++) {
        if (allCountryData[i].code === dropDownValue) {
           title = allCountryData[i].title;
           totalCases = allCountryData[i].total_cases;
           totalActive = allCountryData[i].total_active_cases;
           totalRecovered = allCountryData[i].total_recovered;
           totalDeaths = allCountryData[i].total_deaths;
           totalNewCasesToday = allCountryData[i].total_new_cases_today;
           totalDeathsToday = allCountryData[i].total_new_deaths_today;
           break;
        }
    }

    const classes = useStyles();
    let allCountries = [];
    allCountries = allCountryData.map((key, ind)=> 
    <option key = {allCountryData[ind].title} value = {allCountryData[ind].code}>{allCountryData[ind].title}</option>
     );
    
    return (
        <div className={classes.root}>
            <FormControl>
                <NativeSelect onChange={e=>setDropDownValue(e.currentTarget.value)}>
                    {allCountries}
                </NativeSelect>
                </FormControl>
                <div></div>
                <CountryData 
                   title = {title}
                   totalCases = {totalCases}
                   totalActive = {totalActive}
                   totalRecovered = {totalRecovered}
                   totalDeaths = {totalDeaths}
                   totalNewCasesToday = {totalNewCasesToday}
                   totalDeathsToday = {totalDeathsToday}
                />

        </div>
    );
}
    
        
