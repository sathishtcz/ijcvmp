import React from 'react'
import Home from '../../shared/components/Home/Home'

export default function Homepage() {

    const keywords = [
        "Image and Video Processing", "Human-Computer Interaction", "Edge Computing Vision",
        "Object Detection and Recognition", "Deepfake Detection", "Forensic Vision",
        "Image Segmentation", "Cybersecurity Vision", "Autonomous Drones",
        "Feature Extraction", "Secure Authentication", "Smart City Vision",
        "Optical Character Recognition", "Real-Time Processing", "Fashion Image Analysis",
        "Motion Tracking", "Video Compression", "Agricultural Vision",
        "Image Enhancement", "Handwritten Recognition", "Weather Forecasting Vision",
        "Image Denoising", "Scene Understanding", "Video Watermarking",
        "Deep Learning", "Image Fusion", "Image Steganography",
        "Convolutional Networks", "Super-Resolution", "Adversarial Attacks in Vision",
        "Generative Models", "Image Restoration", "Virtual Reality Gaming",
        "Reinforcement Learning", "Medical Image Analysis", "Real-Time Face Recognition",
        "Self-Supervised Learning", "Hyperspectral Imaging", "Sentiment Detection in Videos",
        "Video Summarization", "Biomedical Vision", "Image-Based Search",
        "Audio-Visual Processing", "Industrial Automation", "Synthetic Image Generation"
    ];

    // Split the keywords into three arrays of 15 each
    const firstRow = keywords.slice(0, 15);
    const secondRow = keywords.slice(15, 30);
    const thirdRow = keywords.slice(30, 45);


    return (
        <div>
            <Home keywords={keywords} firstRow={firstRow} secondRow={secondRow} thirdRow={thirdRow} />
        </div>
    )
}
