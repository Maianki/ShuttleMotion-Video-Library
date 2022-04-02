import { Navbar, Sidebar, VideoCard } from "components";
import { useVideosAndCategories, useVideosOperations } from "context";
import { useParams, Link } from "react-router-dom";
import styles from "./watchvideo.module.css";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsStopwatch, BsStopwatchFill } from "react-icons/bs";
import { getSimilarVideos } from "utils";

export function WatchVideo() {
  const { videoID } = useParams();
  const {
    videosAndCategory: { videos },
  } = useVideosAndCategories();

  const {
    manageVideoLike,
    manageWatchLater,
    videosOperations: { likedVideos, watchLaterVideos },
  } = useVideosOperations();

  const video = videos.find((video) => videoID === video.videoID);
  const {
    title,
    description,
    creator: { name: creatorName, profile: creatorProfile },
    views,
    category,
  } = video;

  const similarVideos = getSimilarVideos(category, videos, videoID);

  const btnLikeHandler = () => {
    manageVideoLike(video);
  };

  const btnWatchLaterHandler = () => {
    manageWatchLater(video);
  };

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
              <button className={`btn btn-primary ${styles.btnVideoPlayer}`}>
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

        {/*Recommendition section*/}
        <section className='videoRecommendation'>
          <h2 className={styles.recommendationHeading}>Similar videos</h2>
          {similarVideos.map((video) => {
            return (
              <Link key={video._id} to={`/watch/${video.videoID}`}>
                <VideoCard video={video} />
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
}
