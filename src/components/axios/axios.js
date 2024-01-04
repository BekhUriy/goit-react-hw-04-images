import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://pixabay.com/api/?q=cat&page=1&key=40498232-0e7dac35b6ba9fe0d736e222d&image_type=photo&orientation=horizontal&per_page=12'
    );
    console.log(response.data);
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
};

export default fetchData;
