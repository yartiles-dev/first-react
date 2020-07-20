import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import {createStructuredSelector} from "reselect";

import './directory.styles.scss';
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {Directory} from "../../redux/directory/directory.reducer";

const DirectoryComponent = ({sections}: { sections: Directory[] }) => (
    <div className='directory-menu'>
        {sections.map((section) => (
            <MenuItem key={section.id} {...section} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryComponent);
