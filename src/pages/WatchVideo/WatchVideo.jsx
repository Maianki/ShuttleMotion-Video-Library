import { Navbar, Sidebar, VideoCard, PlaylistModal } from "components";
import { useVideosAndCategories, useVideosOperations, useAuth } from "context";
import { useParams } from "react-router-dom";
import styles from "./watchvideo.module.css";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsStopwatch, BsStopwatchFill } from "react-icons/bs";
import { getSimilarVideos } from "utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { HISTORY_API } from "utils/APIEndPoints";

export function WatchVideo() {
  //Getting video id fro params
  const { videoID } = useParams();

  //Extracting videos from videos and categories context
  const {
    videosAndCategory: { videos },
  } = useVideosAndCategories();

  //Extracting manageVideosLike, manageWatchLater, videosOperationsDispatcher
  //and videos opeartions from VideosOperations context
  const {
    manageVideoLike,
    manageWatchLater,
    videosOperationsDispatcher,
    videosOperations: { likedVideos, watchLaterVideos, historyVideos },
  } = useVideosOperations();

  const [showModal, setShowModal] = useState(false);

  //Method to toggle modal state
  const btnPlaylistModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  //Finding video detail of current video
  const video = videos.find((video) => videoID === video.videoID);

  //Destructuring video details
  const {
    title,
    description,
    creator: { name: creatorName, profile: creatorProfile },
    views,
    category,
  } = video;

  //Getting videos with similar categories for recommendation section
  const similarVideos = getSimilarVideos(category, videos, videoID);

  //function to handle like on video
  const btnLikeHandler = () => {
    manageVideoLike(video);
  };

  //funciton to handle watch later on video

  const btnWatchLaterHandler = () => {
    manageWatchLater(video);
  };

  //Accessing token from auth context
  const {
    auth: { encodedToken },
  } = useAuth();

  useEffect(() => {
    const isVideoInHistory = historyVideos.some(
      ({ _id: currVideoId }) => video._id === currVideoId
    );
    if (!isVideoInHistory && encodedToken) {
      (async () => {
        try {
          const response = await axios.post(
            HISTORY_API,
            {
              video,
            },
            {
              headers: { authorization: encodedToken },
            }
          );

          const { history } = response.data;

          if (response.status === 201) {
            videosOperationsDispatcher({
              type: "MANAGE_HISTORY",
              payload: history,
            });
          }
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [encodedToken, video, videosOperationsDispatcher, historyVideos]);

  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>

      <main className={styles.main}>
        <section className={styles.videoPlayer}>
          <div className={styles.iframeContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${videoID}?rel=0`}
              title='YouTube video player'
              frameBorder='0'
            ></iframe>
          </div>

          <section className={styles.videoAbout}>
            <h3>{title}</h3>
            <div className={`flex-row ${styles.videoButtons}`}>
              <img
                className='avatar avatar-round avatar-xs'
                src={creatorProfile}
                alt={creatorName}
              />
              <p className='text-bold-700 pd-ht-1'> {creatorName}</p>
              <span className={`text-md  ${styles.videoViewsCount}`}>
                | {views} views
              </span>
              <button
                className={`btn btn-primary ${styles.btnVideoPlayer}`}
                onClick={btnLikeHandler}
              >
                {likedVideos.find(({ _id }) => _id === video._id) ? (
                  <>
                    <AiFillLike />
                    <span className='text-md pd-ht-1'>Liked</span>
                  </>
                ) : (
                  <>
                    <AiOutlineLike />
                    <span className='text-md pd-ht-1'>Like</span>
                  </>
                )}
              </button>
              <button
                className={`btn btn-primary ${styles.btnVideoPlayer}`}
                onClick={btnPlaylistModalHandler}
              >
                <RiPlayListAddFill />
                <span className='text-md pd-ht-1'>Save</span>
              </button>
              <button
                className={`btn btn-primary ${styles.btnVideoPlayer}`}
                onClick={btnWatchLaterHandler}
              >
                {watchLaterVideos.find(({ _id }) => _id === video._id) ? (
                  <BsStopwatchFill />
                ) : (
                  <BsStopwatch />
                )}

                <span className='text-md pd-ht-1'>Watch Later</span>
              </button>
            </div>
            <hr />
            <p className={styles.videoDescription}>{description}</p>
          </section>
        </section>
        {showModal && (
          <PlaylistModal
            btnModalHandler={btnPlaylistModalHandler}
            video={video}
          />
        )}

        {/*Recommendition section*/}
        <section className='videoRecommendation'>
          <h2 className={styles.recommendationHeading}>Similar videos</h2>
          {similarVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </section>
      </main>
    </div>
  );
}
