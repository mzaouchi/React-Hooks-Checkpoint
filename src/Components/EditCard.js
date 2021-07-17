import { Button,Modal,Form, Container } from 'react-bootstrap';
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

function EditCard({el,film,setFilm,i}){

    const [titlef,setTitlef] = useState(el.title);
    const [descf,setDescf] = useState(el.description);
    const [photof,setPhotof] = useState(el.posterURL);
    const [ratingf,setRatingf] = useState(el.rating);

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);

    const ratingChanged = (newRating) => {
        setRatingf(newRating);
      };

      const handleEdit =(a)=>{
        setFilm(
            
            film.map((el,i)=>a===i ? {...el,title : titlef,description : descf,posterURL : photof,rating : ratingf}: el)
        );
        setShow(false);

    }
    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
                    Edit Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={titlef} placeholder="Enter title"  onChange={(e)=>setTitlef(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={descf} placeholder="Enter description" onChange={(e)=>setDescf(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control type="text" value={photof} placeholder="Enter the path" onChange={(e)=>setPhotof(e.target.value)} />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rating</Form.Label>
                            <ReactStars count={5} value={ratingf} onChange={ratingChanged} size={24} activeColor="#ffd700"/>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>handleEdit(i)}>
                         Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditCard;