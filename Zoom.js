// Returns the cropped image in Data URI format.
// The second argument `options` takes the following keys:
// - [type='image/png'] exported image type.
// - [quality=.75] exported image quality, only works when type is
//     'image/jpeg' or 'image/webp'.
// - [originalSize=false] when set to true, export cropped part in
//     original size, overriding exportZoom.
// - [fillBg='#fff'] if `type` is 'image/jpeg', this color will be
//     filled as the background of the exported image.
$imageCropper.cropit('export', {
  type: 'image/jpeg',
  quality: .9,
  originalSize: true
});

// Returns whether the current image is big enough to be zoomable.
// Note that an image cannot be zoomed to larger than its original size.
$imageCropper.cropit('isZoomable');

// Returns the source of current image.
// If the image is loaded through the file input, the image source will be
// in Data URI format.
$imageCropper.cropit('imageSrc');

// Sets image source.
$imageCropper.cropit('imageSrc', 'http://placekitten.com/g/1280/800');

// Returns the current image size.
// E.g. { width: 1920, height: 1080 }
$imageCropper.cropit('imageSize');

// Returns the current preview area size.
// E.g. { width: 600, height: 400 }
$imageCropper.cropit('previewSize');

// Sets preview area size.
$imageCropper.cropit('previewSize', { width: 800, height: 450 });

// Returns the image offset of the current cropping.
// E.g. { x: -10, y: -15 }
$imageCropper.cropit('offset');

// Sets image offset.
$imageCropper.cropit('offset', { x: -18, y: -54 });

// Returns the current zoom.
$imageCropper.cropit('zoom');

// Sets image zoom.
$imageCropper.cropit('zoom', .75);

// Disables the cropper.
// Unbinds event listeners from preview, zoom slider and file input, and
// adds `cropit-disabled` class to `$imageCropper`.
$imageCropper.cropit('disable');

// Re-enables the cropper.
// Does the opposite to `disable` method.
$imageCropper.cropit('reenable');