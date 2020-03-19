import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ImagesList = (props) => {
    return(
        props.images.map( img => 
            <div className="col-sm-3 mb-4" key={img.id}>
                <Card>
                <Card.Img variant="top" src={img.largeImageURL} style={{ height: '175px'}} />                
                <Card.Body>
                    <Card.Title>{img.type}</Card.Title>
                    <Card.Text>
                    {img.tags}
                    </Card.Text>
                    <Link to={{
                        pathname: `img/${img.id}`,
                        state: { img }
                    }}>
                        <Button variant="primary">View Details</Button></Link>
                </Card.Body>
                </Card> 
            </div> 
        )        
    )
}

export default ImagesList