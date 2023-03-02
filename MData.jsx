import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { Row, Col,Table,ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { movieMiddleWare } from '../../Store/movieStore/movieMiddleware';

const MData=()=>{
  const [searchInput,setSearchInput]=useState("");
  const [isOpen,setIsOpen]=useState(false);
  const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(movieMiddleWare());
            return()=>{};
    },[]);

    const { movieData,isLoading } = useSelector(
      ({ movieDataReducers }) => {
        return {
          movieData: movieDataReducers?.data?.results,
          isLoading: movieDataReducers?.isLoading
        };
      }
    );

    const searchInputChange=(e)=>{
      setSearchInput(e.target.value);
    }
  
    let filteredTableData=[];
    const [items, setItems] = useState([]);
    if(movieData){
     filteredTableData = movieData.filter((row) =>
    row?.title?.toLowerCase().includes(searchInput?.toLowerCase()) || row?.release_date?.toLowerCase().includes(searchInput?.toLowerCase())
  );
}

const sortDataByEpisode=()=>{
  const sortedEpisode=[...movieData].sort((a, b) => (a.episode_id - b.episode_id));
  setItems(sortedEpisode);
}

const sortDataByYear=()=>{
 const sortedYear=[...movieData].sort((a, b) => (a.release_date - b.release_date));
  setItems(sortedYear);
}    
const toggle=()=>{
setIsOpen(!isOpen);
}

    return(
        <>
        <Row>
        <Col xs={2}>
        <ButtonDropdown isOpen={isOpen} toggle={toggle} color="white">
  <DropdownToggle caret size="sm">
    Sort By
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem onClick={sortDataByEpisode}>Episode</DropdownItem>
    <DropdownItem onClick={sortDataByYear}>Year</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
        </Col>
          <Col xs={10}>
          <input type="search" style={{width:'100%'}} value={searchInput} onChange={searchInputChange} placeholder="search" />
          </Col>
        </Row>
        {isLoading && <b>Loading....</b>}
        <Row>
          <Col xs={8}>
          <Table responsive borderless>
            <tbody>
              {items?.length ? items.map((data) => {
                return (
                  <tr key={data.episode_id}>
                  <td>Episode {data.episode_id}</td>
                  <th>
                    {data.title}
                  </th>
                  <td>{data.release_date}</td>
                  </tr>
                );
              }) : filteredTableData.map((data) => {
                return (
                  <tr key={data.episode_id}>
                  <td>Episode {data.episode_id}</td>
                  <th>
                    {data.title}
                  </th>
                  <td>{data.release_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          </Col>
          <Col xs={4}>
           <div>No movie selected</div>
          </Col>
        </Row>
        
  </>
    )
}

export default MData;
