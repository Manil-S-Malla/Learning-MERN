import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to= "/" className= "navbar-brand">XRcise Tracker</Link>
           

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class= "nav-item">
                        <Link to= "/edit/:id" className= "nav-link">Edit Exercise</Link> 
                    </li>
                    <li className= "nav-item">
                        <Link to= "/create" className= "nav-link">Create Exercise</Link> 
                    </li>
                    <li className= "nav-item">
                        <Link to= "/user" className= "nav-link">Create User</Link> 
                    </li>
               
                </ul>
              
            </div>
        </nav>
    );
}

export default NavBar;
