import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {
    return ( 
        <Navbar>
            <Navbar.Brand href="#home">Social
            <small className='text-muted'>Feed</small></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;