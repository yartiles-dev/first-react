import React from "react";

const SectionBook = () => {
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form">
                            <div className="u-margin-bottom-4">
                                <h2 className="heading-secondary">
                                    start booking now
                                </h2>
                            </div>

                            <div className="form__group">
                                <input type="text" id="name" className="form__input" placeholder="Full Name" required/>
                                <label htmlFor="name" className="form__label">Full name</label>
                            </div>

                            <div className="form__group">
                                <input type="email" id="email" className="form__input" placeholder="Email address" required/>
                                <label htmlFor="email" className="form__label">Email address</label>
                            </div>

                            <div className="form__group u-margin-bottom-4">
                                <div className="form__radio-group">
                                    <input type="radio" id="small" name="size" className="form__radio-input"/>
                                    <label htmlFor="small" className="form__radio-label">
                                        <span className="form__radio-button">

                                        </span>
                                        Small tour group
                                    </label>
                                </div>
                                {/*Si existen dos input de tipo radio y c puede seleccionar uno u otro na mas se les llama igual con la propiedad name y asi cuando c seleccione uno c desmarca el otro*/}
                                <div className="form__radio-group">
                                    <input type="radio" id="large" name="size" className="form__radio-input"/>
                                    <label htmlFor="large" className="form__radio-label">
                                        <span className="form__radio-button">

                                        </span>
                                        Large tour group
                                    </label>
                                </div>
                            </div>
							
							<div className="form__group">
                                <button className="btn btn--green">Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBook