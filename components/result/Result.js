import Head from "next/head";
import Footer from "@components/Footer";
import SnsShare from "@components/util/SnsShare";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import styles from "@styles/Result.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Result({mbti}) {
    const router = useRouter();

    const mbtiName = mbti.mbtiName;
    const treeName = mbti.treeName;
    const description = mbti.description;
    const imgSrc = mbti.imgSrc;

    const link = "https://xmas-tree-mbti.netlify.app" + mbti.link;
    const detail = mbtiName + " : " + treeName;

    return (
        <div>
            <Head>
                <title>크리스마스 트리 MBTI</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:url" content={link} />
                <meta property="og:title" content={"크리스마스 트리 MBTI"} />
                <meta
                    property="og:description"
                    content={detail}
                />
            </Head>

            <main className={styles.main}>
                <div>
                    <h4>
                        <b>{mbtiName}</b>
                    </h4>
                </div>
                <div>
                    <b>{treeName}</b>
                </div>
                <div>
                    <img src={imgSrc} width={"250px"}/>
                </div>
                <div className={styles.description}>
                    <b className={styles.content}>이런 특징이 있어요.</b>
                    <div className={styles.content}>* {description[0]}</div>
                    <div className={styles.content}>* {description[1]}</div>
                    <div className={styles.content}>* {description[2]}</div>
                    <div className={styles.content}>* {description[3]}</div>
                    <div className={styles.content}>* {description[4]}</div>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => router.push('/')}>처음으로</button>
                    <span>&nbsp;</span>
                    <button className="btn btn-primary" onClick={() => router.push('/result')}>모든 유형 보기</button>
                </div>
                <SnsShare link = {link} />
            </main>

            <Footer/>
        </div>
    )
}
