import React, { useState } from "react";
import SideBar from "../../components/layouts/sidebar/SideBar";
import styles from "./message.module.css";
import axiosClient from "../../axiosClient";

function renderMsgBlock(message) {
    const userId = localStorage.getItem("id");
    const enum_msg = Object.keys(message);
    const html = (
        enum_msg.map(key =>
            <li className={message[key].user === userId ? styles["right"] : styles["left"]}>
                <div className={`${styles["msg"]} ${styles["msg-in"]}`}>
                    <div className={styles["msg-img"]}>
                        <div className={styles["contact-img"]}>
                            <a href="#">
                                <img src="https://seedpsychology.com.au/wp-content/uploads/2018/09/Damian-profile-pic-square.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={styles["conversation"]}>
                        <div className={styles["chat-content"]}>
                            <p className={styles["content"]}>
                                {
                                    message[key].message
                                }
                            </p>
                            <p className={styles["time"]}>
                                {
                                    (new Date(message[key].created_at)).getDate() + "/" +
                                    (new Date(message[key].created_at)).getMonth() + " - " +
                                    (new Date(message[key].created_at)).getHours() + ":" + (new Date(message[key].created_at)).getMinutes()
                                } <span>○</span>
                            </p>
                        </div>
                            {
                                message[key].user === userId ? <div style={{color: "#2ecc71", textAlign: "right"}}className={styles["chat-name"]}>
                                    Doctor Chung
                                </div> : <div className={styles["chat-name"]}>
                                    Patient Phong
                                </div>
                            }
                        
                    </div>
                </div>
            </li>
        )
    )

    return html
}

function HandleSubmit(event) {
    event.preventDefault();

    const target = event.target;
    const messageToSend = {
        conversation: '6292468f24d7122d8e99035b', //id of conversation
        message: target.sendmsg.value,
        type: 'text'
        
    }
    // target.msgsend.value = "";
    axiosClient.post(`/message`, messageToSend)
        .then(res => {
            console.log(res);
            if(res.status === 200) {
                console.log("message sent");
            }
        })
}

function Chat() {

    const [msg, setMsg] = useState(0);

    axiosClient.get('/message/conversation/6292468f24d7122d8e99035b')
        .then(res => {
            setMsg(res.data);
        })
    const mainHTML = (
        <div className={styles.messagePage}>
            <div className={styles["msg-container"]}>
                <div className={styles["chat-panel"]}>
                    <div id="msgBlock" className={styles["messages"]}>
                        <ul>
                            {renderMsgBlock(msg)}
                        </ul>
                    </div>
                </div>
                <div className={styles["contact-panel"]}>
                    <h2>Contacts</h2>
                    <div className={styles["contact-search"]}>

                    </div>
                    <div className={styles["recent-contact"]}>
                        <p>Recent</p>
                        <div>
                            <form action="">
                                <div className={styles["input-group"]}>
                                    <input className={styles["form-control"]} type="text" />
                                    <span>
                                        <i>○</i>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <ul>
                            <li>
                                <div className={styles["contact-item"]}>
                                    <div className={styles["contact-metadata"]}>
                                        <div className={styles["time"]}>02:50</div>
                                        <div className={styles["unread"]}>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div className={styles["contact-info"]}>
                                        <p className={styles["name"]}>Doctor Chung</p>
                                        <p className={styles["latest-msg"]}>Uống thuốc đi iem</p>
                                    </div>
                                    <div className={styles["contact-img"]}>
                                        <a href="#">
                                            <img src="https://seedpsychology.com.au/wp-content/uploads/2018/09/Damian-profile-pic-square.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles["chat-input"]}>
                    <form onSubmit={HandleSubmit} action="">
                        <div className={styles["input-group"]}>
                            <input name="sendmsg" className={styles["msg-input"]} type="text" />
                        </div>
                        <div className={styles["input-group"]}>
                            <button type="submit" formMethod="post">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    return mainHTML
}
export default Chat;