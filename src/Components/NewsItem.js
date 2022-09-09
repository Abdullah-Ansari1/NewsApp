import React from 'react'

const NewsItem = (props) => {
        let { title, description, publishedAt, imageUrl, newsUrl,source,author } = props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "20rem" }}>
                    <img src={imageUrl ? imageUrl : "https://cdn.wccftech.com/wp-content/uploads/2022/08/AMD-Ryzen-7000-Zen-4-Desktop-CPU-AM5-Platform-Delay-BIOS-Issues-_2.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}<span className="visually-hidden"></span></span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItem

