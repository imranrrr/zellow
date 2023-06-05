import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './PropertyTabs.css';
import Overview from './Tabs/Overview';
import FactsFeatures from './Tabs/FactsFeatures';
import PriceTaxHistory from './Tabs/PriceTaxHistory';
import MonthlyCost from './Tabs/MonthlyCost';
import DownPayment from './Tabs/DownPayment';
import NearbySchools from './Tabs/NearbySchools';
import Neighborhood from './Tabs/Neighborhood';
import HomesForYou from './Tabs/HomesForYou';
import SimilarHomes from './Tabs/SimilarHomes';
import LocalLegalProtections from './Tabs/LocalLegalProtections';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PropertyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant='scrollable' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Overview" style={{ textTransform: "unset" }} {...a11yProps(0)} />
          <Tab label="Facts and features" style={{ textTransform: "unset" }} {...a11yProps(1)} />
          <Tab label="Price and tax history" style={{ textTransform: "unset" }} {...a11yProps(2)} />
          <Tab label="Monthly cost" style={{ textTransform: "unset" }} {...a11yProps(3)} />
          <Tab label="Down payment assistance" style={{ textTransform: "unset" }} {...a11yProps(4)} />
          <Tab label="Nearby schools" style={{ textTransform: "unset" }} {...a11yProps(5)} />
          <Tab label="Similar homes" style={{ textTransform: "unset" }} {...a11yProps(6)} />
          <Tab label="Neighborhood" style={{ textTransform: "unset" }} {...a11yProps(7)} />
          <Tab label="Local legal protections" style={{ textTransform: "unset" }} {...a11yProps(8)} />
          <Tab label="Homes for you" style={{ textTransform: "unset" }} {...a11yProps(9)} />
        </Tabs>
      </Box>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={1}>
        <FactsFeatures />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={2}>
        <PriceTaxHistory />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={3}>
        <MonthlyCost />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={4}>
        <DownPayment />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={5}>
        <NearbySchools />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={6}>
        <SimilarHomes />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={7}>
        <Neighborhood />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={8}>
        <LocalLegalProtections />
      </TabPanel>
      <TabPanel style={{ overflowY: "auto", maxHeight: "310px" }} value={value} index={9}>
        <HomesForYou />
      </TabPanel>
    </Box >
  );
}