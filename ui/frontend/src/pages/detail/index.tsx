import "./../../assets/style/Detail.scss";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

import { useParams } from "react-router-dom";
type Props = {};

function Detail({}: Props) {
  const _id = useParams();
  console.log(_id);
  return (
    <>
      <section className="detailUserSection">
        <div className="container">
          <section className="info">
            <div className="header">
              <div className="profile">
                <div className="imgWrapper">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dF9ZdBwqzTFpQYw28vkw08ghbbWBkPKUVU4lpszolXn8GitxZvF61d9PpL7OnuFziIc&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>

              <div className="article">
                <p className="username">Username</p>
                <span className="bio">bio</span>,
                <em className="country">Country</em>
              </div>
            </div>

            <div className="buttons">
              <button className="follow">Follow</button>
              <button className="message">Message</button>
            </div>

            <div className="follower">
              <div className="posts">
                <p className="count">58.6K</p>
                <p>posts</p>
              </div>

              <div className="followers">
                <p className="count">18.9K</p>
                <p>followers</p>
              </div>

              <div className="following">
                <p className="count">58.6K</p>
                <p>following</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="Userposts">
        <div className="container">
          <div className="allPosts">
            <div className="post">
              <div className="imgWrapper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZKgNUFFG6UUQTTvyN6EWvQcI0uSmysMOxXt-DFRCuvVoxJ8Esvpzm3dotEni4tLhlyQ&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="article">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur.sectetur. Lorem ipsum dol Lorem ipsum dolor sit amet consectetur.t consectetur.
              </div>

              <div className="buttons">
                <button className="like">
                  <FavoriteBorderRoundedIcon style={{ fontSize: "35px" }} />
                </button>
                <button className="comment">
                  <ChatOutlinedIcon style={{ fontSize: "35px" }} />
                </button>
              </div>
            </div>

            <div className="post">
              <div className="imgWrapper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZKgNUFFG6UUQTTvyN6EWvQcI0uSmysMOxXt-DFRCuvVoxJ8Esvpzm3dotEni4tLhlyQ&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="article">
                Lorem ipsum dolor sit amet consectetur.
              </div>

              <div className="buttons">
                <button className="like">
                  <FavoriteBorderRoundedIcon style={{ fontSize: "35px" }} />
                </button>
                <button className="comment">
                  <ChatOutlinedIcon style={{ fontSize: "35px" }} />
                </button>
              </div>
            </div>
            <div className="post">
              <div className="imgWrapper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZKgNUFFG6UUQTTvyN6EWvQcI0uSmysMOxXt-DFRCuvVoxJ8Esvpzm3dotEni4tLhlyQ&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="article">
                Lorem ipsum dolor sit amet consectetur.
              </div>

              <div className="buttons">
                <button className="like">
                  <FavoriteBorderRoundedIcon style={{ fontSize: "35px" }} />
                </button>
                <button className="comment">
                  <ChatOutlinedIcon style={{ fontSize: "35px" }} />
                </button>
              </div>
            </div>
            <div className="post">
              <div className="imgWrapper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZKgNUFFG6UUQTTvyN6EWvQcI0uSmysMOxXt-DFRCuvVoxJ8Esvpzm3dotEni4tLhlyQ&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="article">
                Lorem ipsum dolor sit amet consectetur.
              </div>

              <div className="buttons">
                <button className="like">
                  <FavoriteBorderRoundedIcon style={{ fontSize: "35px" }} />
                </button>
                <button className="comment">
                  <ChatOutlinedIcon style={{ fontSize: "35px" }} />
                </button>
              </div>
            </div>
            <div className="post">
              <div className="imgWrapper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZKgNUFFG6UUQTTvyN6EWvQcI0uSmysMOxXt-DFRCuvVoxJ8Esvpzm3dotEni4tLhlyQ&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="article">
                Lorem ipsum dolor sit amet consectetur.
              </div>

              <div className="buttons">
                <button className="like">
                  <FavoriteBorderRoundedIcon style={{ fontSize: "35px" }} />
                </button>
                <button className="comment">
                  <ChatOutlinedIcon style={{ fontSize: "35px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
