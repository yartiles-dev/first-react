import React from "react";

const SectionAbout = () => {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-8">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-1medio" >You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-1medio">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                    </p>

                    <a href="#" className="btn-text"> Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    {/*Emmet Abbreviation*/}
                    {/*div.composition>(img.composition__photo.composition__photo--p1)*3*/}
                    <div className="composition">
                        <img src="nat-1-large.jpg" alt="" className="composition__photo composition__photo--p1"/>
                        <img src="nat-2-large.jpg" alt="" className="composition__photo composition__photo--p2"/>
                        <img src="nat-3-large.jpg" alt="" className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout