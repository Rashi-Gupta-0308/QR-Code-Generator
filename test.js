const downloadButton = document.querySelector('.download-button');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup-overlay');
const colorOptions = document.querySelectorAll('.color-option');
const loader = document.querySelector('.loader');
const cancelButton = document.querySelector('.cancel-button');
let downloadTimeout;

// Open pop-up when download button is clicked
downloadButton.addEventListener('click', () => {
  popup.style.display = 'block';
  popupOverlay.style.display = 'block';
});

// Event listener for color options
colorOptions.forEach(colorOption => {
  colorOption.addEventListener('click', () => {
    loader.style.display = 'block'; // Show loader animation
    cancelButton.style.display = 'block'; // Show cancel button
    downloadTimeout = setTimeout(() => {
      loader.style.display = 'none'; // Hide loader animation
      cancelButton.style.display = 'none'; // Hide cancel button
      // Simulate download completion
      alert('QR code downloaded successfully!');
      closePopup();
    }, 3000);
  });
});

// Event listener for cancel button
cancelButton.addEventListener('click', () => {
  clearTimeout(downloadTimeout); // Cancel download process
  loader.style.display = 'none'; // Hide loader animation
  cancelButton.style.display = 'none'; // Hide cancel button
  closePopup(); // Close the pop-up
});

// Event listener to close pop-up when overlay is clicked
popupOverlay.addEventListener('click', () => {
  closePopup();
});

// Function to close the pop-up
function closePopup() {
  popup.style.display = 'none';
  popupOverlay.style.display = 'none';
}