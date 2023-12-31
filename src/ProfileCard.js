

const ProfileCard = ({ title, image, handler }) => {
    return (

        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    {/* <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div> */}
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{handler}</p>
                    </div>
                </div>
                
            </div>
        </div>




    )
}

export default ProfileCard;