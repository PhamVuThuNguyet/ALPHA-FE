import React, { useState } from "react";
import SideBar from "../../components/layouts/sidebar/SideBar";
import styles from "./message.module.css";
function Chat(){
    return(
        <div className={styles.messagePage}>
            <div className={styles["msg-container"]}>
                <div className={styles["chat-panel"]}>
                    <div className={styles["messages"]}>
                        <ul>
                            <li className={styles["left"]}>
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
                                                Good morning, How are you? What about our next meeting ?
                                            </p>
                                            <p className={styles["time"]}>
                                                10:10 <span>○</span>
                                            </p>
                                        </div>
                                        <div className={styles["chat-name"]}>
                                            Patient Phong
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={styles["right"]}>
                                <div className={`${styles["msg"]} ${styles["msg-out"]}`}>
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
                                                Yeah everything is fine
                                            </p>
                                            <p className={styles["time"]}>
                                                10:15 <span>○</span>
                                            </p>
                                        </div>
                                        <div className={styles["chat-name"]}>
                                            Doctor Chung
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={styles["right"]}>
                                <div className={`${styles["msg"]} ${styles["msg-out"]}`}>
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
                                                And Next meeting tomorrow 10.00AM
                                            </p>
                                            <p className={styles["time"]}>
                                                10:16 <span>○</span>
                                            </p>
                                        </div>
                                        <div className={styles["chat-name"]}>
                                            Doctor Chung
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={styles["left"]}>
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
                                                Good morning, How are you? What about our next meeting ?
                                            </p>
                                            <p className={styles["time"]}>
                                                10:10 <span>○</span>
                                            </p>
                                        </div>
                                        <div className={styles["chat-name"]}>
                                            Patient Phong
                                        </div>
                                    </div>
                                </div>
                            </li>
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
                    <form action="">
                        <div className={styles["input-group"]}>
                            <input name="" className={styles["msg-input"]} type="text" />
                        </div>
                        <div className={styles["input-group"]}>
                            <button onclick="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>    
    )
}
export default Chat;