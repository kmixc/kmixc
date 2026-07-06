import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../css/ProjectDetail.css";
import { Link } from 'react-router-dom'
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find((p) => p.id === projectId);

    const images = (project?.images || []).map((image) => ({
        src: require(`../assets/img/projects/${image}`)
    }));

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const prevImage = useCallback(() => setLightboxIndex(i => (i - 1 + images.length) % images.length), [images.length]);
    const nextImage = useCallback(() => setLightboxIndex(i => (i + 1) % images.length), [images.length]);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prevImage();
            else if (e.key === "ArrowRight") nextImage();
            else if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightboxIndex, prevImage, nextImage, closeLightbox]);

    if (!project) {
        return <h1>Project Not Found</h1>;
    }

    const videos = project.videos || [];

    return (
        <div className="detail-page">
            <Preloader />
            <div className="project-detail">
                {videos.length > 0 && (
                    <div className="media-section">
                        <div className="project-meta">
                            <span className="project-meta-label">Client: <em>{project.title}</em></span>
                        </div>
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

                {(project.about || project.approach) && (
                    <div className="project-info-sections">
                        {project.about && (
                            <div className="project-info-block">
                                <p className="project-info-label">About</p>
                                <p className="project-info-text">{project.about}</p>
                            </div>
                        )}
                        {project.approach && (
                            <div className="project-info-block">
                                <p className="project-info-label">Approach</p>
                                <p className="project-info-text">{project.approach}</p>
                            </div>
                        )}
                    </div>
                )}

                {images.length > 0 && (
                    <div className="media-section frames-section">
                        <h2 className="media-section-title">Frames</h2>
                        <div className="media-masonry">
                            {images.map((item, index) => (
                                <div
                                    className="media-item lightbox-trigger"
                                    key={`image-${index}`}
                                    onClick={() => setLightboxIndex(index)}
                                >
                                    <img
                                        src={item.src}
                                        alt={`Frame ${index + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {lightboxIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>&#x2715;</button>
                    <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#8249;</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={images[lightboxIndex].src} alt={`Frame ${lightboxIndex + 1}`} />
                    </div>
                    <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#8250;</button>
                </div>
            )}

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
