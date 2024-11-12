import './App.css';
import { Banner } from './Banner/Banner';
import { Carousel } from './Carousel/Carousel';
import { Footer } from './Footer/Footer';
import { Subscribe } from './SubscribeContainer/Subscribe';
import { Comment } from './Comment/Comment';

function App() {
  return (
    <div>
      <Banner />
      <Carousel />
      <Subscribe />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;