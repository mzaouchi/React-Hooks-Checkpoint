import { Button,Modal,Form, Container } from 'react-bootstrap';
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

function AddCard({film,setFilm}){
   
    const [titlef,setTitlef] = useState('');
    const [descf,setDescf] = useState('');
    const [photof,setPhotof] = useState('');
    const [ratingf,setRatingf] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);

    const handleAdd =()=>{
        setFilm(
             [...film,{title : titlef,description : descf,posterURL : photof,rating : ratingf }]
        );
        setShow(false);

    }

    const ratingChanged = (newRating) => {
        setRatingf(newRating);
      };

    return(
        <div>
            <Container>
                <Button variant="primary" onClick={handleShow}>
                    Add movie
                </Button>
            </Container>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Add movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitlef(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescf(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control type="text" placeholder="Enter the path" onChange={(e)=>setPhotof(e.target.value)} />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rating</Form.Label>
                            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>handleAdd()}>
                         Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
       
    )
}

export default AddCard;