const timelineItems = document.querySelectorAll('.timeline-item');
const imageElement = document.getElementById('timeline-image');

// Array of image sources (make sure to update with your actual image paths)
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg'
];

// Add click event listeners to timeline items
timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    const index = item.getAttribute('data-index');
    imageElement.src = images[index];
    imageElement.style.display = 'block';
  });
});

