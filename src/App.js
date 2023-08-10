import './App.css';
import Cards from './Components/Cards';

const produits = [
  {
    id: 1,
    title: 'Phone Samsung',
    price: '1000 DH',
    thumbnail : '960x0.jpg'
  },
  {
    id: 2,
    title: 'Phone Samsung',
    price: '2190 DH',
    thumbnail : '960x0.jpg'
  },
  {
    id: 3,
    title: 'Phone Samsung',
    price: '3640 DH',
    thumbnail: '960x0.jpg'
  },
  {
    id: 4,
    title: 'Phone Samsung',
    price: '1270 DH',
    thumbnail: '960x0.jpg'
  },
];

function App() {
  return (
    <Cards produits={produits} />
  );
}

export default App;
