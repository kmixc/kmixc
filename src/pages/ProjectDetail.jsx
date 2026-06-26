import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../css/ProjectDetail.css";
import { Link } from 'react-router-dom'
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return <h1>Project Not Found</h1>;
    }

    const videos = project.videos || [];
    const images = (project.images || []).map((image) => ({
        src: require(`../assets/img/projects/${image}`)
    }));

    return (
        <div className="detail-page">
            <Preloader />
            <div className="project-detail">
                <div className="info">
                    <h1 className="title">{project.title}</h1>
                    <p className="description">{project.description}</p>
                </div>

                {videos.length > 0 && (
                    <div className="media-section">
                        <div className={`video-grid ${videos.length === 1 ? "single-video-grid" : ""}`.trim()}>
                            {videos.map((video, index) => (
                                <div
                                    className={`media-item video-item ${videos.length === 1 ? "single-video-item" : ""}`.trim()}
                                    key={`video-${index}`}
                                >
                                    <iframe
                                        src={video}
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {images.length > 0 && (
                    <div className="media-section frames-section">
                        <h2 className="media-section-title">Frames</h2>
                        <div className="media-masonry">
                            {images.map((item, index) => (
                                <div className="media-item" key={`image-${index}`}>
                                    <img
                                        src={item.src}
                                        alt={`Frame ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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
