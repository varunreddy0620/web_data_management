import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from './Table'

function BuyLands() {
    const cols = [
        "land_id",
        "location",
        "area",
        "projectsdone",
        "expenses",
        "income",
        "marketvalue",
        "trials",
        "personemail",
        "forsale",
        
      ];
    
     
      const [rows, setRows] = useState([]);
    
    //   const [create_project_variable, setCreate_project_variable] = useState(false);
    //   const [show_land, setShow_land] = useState(false);
    //   const [open, setOpen] = React.useState(false);
    //   const [selected_row, setSelectedRow] = useState({});
      useEffect(() => {
        getData();
       
      }, []);
      const getData = () => {
        axios.get("https://phpbackendcode.herokuapp.com/lands.php").then((res) => {
          console.log("rows", res.data);
          setRows(res.data);
        });
      };
      
    //   const createproject = () => {
    //     setOpen(true);
    //   };
    //   const handleClose = () => {
    //     setOpen(false);
    //   };
      const viewDetails = () => {
        // setShow_land(true);
      };
    //   const create_land = () => {
    //     setOpen(true);
    //   };
    
      return (
        <div className="family_details">
          {/* {!show_land && (
            <>
              <div className="Create">
                {open && (
                  <LandModal
                    getData={getData}
                    open={open}
                    createproject={createproject}
                    handleClose={handleClose}
                  ></LandModal>
                )}
                <button style={{ cursor: "pointer" }} onClick={create_land}>
                  {" "}
                  + Add New Property
                </button>
              </div> */}
              <Table columns={cols} rows={rows} viewRow={viewDetails}></Table>
            {/* </> */}
        {/* //   )} */}
        {/* //   {show_land && <Land_des></Land_des>} */}
        </div>
      );
    }
    
    export default BuyLands;
    