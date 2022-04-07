import React, { useState } from "react";
import styles from "./playlistmodal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Label } from "components";
import { usePlaylists, useSnackbar } from "context";
import { useLocation } from "react-router-dom";

export function PlaylistModal({ btnModalHandler, video = "" }) {
  const [playlistDetail, setPlaylistDetail] = useState({
    title: "",
    description: "",
  });

  const { pathname } = useLocation();

  const { addSnackbar } = useSnackbar();

  const {
    managePlaylist,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
    playlists: { playlists },
  } = usePlaylists();

  const { _id: currVideoId } = video;
  const playlistDetailChangeHandler = (event) => {
    const { name, value } = event.target;
    setPlaylistDetail((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (playlistDetail.title) {
      managePlaylist(playlistDetail, video);
      btnModalHandler();
    } else {
      addSnackbar("Playlist title cannot be empty!", "snackbar-danger");
    }
  };

  const playlistChangeHandler = (event, playlistId) => {
    const { checked } = event.target;
    if (checked) {
      addVideoToPlaylist(playlistId, video);
    } else {
      deleteVideoFromPlaylist(playlistId, video._id);
    }
  };

  return (
    <>
      <div className={styles.bodyOverlyaActive}> </div>
      <div className={`flex-column modal ${styles.playlistModal} `}>
        <span
          className='btn-modal-cancel modal-dismiss'
          onClick={btnModalHandler}
          role='button'
        >
          <AiFillCloseCircle className='text-lg' />
        </span>
        <div className='modal-header'>
          <h2
            className={`modal-text text-bold-700 ${styles.playlistModalHeading}`}
          >
            Add to...
          </h2>
        </div>

        <div className={`modal-body flex-column ${styles.playlistsName}`}>
          {pathname !== "/playlist" &&
            playlists.map(({ _id, title, videos }) => {
              return (
                <div key={_id} className='form-check'>
                  <input
                    type='checkbox'
                    id={title}
                    checked={videos.some(
                      ({ _id: videoId }) => currVideoId === videoId
                    )}
                    onChange={(e) => playlistChangeHandler(e, _id)}
                  />
                  <label className='form-label-inline' htmlFor={title}>
                    {title}
                  </label>
                </div>
              );
            })}
        </div>

        <div className='modal-footer flex-row'>
          <form onSubmit={submitHandler}>
            <div className='form-set'>
              <Label labelFor='playlistName' labelName='Title' />
              <input
                className='form-input form-input-lg pd-1'
                type='text'
                id='playlistname'
                name='title'
                value={playlistDetail.title}
                placeholder='Enter playlist title'
                onChange={playlistDetailChangeHandler}
              />
              <div className='form-set'>
                <Label labelFor='description' labelName='Description' />
                <textarea
                  className={`form-input pd-1 ${styles.playlistDescription}`}
                  name='description'
                  id='description-box'
                  cols='25'
                  placeholder='(optional)'
                  value={playlistDetail.description}
                  onChange={playlistDetailChangeHandler}
                ></textarea>
              </div>

              <button
                className={`btn btn-secondary ${styles.btnCreatePlaylist}`}
                type='submit'
              >
                create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
