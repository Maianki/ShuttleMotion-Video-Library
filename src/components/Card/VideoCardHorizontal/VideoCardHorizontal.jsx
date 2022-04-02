import React from "react";
import { SindhuMatchThumbnail } from "assets";
import styles from "./videocardhorizontal.module.css";
import { videos } from "backend/db/videos";

export function VideoCardHorizontal() {
  return (
    <>
      <div className='card align-items-center card-horizontal'>
        <div className='card-header'>
          <img
            className='card-img card-horizontal-img'
            src={SindhuMatchThumbnail}
            alt=''
          />
        </div>
        <div className='md-ht-1 card-body'>
          <h3></h3>
          <p className='md-ht-1'>
            Rs.1,349{" "}
            <span className='card-discount'>
              {" "}
              <span className='original-price md-ht-1'> Rs.1925 </span>
              (30% OFF)
            </span>{" "}
          </p>
          <div className='card-horizontal-footer'>
            <button className='card-horizontal-btn btn btn-primary'>
              <i className='fas fa-cart-plus'></i>
              <span className='md-ht-1'>ADD TO CART</span>
            </button>
            <button className='card-horizontal-btn btn btn-outline-primary'>
              <i className='fas fa-heart'></i>
              <span className='md-ht-1'>SAVE TO WISHLIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
