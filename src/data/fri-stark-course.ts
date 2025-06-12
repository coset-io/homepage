import { CourseData } from "../types/course"

export const friStarkCourseData: CourseData = {
  title: "FRI & Stark Course",
  description: "本课程深入探讨 FRI (Fast Reed-Solomon Interactive Oracle Proof of Proximity) 和 STARK (Scalable Transparent ARgument of Knowledge) 技术，从理论到实践，帮助学习者掌握这些重要的零知识证明技术。",
  parts: [
    {
      title: "Part 1: STARK101",
      episodes: [
        {
          title: "Overview of FRI",
          speaker: "Guoyu",
          videoLink: "https://www.youtube.com/embed/VUjiC5Qwdmo",
          slideLink: "https://github.com/Antalpha-Labs/zkp-academy/blob/main/FRI%26Stark/lesson%201/FRI%20overview%202024-08-13%2019-54-37.pdf",
          resources: [
            { title: "STARK101", url: "https://starkware.co/stark-101/" }
          ]
        },
        {
          title: "How to do Low Degree Extension and constrain our LDE",
          speaker: "Tim",
          videoLink: "https://www.youtube.com/embed/HLgiprbnsBA",
          resources: [
            { title: "STARK101 Video 1", url: "https://starkware.co/stark-101/" },
            { title: "STARK101 Video 2", url: "https://starkware.co/stark-101/" }
          ]
        },
        {
          title: "What does FRI actually do?",
          speaker: "Dream",
          videoLink: "https://www.youtube.com/embed/dfUQaLOeHFc",
          resources: [
            { title: "STARK101 Video 3", url: "https://starkware.co/stark-101/" }
          ]
        },
        {
          title: "How to convince the verifier by FRI?",
          speaker: "Harold",
          videoLink: "https://www.youtube.com/embed/FigtQ5C6G5s",
          resources: [
            { title: "STARK101 Video 4", url: "https://starkware.co/stark-101/" }
          ]
        }
      ],
      assignments: [
        {
          title: "Part 1 作业",
          description: "Arithmetization in STARKs",
          url: "https://github.com/Antalpha-Labs/zkp-academy/discussions/35"
        },
      ],
      supplementaryResources: [
      ]
    },
    {
      title: "Part 2: zk-learning.org Lecture 8",
      episodes: [
        {
          title: "FRI by Hand",
          speaker: "backdoor",
          videoLink: "https://www.youtube.com/embed/W5dXnaSwrQw",
          resources: [
            { title: "zk-learning.org", url: "https://zk-learning.org/" },
          ]
        },
        {
          title: "Attack Cases in FRI & Comparison of PCSs",
          speaker: "Kyrin",
          videoLink: "https://www.youtube.com/embed/_0aMoAZ1L7k",
          resources: [
            { title: "zk-learning.org", url: "https://zk-learning.org/" },
          ]
        },
        {
          title: "Stark by Hand (PCS with FRI)",
          speaker: "0xhhh",
          videoLink: "https://www.youtube.com/embed/ak1wGXfGlyc",
          resources: [
            { title: "zk-learning.org", url: "https://zk-learning.org/" },
          ]
        },
        {
          title: "Soundness of STARK",
          speaker: "Yingfei",
          videoLink: "https://www.youtube.com/embed/p3zxhnSDqFM",
          resources: [
            { title: "zk-learning.org", url: "https://zk-learning.org/" },
          ]
        },
        {
          title: "Soundness of FRI",
          speaker: "Yingfei",
          videoLink: "https://www.youtube.com/embed/Sfm5GjI69fc",
          resources: [
            { title: "zk-learning.org", url: "https://zk-learning.org/" },
          ]
        }
      ],
      supplementaryResources: [
        { title: "STARK Anatomy", url: "https://aszepieniec.github.io/stark-anatomy/" },
        { title: "Vitalik Blogs Part 1", url: "https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html" },
        { title: "Vitalik Blogs Part 2", url: "https://vitalik.eth.limo/general/2017/11/22/starks_part_2.html" },
        { title: "Vitalik Blogs Part 3", url: "https://vitalik.eth.limo/general/2018/07/21/starks_part_3.html" },
        { title: "SNARK Security and Performance", url: "https://a16zcrypto.com/posts/article/snark-security-and-performance/" },
        { title: "Safe and Sound – A Deep Dive into STARK Security", url: "https://starkware.co/safe-and-sound-a-deep-dive-into-stark-security" },
        { title: "ethSTARK Documentation", url: "https://eprint.iacr.org/2021/582.pdf" },
        { title: "Fiat-Shamir Security of FRI", url: "https://eprint.iacr.org/2023/1071.pdf" },
        { title: "Proximity Gaps for Reed-Solomon Codes", url: "https://eprint.iacr.org/2020/654.pdf" },
        { title: "SNARGS Book", url: "https://snargsbook.org/" }
      ]
    },
    {
      title: "Part 3: FRI 代码",
      episodes: [
        {
          title: "lambda class版zk-stark实现",
          speaker: "饭卡",
          videoLink: "https://www.youtube.com/embed/wEIiSuaMH4o",
          resources: [
            { title: "lambda class zk-stark theory", url: "https://lambdaclass.github.io/lambdaworks/starks/recap.html" },
            { title: "lambda class zk-stark code", url: "https://github.com/lambdaclass/lambdaworks/tree/main/provers/stark" }
          ]
        },
        {
          title: "Plonky3 two_adic_pcs概述",
          speaker: "阳小雪",
          videoLink: "https://www.youtube.com/embed/swCjt9YibyE",
          resources: [
            { title: "Plonky3", url: "https://github.com/Plonky3/Plonky3" },
            { title: "two_adic_pcs flowchart", url: "https://miro.com/app/board/uXjVNbLn8WU=/?share_link_id=878894620109" }
          ]
        },
        {
          title: "Plonky3/fri/src/two_adic_pcs.rs",
          speaker: "阳小雪",
          videoLink: "https://www.youtube.com/embed/rUQK6j3Bhsk",
          resources: [
            { title: "Plonky3", url: "https://github.com/Plonky3/Plonky3" }
          ]
        },
        {
          title: "uni-stark of plonky3",
          speaker: "hhh",
          videoLink: "https://www.youtube.com/embed/UHfP-1Pm1Ak",
          resources: [
            { title: "Plonky3", url: "https://github.com/Plonky3/Plonky3" },
            { title: "Code comments", url: "https://github.com/cyl19970726/Plonky3/tree/main_comment" }
          ]
        }
      ],
      assignments: [
        {
          title: "Part 3 作业",
          description: "Plonky3-fri",
          url: "https://github.com/Antalpha-Labs/zkp-academy/discussions/58"
        }
      ],
      supplementaryResources: [
        { title: "Winterfell - FRI", url: "https://github.com/facebook/winterfell" },
        { title: "RiscZero - FRI", url: "https://github.com/risc0/risc0/blob/main/risc0/zkp/src/prove/fri.rs" },
        { title: "How to code FRI from scratch", url: "https://blog.lambdaclass.com/how-to-code-fri-from-scratch/" }
      ]
    }
  ],
  generalSupplementaryResources: [
    { title: "Cairo VM", url: "https://github.com/lambdaclass/cairo-vm?tab=readme-ov-file#starks" },
    { title: "RiscZero Reference", url: "https://dev.risczero.com/reference-docs/about-fri" },
    { title: "RiscZero Introduction to FRI", url: "https://www.youtube.com/playlist?list=PLcPzhUaCxlCi6rRRiIlkzJ_YELUlKO4Mz" },
    { title: "Fast Reed-Solomon IOP (FRI) Proximity Test", url: "https://rot256.dev/post/fri/" },
    { title: "A summary on the FRI low degree test", url: "https://eprint.iacr.org/2022/1216.pdf" },
    { title: "FRIDA: Data Availability Sampling from FRI", url: "https://eprint.iacr.org/2024/248.pdf" },
    { title: "Study of Arithmetization Methods for STARKs", url: "https://eprint.iacr.org/2023/661.pdf" }
  ],
  sponsors: [
    {
      name: "Starknet",
      logo: "/images/sponsors/starknet.png",
      alt: "Starknet Sponsor"
    }
  ],
  githubBaseUrl: "https://github.com/Antalpha-Labs/zkp-academy/tree/main/FRI%26Stark",
  discussionUrl: "https://github.com/Antalpha-Labs/zkp-academy/discussions"
}; 