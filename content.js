// content.js

const CONTENT = {
  title: "My Computer Vision Portfolio",
  tagline: "Segmentation • Detection • 3D Vision • Tracking",
  about: [
    "Welcome! Here are selected computer vision projects I've built.",
    "Each project includes results, images, and a short demo video."
  ],

  projects: [
    {
      title: "Semantic Segmentation Demo",
      description: "Outdoor scene segmentation using DeepLabv3. Achieves 78% mIoU.",
      images: [
        { src: "https://placehold.co/800x450?text=Segmentation+1", alt: "Segmentation output 1" },
        { src: "https://placehold.co/800x450?text=Segmentation+2", alt: "Segmentation output 2" }
      ],
      videoId: "dQw4w9WgXcQ",
      link: "https://github.com/yourrepo/segmentation"
    },

    {
      title: "Object Detection with YOLOv8",
      description: "Real-time car + pedestrian detection at 45 FPS.",
      images: [
        { src: "https://placehold.co/800x450?text=YOLO+Detection", alt: "YOLO detection" }
      ],
      videoId: "M7FIvfx5J10",
      link: "https://github.com/yourrepo/yolo"
    },

    {
      title: "3D Reconstruction from Stereo",
      description: "Dense disparity + point cloud generation using OpenCV + PyTorch.",
      images: [
        { src: "https://placehold.co/800x450?text=Depth+Map", alt: "Depth map" }
      ],
      link: "https://github.com/yourrepo/3d-recon"
    }
  ]
};
