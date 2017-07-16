import React from 'react'
import { capitalize } from '../../util/utility'

const icons = {
	featured: {
		icon: 'fa fa-star',
		label: 'chip label label-warning'
	},
	trending: {
		icon: 'fa fa-line-chart',
		label: 'chip label label-primary'
	},
	hot: {
		icon: 'fa fa-fire',
		label: 'chip label label-danger'
	},
	user: {
		icon: 'fa fa-user-circle',
		label: 'chip label label-info'
	}
};

function exists(name) {
	const exists = icons[name];
	if (exists) {
		return exists;
	} else {
		throw new Error(`Cannot find icon with name: ${name}`);
	}
}

function styler(key, name) {
	const icon = exists(name);
	return icon[key];
}

// Stateless React Component
const Chip = (props) => {
    const url = `/wiki/${props.name}`
	return (
    <a href={url}>
        <span className={ styler('label', props.icon) }>
        	<i className={ styler('icon', props.icon) }/> { capitalize(props.name) } Lists
        </span>
    </a>
    );
}

export default Chip;