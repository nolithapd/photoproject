import React, { Component } from 'react';
import './Image.css'
import Modal from './Modal';


class Image extends Component {
    constructor(props){
        super(props)
      }
    state = {
        visible: false
    }

    showPopup = () => {
        this.setState({
            visible: true
        })
    }

    hidePopup = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const val=this.props;
        return (
            <div className='container__modal'>
                <article className="shadow-md bg-white p-5">
                <img id="myImg" src={val.urls.full} alt={val.user.username}
                loading="lazy" className="h-52 w-full object-cover md:h-90 " onClick={this.showPopup} />
            </article> 
                <Modal
                    visible={this.state.visible}
                    hide={this.hidePopup}
                    {...val}
                />
            </div>
        );
    }
}

export default Image;