import React from "react"
import styles from "./video.module.css"

const Video = ({youtubeId}) => {

    if (youtubeId === "") {
        return (<strong>Review coming soon</strong>)
    }

    return (
        <>
            <div className={styles.videoContainer} key={youtubeId}>
                <div className={styles.video}>
                    <iframe width='560' height="315" title="Review" src={'https://www.youtube.com/embed/' + youtubeId}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>
        </>
    )
};

export default Video