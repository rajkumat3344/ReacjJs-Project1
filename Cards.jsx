import React, { Component } from 'react'
import Card from './CardUI.jsx';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

export default class Cards extends Component {
    render() {
        return (
            <div>
               <div className="container-fluid d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-4"><Card imgsrc={img1} title='BLOGS' text='Your Best Blogs.'/></div>
                    <div className="col-md-4"><Card imgsrc={img2} title='EDITING' text='Your Way Of Editing.' /></div>
                    <div className="col-md-4"><Card imgsrc={img3} title='WEBFRAME' text='Your Way Of Web-Design.' /></div>
                  </div> 
                </div> 
            </div>
        )
    }
}
