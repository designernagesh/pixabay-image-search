import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ImageDetailsView = (props) => {
    console.log(props)
    const { largeImageURL, imageWidth, imageHeight, pageURL } = props.location.state.img
    return (
        <>
            <div class="container">            
            <Card className="text-center">
                <Card.Img variant="top" src={largeImageURL} />
                <Card.Body>                
                <Card.Text>
                <p> Width: { imageWidth } Height: { imageHeight } </p>
                <p> <a href={pageURL} target="_blank" rel="noopener noreferrer">Download the Image </a></p>
                <Link to="/"><button className="btn-primary">Home</button></Link>        
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">&copy; Copyright Pixabay</small>
                </Card.Footer>
            </Card>                           
            </div>
        </>
    )
}

export default ImageDetailsView