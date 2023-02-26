/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
import { useState, useEffect } from "react";
import red from "../../assets/image/heart-red.svg";
import gray from "../../assets/image/heart-gray.svg";
import makeRequest from "../../utils/makeRequest";
import {
  GET_LIKES_BY_ID,
  UPDATE_LIKES_BY_ID,
} from "../../constants/apiEndpoints";

function Like({ id }) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    makeRequest(GET_LIKES_BY_ID(id), {}).then((response) => {
      const like = response.data;
      setIsLiked(like.like);
      setLikeCount(like.count);
    });
  }, []);

  const likeHandler = async (id) => {
    try {
      await makeRequest(UPDATE_LIKES_BY_ID(id), {
        data: { like: !isLiked },
      });
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      } else {
        setLikeCount(likeCount + 1);
        setIsLiked(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const likeStatus = isLiked ? red : gray;

  return (
    <div>
      <div className="card-like" onClick={() => likeHandler(id)}>
        <div className="card-like-number">
          <img src={likeStatus} alt="like-btn" />
          <div className="centered">{likeCount}</div>
        </div>
      </div>
    </div>
  );
}
export default Like;
