import React from 'react';
import PropTypes from 'prop-types'

export default function EntityDescription({ title, description }) {

    return (
        <section className="entity-description">
            <header>
                <h2 title={ title }>{ title }</h2>
            </header>
            { description }
        </section>
    )
}

EntityDescription.PropTypes = {
    title: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired
};