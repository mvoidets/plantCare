import React from 'react';
import Plants from './components/Plants';
import Modal from './components/Modal';
import { Container, Row, Col } from 'react-bootstrap';
//import Navbar from './components/Navbar';
import './App.css';
import './styles/Navbar.css';
interface Plant {
  id: number;
  name: string;
  description: string;
  image: string;
  careGuide: string;
}


const plantGuide = [

  { id: 1, name: "Spider Plant", description: "Spider plants: Kitchen, dining room, bedroom", image: "/images/spider.jpg", careGuide:"Water daily, soil needs to be moist" },
  { id: 2, name: "Snake Plant", description: "Snake plants: living room and entry way", image: "/images/snake.jpg", careGuide:"Water once a week, soil needs to be dry between watering" },
  { id: 3, name: "Climbing Aloe", description: "Climbing aloe: Living room and bedroom", image: "/images/aloe.jpg", careGuide: "Water every 2 weeks, soil needs to be dry between watering" },
  { id: 4, name: "Philodendron vine", description: "Philodendron: Living room tv stand, side table dining area", image: "/images/philodendron.jpg" , careGuide: "Water every couple days"},
  { id: 5, name: "String of pearl", description: "String of pearls: Kithen", image: "/images/pearl.jpg", careGuide:"Do not water top side, need to place in shallow dish and fill dish with water. Place plant in dish and let sit, to soak up water." },
  { id: 6, name: "Philodendron/Spider combo", description: " Philodendron/Spider plant:Under big tv", image: "/images/philo_spider.jpg", careGuide: "Water every few days, soil can be moist and slightly dry between watering" },
  { id: 7, name: "Sago Palm", description: "Sago Palm: Front room, corner side table", image: "/images/palm.jpg", careGuide: "Water once a week, not too much water." },
  { id: 8, name: "Ivy", description: "Ivy: kitchent sink", image: "/images/ivy.jpg", careGuide: "Usually add a sip of water daily" },
  { id: 9, name: "Succulent", description: "Succulent: Kitchen sink", image: "/images/succulent.jpg", careGuide: "Water a ilittle bit, once a week."},
]

const App: React.FC = () => {
  const [selectedPlant, setSelectedPlant] = React.useState<Plant | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = (plant: any) => {
    setSelectedPlant(plant);
    setIsModalOpen(true);
  }
const closeModal = () => {
  setSelectedPlant(null);
  setIsModalOpen(false);
}
  return (
   <Container>
     {/* <Navbar /> */}
     <nav className="navbar d-flex justify-content-center align-items-center" >
        <span className="navbar-brand mb-0  ">Do not kill our plants!</span>
      </nav>
      
      <div className="app-background">
      <h1 className='title'>My Plants:</h1>
      <Row>
      {plantGuide.map(plant => (
          <Col key={plant.id} md={4} sm={6} xs={12} className="mb-4">

          <Plants plant={plant} onClick={() => openModal(plant)} />
            </Col>
        ))}

      </Row>
      <div className="plant-cards">
     
      </div>
      
      {selectedPlant && <Modal plant={selectedPlant} onClose={closeModal} />}
      </div>
    </Container>
  );
};

export default App;

