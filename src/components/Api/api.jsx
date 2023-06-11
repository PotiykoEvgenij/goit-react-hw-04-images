import axios from 'axios';

const API_KEY = '35640714-89aec83ac50fbde9100978e6e';

export const FetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`
    );

    return response.data.hits.map((image) => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};