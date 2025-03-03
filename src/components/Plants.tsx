import React from 'react';
import '../styles/Plant.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface PlantCardProps {
    plant:{
        id: number;
        name: string;
        description: string;
        image: string;
        careGuide: string;
};
onClick: (planmt:any) => void;
}

const Plants: React.FC<PlantCardProps> = ({ plant, onClick }) => {
    return (
       
        <Card style={{ width: '18rem' }} className="border-dark">
            <Card.Img variant="top" src={plant.image} alt={plant.name} className="img-thumbnail" />
            <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>{plant.description}</Card.Text>
                <Button variant="primary" onClick={() => onClick(plant)}>Water Guide</Button>
            </Card.Body>
        </Card>
        
    );
};

export default Plants;
