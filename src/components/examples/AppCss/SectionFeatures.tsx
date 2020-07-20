import React from "react";

const SectionFeatures = () => {
    return (
        <section className="section-features">
            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/*<BasicWorld style={{ fontSize: '32px', color: "#fff" }}/>*/}
                        {/*<Icon component={MessageSvg} style={{ fontSize: "52px" }} />*/}
                        {/*<Icon type="message" style={{ fontSize: '16px', color: '#08c' }}  />*/}
                        {/*<SmileOutlined />*/}
                        <i className="icon-basic-world feature-box__icon">  </i>
                        <h3 className="heading-tertiary u-margin-bottom-1medio">Explore the world</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/*<HeartOutlined className="feature-box__icon" />*/}
                        <i className="icon-basic-compass feature-box__icon">  </i>
                        <h3 className="heading-tertiary u-margin-bottom-1medio">Explore the world</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/*<HeartOutlined className="feature-box__icon" />*/}
                        <i className="icon-basic-map feature-box__icon">  </i>
                        <h3 className="heading-tertiary u-margin-bottom-1medio">Explore the world</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        {/*<HeartOutlined className="feature-box__icon" />*/}
                        <i className="icon-basic-heart feature-box__icon">  </i>
                        <h3 className="heading-tertiary u-margin-bottom-1medio">Explore the world</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFeatures