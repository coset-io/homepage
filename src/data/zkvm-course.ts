import { CourseData } from "../types/course"

export const zkvmCourseData: CourseData = {
  title: "zkVM Course",
  description: "zkVM 作为一种结合零知识证明（Zero-Knowledge Proof, ZKP）和虚拟机（Virtual Machine, VM）的新型技术，背后承载了多个领域的努力，包括密码学、区块链、分布式系统和计算理论，才走到如今，被普遍认为是突破区块链和分布式系统技术瓶颈的「潜力股」。",
  parts: [
    {
      title: "",
      episodes: [
        {
          title: "zkVM 的历史和现状",
          speaker: "wangyao",
          videoLink: "https://www.youtube.com/embed/xoGte-TzHHk",
          slideLink: "https://github.com/Antalpha-Labs/zkp-academy/blob/main/ZKVM/lesson%201/zkvm-wangyao.pdf",
          resources: [
            { title: "A guide to Zero Knowledge Proofs", url: "https://medium.com/@Luca_Franceschini/a-guide-to-zero-knowledge-proofs-f2ff9e5959a8" },
            { title: "The different types of ZK-EVMs", url: "https://vitalik.eth.limo/general/2022/08/04/zkevm.html" },
            { title: "Jolt", url: "https://eprint.iacr.org/2023/1217" }
          ]
        },
        {
          title: "深入解析 Jolt",
          speaker: "Backdoor",
          videoLink: "https://www.youtube.com/embed/lFUYsULyUNY",
          slideLink: "https://doutv.notion.site/Jolt-Lasso-for-Newbies-1591aee049b480b7a44ad7d00e3e9265?pvs=4",
          resources: [
            { title: "Lasso + Jolt", url: "https://www.youtube.com/playlist?list=PLjQ9HCQMu_8xjOEM_vh5p26ODtr-mmGxO" },
            { title: "Binius", url: "https://vitalik.eth.limo/general/2024/04/29/binius.html" },
            { title: "JoltBook", url: "https://jolt.a16zcrypto.com/how/jolt.html" },
            { title: "Jolt R1CS", url: "https://x.com/samrags_/status/1820429579787423759?s=46" },
            { title: "Jolt 技术解析", url: "https://www.zksecurity.xyz/blog/posts/how-jolt-works/" }
          ]
        },
        {
          title: "zkwasm 介绍",
          speaker: "Sinka",
          videoLink: "https://www.youtube.com/embed/ZwibS4uGEj4",
          resources: []
        },
        {
          title: "虚拟机简析",
          speaker: "Johnxu",
          videoLink: "https://www.youtube.com/embed/KxxeyKTksxs",
          slideLink: "https://github.com/coset-io/zkp-academy/blob/main/ZKVM/lesson%204/Introduce%20the%20zkVM.pdf",
          resources: [
            { title: "Building a RISC-V simulator in Rust", url: "https://gregchadwick.co.uk/blog/building-rrs-pt1/" },
            { title: "SP1 zkVM 源码解析", url: "https://trapdoortech.medium.com/zero-knowledge-proof-introduction-to-sp1-zkvm-source-code-d26f88f90ce4" },
            { title: "Memory management in VM", url: "https://blog.tigris.fr/2019/07/28/writing-an-emulator-memory-management/" },
            { title: "RISC-V emulator in C", url: "https://fmash16.github.io/content/posts/riscv-emulator-in-c.html" }
          ]
        },
        {
          title: "电路设计与 prover",
          speaker: "Dream",
          videoLink: "https://www.youtube.com/embed/avAIjRvgwqc",
          resources: []
        },
        {
          title: "电路设计与 prover（二）",
          speaker: "Dream",
          videoLink: "https://www.youtube.com/embed/sALgu6tHEhs",
          resources: []
        },
        {
          title: "ZKM prover 详解",
          speaker: "Daniel",
          videoLink: "https://www.youtube.com/embed/KlhQns_8QII",
          slideLink: "https://github.com/coset-io/zkp-academy/blob/main/ZKVM/lesson%207/ZKM%20Prover%E5%9F%BA%E6%9C%AC%E6%9E%84%E9%80%A0%E8%AF%BE%E7%A8%8B.pptx",
          resources: []
        },
        {
          title: "实操讲解",
          speaker: "Johnxu",
          videoLink: "https://www.youtube.com/embed/rSNyOY1U7x0",
          resources: []
        }
      ],
      assignments: [
        {
          title: "第一周作业",
          description: "zkVM 课程第一周作业",
          url: "https://github.com/coset-io/zkp-academy/discussions/66"
        },
        {
          title: "第二周作业",
          description: "zkVM 课程第二周作业",
          url: "https://github.com/coset-io/zkp-academy/discussions/69"
        },
        {
          title: "第三周作业",
          description: "Add instruction in SP1",
          url: "https://github.com/coset-io/zkp-academy/discussions/70"
        }
      ]
    }
  ],
  sponsors: [
    {
      name: "ZKM",
      logo: "/images/sponsors/zkm.png",
      alt: "ZKM Sponsor"
    }
  ],
  githubBaseUrl: "https://github.com/coset-io/zkp-academy/tree/main/ZKVM",
  discussionUrl: "https://github.com/coset-io/zkp-academy/discussions"
}; 