import Card from "../components/shared/Card";
import {Link} from 'react-router-dom';


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>A React JS app to take reviews on products and services used</p>
        <p>Version 1.0.0</p>

        <p>
        <Link to='/about'>Home Page</Link>
          {/* <Link to={{
            pathname: '/about',
            search: '?sort=name',
            hash: '#about'
          }}>Home Page</Link> */}
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
