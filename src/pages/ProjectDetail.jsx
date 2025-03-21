import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../css/ProjectDetail.css";
import Logo from '../img/logos/logo.svg'
import { Link } from 'react-router-dom'
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return <h1>Project Not Found</h1>;
    }

    // Create arrays for videos and images
    const videos = project.videos.map((video) => ({ type: "video", src: video }));
    const images = project.images.map((image) => ({
        type: "image",
        src: require(`../assets/img/projects/${image}`)
    }));

    let mediaItems;

    if (videos.length === 1) {
        // If there's only one video, place it first, then shuffle images
        mediaItems = [
            videos[0],
            ...images.sort(() => Math.random() - 0.5)
        ];
    } else {
        // Otherwise, merge & shuffle all items
        mediaItems = [...videos, ...images].sort(() => Math.random() - 0.5);
    }

    return (
        <div className="detail-page">
            <Preloader />
            <Link className='logo' to={"/"}>
                <img src={Logo} alt="Kmixc Visuals" />
            </Link>
            <div className="project-detail">
                <div className="info">
                    <h1 className="title">{project.title}</h1>
                    <p className="description">{project.description}</p>
                </div>

                <div className="media-masonry">
                    {mediaItems.map((item, index) => (
                        <div className="media-item" key={index}>
                            {item.type === "video" ? (
                                <iframe
                                    src={item.src}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`Project image ${index + 1}`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="back-button-container">
                <Link to="/projects" className="back-button">
                    ← Back to Projects
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
