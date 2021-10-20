import React, { Component } from 'react';
import './directory.style.scss'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'floral',
                    imageUrl: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    id: 1,
                    linkUrl: 'shop/floral'
                  },
                  {
                    title: 'fresh',
                    imageUrl: 'https://images.pexels.com/photos/6794057/pexels-photo-6794057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    id: 2,
                    linkUrl: 'shop/fresh'
                  },
                  {
                    title: 'sweet',
                    imageUrl: 'https://images.pexels.com/photos/6037893/pexels-photo-6037893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    id: 3,
                    linkUrl: 'shop/sweet'
                  },
                  {
                    title: 'women',
                    imageUrl: 'https://images.pexels.com/photos/4659794/pexels-photo-4659794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/women'
                  },
                  {
                    title: 'men',
                    imageUrl: 'https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/men'
                  }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory