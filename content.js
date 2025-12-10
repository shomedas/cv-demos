// content.js — REPLACE your existing file with this exact content
// IMPORTANT: set `category` to one of these exact keys:
//   "multiview", "tracking", "pointcloud", "genai"
// (the renderer is case-insensitive but using these exact keys avoids problems)

const CONTENT = {
  title: "Computer Vision Portfolio",
  tagline: "Multi-view Geometry • Tracking/Segmentation • Point-cloud • GenAI",
  about: [
    "Welcome — browse projects by column. Click images to enlarge or Play to view demos.",
    "Projects are set columnwise for multiview, tracking, pointcloud, genai."
  ],

  projects: [
    // ------------------------
    // Multi-view Geometry
    // ------------------------
    {
      title: "Bundle Adjustment Visualization",
      category: "multiview",
      description: "Interactive bundle adjustment demo showing reprojection before/after optimization.",
      images: [
        { src: "https://placehold.co/800x450?text=Bundle+Adj+1", alt: "Bundle adjustment result" },
        { src: "https://placehold.co/800x450?text=Bundle+Adj+2", alt: "Residuals and reprojection" }
      ],
      videoId: "dQw4w9WgXcQ",
      link: "https://github.com/yourrepo/bundle-adjust",
      tags: ["sfm","ba","geometry"]
    },
    {
      title: "Structure from Motion (SfM)",
      category: "multiview",
      description: "Classical SfM pipeline producing sparse point clouds and camera poses.",
      images: [
        { src: "https://placehold.co/800x450?text=SfM+Sparse+Cloud", alt: "SfM sparse cloud" }
      ],
      link: "https://github.com/yourrepo/sfm",
      tags: ["sfm","camera-pose"]
    },

    // ------------------------
    // Tracking / Segmentation
    // ------------------------
    {
      title: "Multi-Object Tracking (MOT)",
      category: "tracking",
      description: "Tracking-by-detection with re-ID features and IoU association.",
      images: [
        { src: "https://placehold.co/800x450?text=MOT+Frame", alt: "MOT example" }
      ],
      videoId: "M7FIvfx5J10",
      link: "https://github.com/yourrepo/mot",
      tags: ["tracking","mot","reid"]
    },
    {
      title: "Real-time Semantic Segmentation",
      category: "tracking",
      description: "Lightweight segmentation model running at 30+ FPS on edge devices.",
      images: [
        { src: "https://placehold.co/800x450?text=Segmentation+Output", alt: "Segmentation map" }
      ],
      link: "https://github.com/yourrepo/seg",
      tags: ["segmentation","real-time"]
    },

    // ------------------------
    // Point-cloud Analysis
    // ------------------------
    {
      title: "Point Cloud Registration (ICP)",
      category: "pointcloud",
      description: "Robust ICP variants with color and feature-based initialization.",
      images: [
        { src: "https://placehold.co/800x450?text=ICP+Before+After", alt: "ICP registration" }
      ],
      videoId: "dQw4w9WgXcQ",
      link: "https://github.com/yourrepo/icp",
      tags: ["pointcloud","registration","icp"]
    },
    {
      title: "Dense LiDAR Processing",
      category: "pointcloud",
      description: "Filtering, ground removal, and semantic labeling of LiDAR scans.",
      images: [
        { src: "https://placehold.co/800x450?text=LiDAR+Processing", alt: "LiDAR processing" }
      ],
      link: "https://github.com/yourrepo/lidar",
      tags: ["lidar","pointcloud","semantic"]
    },

    // ------------------------
    // GenAI
    // ------------------------
    {
      title: "Image-to-Image Diffusion for Segmentation",
      category: "genai",
      description: "Conditional diffusion that refines coarse masks into high-quality segmentation.",
      images: [
        { src: "https://placehold.co/800x450?text=Diffusion+Seg", alt: "Diffusion segmentation example" }
      ],
      videoId: "M7FIvfx5J10",
      link: "https://github.com/yourrepo/diffusion-seg",
      tags: ["diffusion","segmentation","genai"]
    },
    {
      title: "Text-to-3D (Neural Rendering)",
      category: "genai",
      description: "Prototype pipeline generating textured 3D assets from text prompts.",
      images: [
        { src: "https://placehold.co/800x450?text=Text+to+3D", alt: "Text-to-3D sample" }
      ],
      link: "https://github.com/yourrepo/text2mesh",
      tags: ["neural-rendering","3d","genai"]
    }
  ]
};
