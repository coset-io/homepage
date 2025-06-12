import { CourseData } from "../types/course"

export const plonkCourseData: CourseData = {
  title: "Plonk Course",
  description: "本课程深入探讨 Plonk 协议，从理论到实践，帮助学习者掌握这个重要的零知识证明技术。课程内容包括 Plonk 算术化、多项式编码、置换证明、约束系统、多项式承诺、Lookup Gate 等核心概念，并通过代码实践帮助学习者深入理解。",
  githubBaseUrl: "https://github.com/Antalpha-Labs/plonk-intro-notebook",
  discussionUrl: "https://github.com/Antalpha-Labs/plonk-intro-notebook/discussions",
  parts: [
    {
      title: "",
      episodes: [
        {
          title: "ZKP & Plonk overivew",
          speaker: "郭宇",
          videoLink: "https://www.youtube.com/embed/OOBD7cnR1J4",
          resources: [
            {
              title: "课程笔记",
              url: "https://github.com/Antalpha-Labs/zkp-academy/blob/main/Plonk/lesson%201/whyplonk%202024-05-28.pdf"
            }
          ]
        },
        {
          title: "Plonk 算术化",
          speaker: "Yan",
          videoLink: "https://www.youtube.com/embed/L3qMBzPgfWY",
          resources: [
            {
              title: "课程笔记",
              url: "https://github.com/sec-bit/learning-zkp/blob/master/plonk-intro-notebook-zh/1-plonk-arithmetization.ipynb"
            },
            {
              title: "补充材料：理解 PLONK（一）：Plonkish Arithmetization",
              url: "https://github.com/sec-bit/learning-zkp/blob/master/plonk-intro-zh/1-plonk-arithmetization.md"
            },
            {
              title: "补充材料：分享理解 PLONK 原理 一",
              url: "https://www.youtube.com/watch?v=HtKmRcSJUG4&list=PLbQFt1T_44DwN1zWl-KWhkp3s0LAkF2a8&index=5&t=376s"
            }
          ]
        },
        {
          title: "Plonk 中的多项式",
          speaker: "Wangyao",
          videoLink: "https://www.youtube.com/embed/bNGac1CJEKM",
          resources: [
            {
              title: "补充材料：理解 PLONK（二）：多项式编码",
              url: "https://github.com/sec-bit/learning-zkp/blob/master/plonk-intro-zh/2-plonk-lagrange-basis.md"
            },
            {
              title: "补充材料：分享 PLONK 原理 二",
              url: "https://www.youtube.com/watch?v=O5HGp3EHDI0&list=PLbQFt1T_44DwN1zWl-KWhkp3s0LAkF2a8&index=4"
            }
          ]
        },
        {
          title: "置换证明",
          speaker: "Wangyao",
          videoLink: "https://www.youtube.com/embed/B7ubzpXSpqI",
          resources: [
            {
              title: "补充材料：理解 PLONK（三）：置换证明",
              url: "https://github.com/sec-bit/learning-zkp/blob/master/plonk-intro-zh/3-plonk-permutation.md"
            }
          ]
        },
        {
          title: "Plonk中的约束",
          speaker: "Jade",
          videoLink: "https://www.youtube.com/embed/J1P60urkGwc",
          resources: [
            {
              title: "课程幻灯片",
              url: "/Plonk/lesson%205/PLONK%20-%20Lecture%205%20-%20算术约束与拷贝约束.pdf"
            },
            {
              title: "课程代码",
              url: "/Plonk/lesson%205/plonk-lecture5-constraints.ipynb"
            },
            {
              title: "补充材料：理解 PLONK（四）：算术约束与拷贝约束",
              url: "https://github.com/sec-bit/learning-zkp/blob/master/plonk-intro-zh/4-plonk-constraints.md"
            }
          ]
        },
        {
          title: "Plonk中的多项式承诺",
          speaker: "Po",
          videoLink: "https://www.youtube.com/embed/yEH23SwxCG0",
          resources: [
            {
              title: "补充材料：理解 Plonk（五）：多项式承诺",
              url: "https://github.com/sec-bit/learning-zkp/blob/master/plonk-intro-zh/5-plonk-polycom.md"
            }
          ]
        },
        {
          title: "Lookup Gate",
          speaker: "Yingfei",
          videoLink: "https://www.youtube.com/embed/pmO6p9Q-x6g",
          resources: [
            {
              title: "课程幻灯片",
              url: "/Plonk/lesson%207/Plonk.pdf"
            },
            {
              title: "补充材料：理解 PLONK（七）：Lookup Gate",
              url: "https://github.com/sec-bit/learning-zkp/blob/master/plonk-intro-zh/7-plonk-lookup.md"
            },
            {
              title: "补充材料：分享理解 PLONK 原理 三 Lookup argument",
              url: "https://www.youtube.com/watch?v=StvnHnC4Dk4&list=PLbQFt1T_44DwN1zWl-KWhkp3s0LAkF2a8&index=3"
            }
          ]
        },
        {
          title: "Custom Gate & Lookup Gate",
          speaker: "Yingfei",
          videoLink: "https://www.youtube.com/embed/I6asKtO8Q8E",
          resources: [
            {
              title: "课程幻灯片",
              url: "/Plonk/lesson%208/plookup%20and%20custom%20gates.pdf"
            }
          ]
        },
        {
          title: "代码实践",
          speaker: "Harry Liu",
          videoLink: "https://www.youtube.com/embed/lHEJuYYk3VU",
          resources: [
            {
              title: "Baby Plonk",
              url: "https://github.com/Antalpha-Labs/baby-plonk"
            }
          ]
        }
      ]
    }
  ],
  generalSupplementaryResources: [
    {
      title: "理解 Plonk 协议",
      url: "https://github.com/sec-bit/learning-zkp/tree/master/plonk-intro-zh"
    },
    {
      title: "Plonk intro notebook",
      url: "https://github.com/Antalpha-Labs/plonk-intro-notebook?tab=readme-ov-file"
    }
  ]
} 