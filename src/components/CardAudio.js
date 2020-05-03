import React from 'react'

export default (props) => {
    const { sura } = props
    return (

        <div className="card border-dark mb-3" style={{
            maxWidth: "18rem"
        }}>
            <div className="card-header">{sura.asma}</div>
            <div className="card-body text-primary">
                <h5 className="card-title">Sura {sura.nama}</h5>
                <p className="card-text"><i>{sura.arti}</i></p>
                <div className="card-text">
                    <audio controls>
                        <source src={sura.audio} type="audio/mp3" />
                        Your browser does not support the audio element.
                </audio>
                </div>
            </div>
        </ div>
    )
}