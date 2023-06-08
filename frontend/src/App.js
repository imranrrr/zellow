import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "./components/Listing/Index";
import Search from "./components/Listing/Search/Index";
import Favorite from "./components/Favorite/Index";
import AddListing from "./components/Listing/ListingForm/AddListing";
import UpdateListing from "./components/Listing/ListingForm/UpdateListing";
import RequestedTours from "./components/RequestedTours/index"
import UserList from "./components/Listing/UserListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listing />} />

        <Route path="/sell" element={<AddListing />} />
        <Route path="/update" element={<UpdateListing />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/requested_tour" element={<RequestedTours/>}/>
        <Route path="/user_list" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
