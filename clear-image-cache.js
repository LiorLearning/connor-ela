// Script to clear all cached images and force regeneration
// Run this in the browser console to clear all image caches

console.log('🧹 Clearing all image caches...');

// Clear localStorage image cache
let clearedCount = 0;
const keysToRemove = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key && key.startsWith('images:v1:')) {
    keysToRemove.push(key);
  }
}

keysToRemove.forEach(key => {
  localStorage.removeItem(key);
  clearedCount++;
});

console.log(`✅ Cleared ${clearedCount} cached images from localStorage`);

// Clear any in-memory caches if the app is running
if (window.questionImageCacheRef) {
  window.questionImageCacheRef.current?.clear();
  console.log('✅ Cleared in-memory image cache');
}

// Force page reload to regenerate images
console.log('🔄 Reloading page to regenerate all images with improved accuracy...');
setTimeout(() => {
  window.location.reload();
}, 1000);
