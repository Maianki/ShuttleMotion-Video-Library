import React, { useState } from "react";
import styles from "./playlistmodal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { Label } from "components";
import { usePlaylists } from "context";

export function PlaylistModal({ btnModalHandler }) {
  const [playlistDetail, setPlaylistDetail] = useState({
    title: "",
    description: "",
  });
  const {
    managePlaylist,
    playlists: { playlists },
  } = usePlaylists();
  console.log(playlists);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPlaylistDetail((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    managePlaylist(playlistDetail);
    btnModalHandler();
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
          {playlists.map(({ _id, title }) => {
            return (
              <div key={_id} className='form-check'>
                <input type='checkbox' value='demo' id='examplecheck' />
                <label className='form-label-inline' htmlFor='examplecheck'>
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
                onChange={onChangeHandler}
              />
              <div className='form-set'>
                <Label labelFor='description' labelName='Description' />
                <textarea
                  className={`form-input pd-1 ${styles.playlistDescription}`}
                  name='description'
                  id='description-box'
                  cols='25'
                  placeholder='Enter description'
                  value={playlistDetail.description}
                  onChange={onChangeHandler}
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
