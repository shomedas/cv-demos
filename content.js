// content.js — edit this file only

const CONTENT = {
  title: "Computer Vision Portfolio",
  tagline: "Multi-view Geometry • Tracking/Segmentation • Point-cloud • GenAI",
  about: [
    "Welcome — browse projects by column. Click images to enlarge or Play to view demos.",
    "Add new projects to the `projects` array and set `category` to one of: multiview, tracking, pointcloud, genai."
  ],

  projects: [
    // Multi-view Geometry
    {
      title: "Bundle Adjustment Visualization",
      category: "multiview",
      description: "Interactive bundle adjustment demo showing reprojection before/after optimization.",
      images: [{ src: "https://placehold.co/800x450?text=Bundle+Adj+1", alt:"BA output"}],
      videoId: "dQw4w9WgXcQ",
      link: "https://github.com/yourrepo/bundle-adjust"
    },
    {
      title: "Structure from Motion (SfM)",
      category: "multiview",
      description: "Classical SfM pipeline producing sparse point clouds and camera poses.",
      images: [{ src: "https://placehold.co/800x450?text=SfM", alt:"SfM"}],
      link: "https://github.com/yourrepo/sfm"
    },

    // Tracking / Segmentation
    {
      title: "Multi-Object Tracking (MOT)",
      category: "tracking",
      description: "Tracking-by-detection with re-ID features and IoU association.",
      images: [{ src: "https://placehold.co/800x450?text=MOT", alt:"Tracking"}],
      videoId: "M7FIvfx5J10",
      tags: ["tracking","re-id"]
    },
    {
      title: "Real-time Semantic Segmentation",
      category: "tracking",
      description: "Lightweight segmentation model running at 30+ FPS on edge devices.",
      images: [{ src: "https://placehold.co/800x450?text=Seg", alt:"Segmentation"}],
      link: "https://github.com/yourrepo/seg"
    },

    // Point-cloud Analysis
    {
      title: "Point Cloud Registration",
      category: "pointcloud",
      description: "Robust ICP variants with color and feature-based initialization.",
      images: [{ src: "https://placehold.co/800x450?text=ICP", alt:"ICP"}],
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: "Dense LiDAR Processing",
      category: "pointcloud",
      description: "Filtering, ground removal, and semantic labeling of LiDAR scans.",
      images: [{ src: "https://placehold.co/800x450?text=LiDAR", alt:"LiDAR"}],
      link: "https://github.com/yourrepo/lidar"
    },

    // GenAI
    {
      title: "Image-to-Image Diffusion for Segmentation",
      category: "genai",
      description: "Conditional diffusion that refines coarse masks into high-quality segmentation.",
      images: [{ src: "https://placehold.co/800x450?text=Diffusion", alt:"Diffusion"}],
      videoId: "M7FIvfx5J10",
      tags: ["diffusion","segmentation","genai"]
    },
    {
      title: "Text-to-3D (Neural Rendering)",
      category: "genai",
      description: "Prototype pipeline generating textured 3D assets from text prompts.",
      images: [{ src: "https://placehold.co/800x450?text=Text+to+3D", alt:"Text2Mesh"}],
      link: "https://github.com/yourrepo/text2mesh"
    }
  ]
};
