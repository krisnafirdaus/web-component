import React from 'react';
import Autocomplete from './components/Autocomplete/Autocomplete';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import RatingWidget from './components/RatingWidget/RatingWidget';
import Tooltip from './components/Tooltip/Tooltip';
import photos from "../images.json";

import "./styles.css";

const App: React.FC = () => {
  const suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <div className="App">
			<div className='flex'>
				<h1>Autocomplete Demo</h1>
				<Autocomplete suggestions={suggestions} />
			</div>
			<div className='flex'>
				<h1>Photo Gallery</h1>
				<PhotoGallery photos={photos} />
			</div>

			<div className='flex'>
				<h1>Image Carousel</h1>
				<ImageCarousel images={photos} />
			</div>

			<div className='flex'>
				<h1>Rating Widget</h1>
				<RatingWidget maxRating={5} />
			</div>

			<div className='flex mb-30'>
				<h1>Tooltip</h1>
				<Tooltip text="Ini adalah tooltip" position="bottom">
					<button>Hover me!</button>
				</Tooltip>
			</div>
    </div>
  );
}

export default App;
