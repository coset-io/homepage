import React from "react"
import dayjs from "dayjs"
import CustomParseFormat from "dayjs/plugin/customParseFormat"
import { useNotionArticles } from "./hooks/use-notion-articles"
import { Notion, Type } from "../../types/notion"
import { siteConfig } from "../../config"

dayjs.extend(CustomParseFormat)

const formatDate = (givenDate: string | Date) => {
  const day = dayjs(givenDate, "MMM Do, YYYY")
  if (!day.isValid()) {
    return dayjs(givenDate).format("DD MMM, YYYY")
  }
  return day.format("DD MMM, YYYY")
}

interface Article {
  link: string
  coverUrl?: string
  title: string
  date: string
  author?: string
  type?: Type["multi_select"]
}

const DATA: Article[] = [
  {
    link: "https://mirror.xyz/co-set.eth/N3BKvnlaYVEHpERJSSivauPkmbCXPuD44a9xi5bHqkE",
    coverUrl:
      "https://images.mirror-media.xyz/publication-images/2n226nPDYl2EScP5BQyKb.png?height=960&width=1920",
    title: "ep2 On proving systems - What ZKP builders need to know",
    author: "Coset",
    date: "August 25th, 2023",
  },
  {
    link: "https://mirror.xyz/co-set.eth/laGJGh1UyRbUYM6bs4cKlY7Vp6YQeZaO5QBuidCXZpA",
    title: "Qiming & AHH #ZKonnect @ Istanbul Oct 22nd - Nov 20th 2023",
    author: "Coset",
    date: "August 19th, 2023",
  },
  {
    link: "https://mirror.xyz/co-set.eth/Wl8R4-mKiZ1xMgqPyX3u_f1UN4IAzBEJb4AKcG6pjGw",
    coverUrl:
      "https://images.mirror-media.xyz/publication-images/_0Cu5FzIlAuzdNhQYPr9S.png?height=960&width=1920",
    title: "Wen Building上线啦 ｜ep1 当我们谈论如何build Dex时",
    author: "Coset",
    date: "August 18th, 2023",
  },
  {
    link: "https://mirror.xyz/co-set.eth/rBzGa_HdvYnRnCIMl2yygfHg_nitshpGloyAkks01Go",
    coverUrl:
      "https://images.mirror-media.xyz/publication-images/PpDwK47oZzx4bcq6U4T47.jpeg?height=544&width=1088",
    title: "「对话」Moveflow Founder Troy | 构建可编程的支付系统",
    author: "Xuan",
    date: "August 17th, 2023",
  },
]

const notionsToArticles = (notions?: Notion[]): Article[] | undefined => {
  const data = notions?.map((notion) => ({
    date: notion.created_time,
    link: notion.public_url ?? notion.url,
    title: notion.properties.HeadTitle.title?.map(x => x.plain_text).join(''),
    type: notion.properties.Type?.multi_select,
    author: notion.properties.Author.rich_text?.map(x => x.plain_text).join(''),
    coverUrl: notion.cover?.file?.url ?? notion.cover?.external?.url,
  }))
  return data
}

export const LatestNews = () => {
  const { data: notions } = useNotionArticles()
  const articles = notionsToArticles(notions)
  const latest6Articles = (articles ?? DATA).slice(0, 6)

  return (
    <section className="pt-12 md:pt-20 lg:pt-32 pb-20">
      <div className="flex flex-col container px-8 md:px-2 mx-auto relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="236"
          height="229"
          viewBox="0 0 236 229"
          fill="none"
          className="absolute -right-2 -top-20"
        >
          <path
            d="M115.075 74.9196C114.368 72.4926 113.646 70.465 110.715 71.0991C109.062 71.4489 107.455 71.9605 105.837 72.4317C104.786 72.7379 103.584 73.1318 102.987 74.0954C102.206 75.332 102.694 76.8573 103.1 78.0995C103.805 80.2198 105.09 82.5223 104.708 84.8275C104.585 85.6093 105.785 85.9621 105.937 85.128C106.369 82.5447 105.142 80.1378 104.354 77.7344C103.743 75.9377 103.597 74.5322 105.625 73.8101C106.705 73.4516 107.832 73.2549 108.884 72.9486C109.814 72.6777 111.038 72.0581 111.994 72.1748C113.453 72.3641 113.619 74.2904 113.96 75.4634C114.585 77.6072 116.199 81.0423 115.105 83.1602C114.744 83.8796 115.841 84.4817 116.202 83.7622C117.514 81.1861 115.817 77.4679 115.075 74.9196Z"
            fill="#00AAD3"
          />
          <path
            d="M118.119 145.645C118.014 145.587 117.898 145.49 117.782 145.392C117.393 145.11 117.044 144.817 116.724 144.471C116.596 144.333 116.48 144.235 116.352 144.097C115.38 143.02 114.656 141.739 114.343 140.513C114.331 140.473 114.319 140.433 114.308 140.392C114.296 140.352 114.272 140.271 114.26 140.23C113.318 133.528 119.328 128.399 125.819 128.088C129.545 127.925 132.465 129.663 134.178 131.929C134.254 132.039 134.329 132.148 134.417 132.298C135.274 133.584 135.722 135.121 135.81 136.631C135.817 136.805 135.812 136.938 135.819 137.112C135.795 138.084 135.638 139.051 135.295 139.985C135.25 140.13 135.164 140.286 135.13 140.472C134.775 141.365 134.248 142.264 133.644 143.054C130.253 147.684 122.631 148.631 118.119 145.645Z"
            fill="#FFD25F"
          />
          <path
            d="M116.736 144.512C117.056 144.857 117.405 145.151 117.794 145.432C117.91 145.53 118.015 145.587 118.131 145.685C118.404 145.869 118.677 146.053 118.99 146.225C121.236 142.938 125.649 140.161 129.318 139.049C131.462 138.424 133.663 137.696 135.848 137.059C135.853 136.926 135.846 136.753 135.851 136.62C135.803 135.098 135.315 133.573 134.458 132.286C134.382 132.177 134.306 132.067 134.219 131.917C132.546 129.64 129.574 127.872 125.86 128.077C119.368 128.387 113.359 133.516 114.301 140.218C114.313 140.259 114.336 140.34 114.348 140.38C114.36 140.421 114.372 140.461 114.384 140.502C114.696 141.727 115.368 142.979 116.392 144.085C116.48 144.235 116.608 144.373 116.736 144.512Z"
            fill="#FD7960"
          />
          <path
            d="M148.047 129.075L99.588 143.187C97.4744 136.079 95.9676 128.795 95.1279 121.844C95.0675 121.335 95.007 120.826 94.9466 120.317C94.777 118.83 94.6714 117.413 94.6063 115.984C94.166 109.048 94.5445 102.662 95.8847 97.621C96.1007 96.856 96.3167 96.091 96.5328 95.326C96.8686 94.219 97.228 93.1928 97.5991 92.2072C103.568 76.6908 114.774 74.7878 124.753 82.2372C125.09 82.4902 125.375 82.7144 125.712 82.9673C131.814 87.948 137.343 96.3864 140.934 107.364C141.099 107.93 141.304 108.484 141.469 109.051C141.681 109.779 141.934 110.495 142.175 111.171C144.297 117.705 146.323 123.609 148.047 129.075Z"
            fill="#93D3C5"
          />
          <path
            d="M128.445 127.763C119.381 128.735 104.732 136.292 96.3665 141.317C87.522 146.657 85.4464 149.323 94.7498 146.614C112.912 141.325 135.563 134.729 148.548 130.948C163.716 126.531 166.41 123.728 128.445 127.763Z"
            fill="#93D3C5"
          />
          <path
            d="M147.082 126.065C145.606 121.449 143.902 116.504 142.186 111.212C141.933 110.495 141.733 109.808 141.481 109.091C141.316 108.525 141.11 107.97 140.945 107.404C135.642 91.0016 125.831 80.2123 116.504 78.3209C114.094 77.8818 112.81 77.9924 111.549 78.184C111.492 78.2885 111.487 78.4216 111.43 78.5261C111.001 79.6162 111.461 80.1405 112.05 81.1097C112.202 81.3289 112.301 81.5193 112.441 81.698C112.453 81.7385 112.517 81.8076 112.569 81.8363C112.697 81.9745 112.797 82.165 112.925 82.3032C112.936 82.3437 112.989 82.3723 113 82.4128C113.14 82.5915 113.28 82.7702 113.46 82.9371C113.512 82.9657 113.536 83.0466 113.588 83.0753C113.716 83.2135 113.832 83.3113 113.96 83.4496C114.013 83.4782 114.036 83.5591 114.088 83.5878C114.228 83.7665 114.397 83.893 114.565 84.0194C114.629 84.0885 114.693 84.1577 114.757 84.2268C114.873 84.3246 114.937 84.3937 115.054 84.4915C115.478 84.8944 115.891 85.2569 116.315 85.6599C116.92 86.2297 117.525 86.7996 118.061 87.4334C119.976 89.6401 121.724 92.0271 123.293 94.5539C126.293 99.4287 128.832 104.833 130.312 110.369C131.079 113.305 131.564 116.323 132.209 119.295C132.778 121.85 133.412 124.78 134.859 127.036C134.934 127.145 135.01 127.255 135.086 127.364C135.238 127.584 135.377 127.762 135.517 127.941C135.569 127.97 135.593 128.051 135.645 128.079C135.773 128.217 135.901 128.356 136.029 128.494C136.081 128.523 136.093 128.563 136.145 128.592C136.326 128.759 136.506 128.926 136.686 129.092C136.698 129.133 136.738 129.121 136.75 129.162C136.919 129.288 137.099 129.455 137.267 129.581C137.32 129.61 137.32 129.61 137.372 129.639C138.952 130.846 140.826 131.705 142.63 132.627L148.657 130.872C160.601 127.438 164.75 124.957 147.082 126.065Z"
            fill="#00AAD3"
          />
          <path
            d="M84.1373 105.649C81.5265 114.615 82.2081 124.64 86.7176 132.893C87.1032 133.614 88.182 132.949 87.7964 132.228C83.4621 124.275 82.8342 114.585 85.3252 105.961C85.5817 105.184 84.3533 104.884 84.1373 105.649Z"
            fill="#FF495D"
          />
          <path
            d="M74.8606 96.5468C68.0873 109.752 70.3249 126.477 75.8551 139.742C76.1598 140.487 77.3733 140.134 77.0686 139.389C71.6848 126.476 69.3679 110.082 76.0096 97.1775C76.3183 96.4294 75.2215 95.8274 74.8606 96.5468Z"
            fill="#FF495D"
          />
          <path
            d="M142.835 86.3178C142.144 85.9047 141.542 87.0015 142.233 87.4146C150.707 92.4064 153.686 102.333 156.561 111.15C156.825 111.907 158.038 111.553 157.774 110.796C154.765 101.668 151.635 91.5221 142.835 86.3178Z"
            fill="#FF495D"
          />
          <path
            d="M148.923 76.0323C148.233 75.6191 147.59 76.7277 148.321 77.1291C162.605 85.3437 168.896 101.371 170.867 117.032C170.97 117.836 172.237 117.818 172.135 117.014C170.074 100.896 163.636 84.5167 148.923 76.0323Z"
            fill="#FF495D"
          />
          <path
            d="M107.085 123.276C106.777 122.971 106.332 123.1 106.079 123.437C106.05 123.489 106.022 123.542 105.993 123.594C105.843 123.682 105.693 123.769 105.659 123.954C105.585 124.152 105.511 124.349 105.436 124.546C104.973 125.515 104.694 126.517 104.561 127.565C104.402 128.226 104.284 128.875 104.165 129.523C103.969 130.809 103.586 132.808 104.737 133.745C105.021 133.969 105.38 133.996 105.645 133.7C107.004 132.339 107.507 129.998 107.804 128.157C108.086 126.714 108.387 124.432 107.085 123.276ZM106.375 125.808C106.437 125.571 106.511 125.374 106.574 125.136C106.602 125.084 106.619 124.991 106.688 124.927C106.794 125.291 106.831 125.719 106.828 126.159C106.74 126.009 106.572 125.883 106.375 125.808Z"
            fill="white"
          />
          <path
            d="M115.131 121.371C114.932 120.991 114.4 120.97 114.135 121.267C113.456 121.947 113.078 122.759 112.857 123.657C111.941 125.635 111.092 128.296 111.86 130.179C111.838 130.404 111.989 130.624 112.158 130.75C112.169 130.79 112.233 130.86 112.245 130.9C112.461 131.188 112.791 131.268 113.091 131.092C114.574 130.309 115.113 128.09 115.371 126.567C115.687 124.939 115.995 122.831 115.131 121.371Z"
            fill="#FFEFD5"
          />
          <path
            d="M104.823 110.683C104.518 110.991 104.265 111.328 104.064 111.694C103.995 111.758 103.937 111.862 103.921 111.955C103.932 111.995 103.892 112.007 103.904 112.047C103.727 112.494 103.59 112.929 103.558 113.421C103.048 115.588 102.782 117.991 103.209 120.06C103.334 120.638 104.121 120.628 104.391 120.199C104.477 120.042 104.563 119.886 104.649 119.729C104.891 119.658 105.058 119.478 105.045 119.131C105.021 119.05 105.038 118.957 105.026 118.917C106.067 116.464 106.117 113.772 105.913 111.111C105.881 110.55 105.237 110.299 104.823 110.683Z"
            fill="white"
          />
          <path
            d="M125.724 83.0075C124.4 84.4899 123.077 85.9723 121.858 87.5121C118.361 91.7775 114.84 97.0153 109.632 99.3218C108.235 99.9481 105.416 101.12 104.561 99.0871C103.777 97.2971 105.146 94.6165 105.809 92.9754C106.398 91.5315 107.01 90.1684 107.547 88.6958C107.947 87.6579 108.599 86.283 108.524 85.1202C108.277 82.1643 104.012 86.6535 103.344 87.3745C100.979 89.9501 98.8983 92.75 96.4807 95.297C96.8165 94.19 97.1759 93.1639 97.547 92.1782C98.8874 90.6031 100.164 88.9589 101.556 87.4125C102.937 85.8256 104.915 83.2751 107.17 82.8817C112.056 82.0294 108.34 89.9128 107.677 91.5539C107.146 92.8934 106.562 94.2042 106.083 95.5724C105.884 96.2447 105.283 97.6482 105.576 98.3528C106.601 100.819 112.883 95.5669 113.81 94.6825C117.34 91.285 120.057 87.2029 123.354 83.6098C123.786 83.1331 124.218 82.6563 124.649 82.1796C125.091 82.4899 125.387 82.7546 125.724 83.0075Z"
            fill="#FFEFD5"
          />
        </svg>

        <h1 className="text-web-black text-3xl lg:text-6xl font-semibold relative inline-block">
          Latest News
          <svg
            width="291"
            height="4"
            viewBox="0 0 291 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0"
          >
            <path
              d="M1.55348 1.20001C83.9046 1.19991 213.589 0.762735 289.9 2.2286"
              stroke="#FFD25F"
              strokeWidth="1.91067"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="289"
            height="3"
            viewBox="0 0 289 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-1"
          >
            <path
              d="M1.18845 1.54102C80.5199 1.54102 182.369 1.54113 287.682 1.54106"
              stroke="#FFD25F"
              strokeWidth="1.91067"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h1>

        {!!latest6Articles?.length && (
          <div className="flex flex-col flex-wrap md:flex-row gap-x-4 gap-y-6 md:gap-x-4 md:gap-y-10 justify-between mt-24">
            {latest6Articles.map((x) => (
              <a
                className="flex flex-col space-y-3 w-full md:max-w-xs xl:max-w-sm 2xl:max-w-md group"
                href={x.link}
                target="_blank"
              >
                <div className="rounded-xl border overflow-hidden bg-white group-hover:border-web-white/70 group-hover:shadow-lg transition-all flex justify-center items-center h-[200px]">
                  {x.coverUrl ? (
                    <img
                      alt={`Cover of ${x.title}`}
                      src={x.coverUrl}
                      className="object-cover w-full"
                    />
                  ) : (
                    <div className="px-6 h-full w-full flex justify-center items-center">
                      <h3 className="text-xl">{x.title}</h3>
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <div className="inline-flex items-center space-x-1">
                    {x.author ? (
                      <>
                        <span className="text-xs normal-case text-web-gray/70">
                          by
                        </span>{" "}
                        <p className="text-xs text-primary-blue uppercase">
                          {x.author}
                        </p>
                      </>
                    ) : x.type ? (
                      x.type.map((x) => (
                        <div
                          className="text-xs uppercase mr-2"
                          style={{ color: x.color }}
                        >
                          {x.name}
                        </div>
                      ))
                    ) : null}
                  </div>

                  <p className="text-xs text-gray-600/70 font-light">
                    {formatDate(x.date)}
                  </p>
                </div>

                <h2 className="text-2xl">{x.title}</h2>
              </a>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-16">
          <a
            href={siteConfig.notions.latestNews}
            className="border-2 border-web-black py-4 px-12 w-full md:max-w-fit text-center hover:bg-white hover:border-transparent hover:text-web-black uppercase font-semibold text-xs transition-colors"
            target="_blank"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  )
}
