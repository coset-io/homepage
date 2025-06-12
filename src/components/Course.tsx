import React, { useState, useEffect } from "react"
import { PureHeader } from "./site-header"
import { PureFooter } from "./footer"
import { TailwindIndicator } from "./tailwind-indicator"
import { CourseProps } from "../types/course"

declare global {
  interface Window {
    readonly scrollY: number;
  }
}

interface HTMLElement {
  readonly offsetTop: number;
  readonly offsetHeight: number;
}

export default function Course({ courseData, navigationItems, footerConfig }: CourseProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("episode-1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="episode-"]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "episode-1");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Calculate total episodes for navigation
  const totalEpisodes = courseData.parts.reduce((acc, part) => acc + part.episodes.length, 0);

  return(
    <div className="bg-web-paper text-gray-800 font-inter min-h-screen">
      <PureHeader navigationItems={navigationItems} />
      
      {/* 移动端菜单按钮 */}
      <div className="lg:hidden sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-3 px-4">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center space-x-2 text-gray-700 py-2 px-4 rounded-md border border-gray-200 w-full"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span>{courseData.parts.flatMap(p => p.episodes)[parseInt(activeSection.split('-')[1]) - 1]?.title || '课程目录'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${mobileMenuOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="mx-auto container gap-4 flex flex-col lg:flex-row justify-center px-4 flex-grow py-6 lg:py-10">
        {/* 移动端菜单覆盖层 - 全屏设计 */}
        <div 
          className={`fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMobileMenu}
        ></div>
        
        {/* 移动端全屏菜单 */}
        <div 
          id="mobile-menu"
          className={`fixed inset-x-0 top-0 z-40 lg:hidden bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out overflow-auto ${
            mobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
          style={{
            height: '100dvh',
            overscrollBehavior: 'contain'
          }}
        >
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">课程导航</h2>
            <button 
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={closeMobileMenu}
              aria-label="关闭菜单"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4 max-h-[calc(100dvh-4rem)] overflow-y-auto">
            {courseData.parts.map((part, partIndex) => (
              <div key={`mobile-part-${partIndex}`} className="mb-6">
                {part.title && <h3 className="text-base font-semibold text-gray-800 mb-3">{part.title}</h3>}
                <ul className="space-y-2">
                  {part.episodes.map((episode, episodeIndex) => {
                    const globalIndex = courseData.parts.slice(0, partIndex).reduce((acc, p) => acc + p.episodes.length, 0) + episodeIndex + 1;
                    const episodeNumber = episodeIndex + 1;
                    return (
                      <li 
                        key={`mobile-episode-${globalIndex}`}
                        style={{
                          opacity: 0,
                          animation: mobileMenuOpen ? `slideDown 0.4s ease-out ${globalIndex * 50}ms forwards` : 'none'
                        }}
                      >
                        <a 
                          href={`#episode-${globalIndex}`}
                          onClick={(e) => {
                            setActiveSection(`episode-${globalIndex}`);
                            closeMobileMenu();
                          }}
                          className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                            activeSection === `episode-${globalIndex}`
                              ? "bg-blue-100/70 text-blue-700 font-medium"
                              : "hover:bg-gray-100/70 text-gray-700 hover:text-blue-600"
                          }`}
                        >
                          <span className="flex items-center">
                            <span className={`w-8 h-8 flex-shrink-0 rounded-full mr-3 flex items-center justify-center text-sm ${
                              activeSection === `episode-${globalIndex}`
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}>{episodeNumber}</span>
                            <span className="font-medium">{episode.title}</span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            
            {/* 移动端赞助商列表 */}
            {courseData.sponsors && courseData.sponsors.length > 0 && (
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h3 className="text-base font-semibold text-gray-800 mb-4 px-4">赞助商</h3>
                <ul className="space-y-2">
                  {courseData.sponsors.map((sponsor, idx) => (
                    <li 
                      key={`sponsor-mobile-nav-${idx}`}
                      style={{
                        opacity: 0,
                        animation: mobileMenuOpen ? `slideDown 0.4s ease-out ${(totalEpisodes + idx) * 50}ms forwards` : 'none'
                      }}
                    >
                      <a 
                        href="#sponsors-section"
                        onClick={() => {
                          const sponsorsSection = document.getElementById('sponsors-section');
                          if (sponsorsSection) {
                            sponsorsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                          closeMobileMenu();
                        }}
                        className="block py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100/70 text-gray-700 hover:text-blue-600"
                      >
                        <span className="flex items-center">
                          <span className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="font-medium">{sponsor.alt}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* 侧边栏 - 桌面端 */}
        <aside className="hidden lg:block w-80 shrink-0 pr-6 sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <div className="rounded-lg shadow-sm border border-gray-200 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">课程导航</h2>
            {courseData.parts.map((part, partIndex) => (
              <div key={`desktop-part-${partIndex}`} className="mb-6">
                <h3 className="text-base font-semibold text-gray-800 mb-3">{part.title}</h3>
                <ul className="space-y-1">
                  {part.episodes.map((episode, episodeIndex) => {
                    const globalIndex = courseData.parts.slice(0, partIndex).reduce((acc, p) => acc + p.episodes.length, 0) + episodeIndex + 1;
                    const episodeNumber = episodeIndex + 1;
                    return (
                      <li key={`desktop-episode-${globalIndex}`}>
                        <a 
                          href={`#episode-${globalIndex}`}
                          onClick={() => setActiveSection(`episode-${globalIndex}`)}
                          className={`block py-2.5 px-3 rounded-md transition-all duration-200 ${
                            activeSection === `episode-${globalIndex}`
                              ? "bg-blue-100/70 text-blue-700 font-medium translate-x-1"
                              : "hover:bg-gray-100/70 text-gray-700 hover:text-blue-600 hover:translate-x-1"
                          }`}
                        >
                          <span className="flex items-center">
                            <span className={`w-6 h-6 flex-shrink-0 rounded-full mr-2 flex items-center justify-center text-xs ${
                              activeSection === `episode-${globalIndex}`
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}>{episodeNumber}</span>
                            <span className="line-clamp-3 text-sm" title={episode.title}>{episode.title}</span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            
            {/* 赞助商列表 */}
            {courseData.sponsors && courseData.sponsors.length > 0 && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-base font-semibold text-gray-800 mb-4">赞助商</h3>
                <ul className="space-y-2">
                  {courseData.sponsors.map((sponsor, idx) => (
                    <li key={`sponsor-nav-${idx}`}>
                      <a 
                        href="#sponsors-section"
                        onClick={() => {
                          const sponsorsSection = document.getElementById('sponsors-section');
                          if (sponsorsSection) {
                            sponsorsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="block py-2 px-3 rounded-md transition-all duration-200 hover:bg-gray-100/70 text-gray-600 hover:text-blue-600 hover:translate-x-1 text-sm"
                      >
                        <span className="flex items-center">
                          <span className="line-clamp-1">{sponsor.alt}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 space-y-10 lg:space-y-10 custom-scrollbar mt-4 lg:mt-0">
          {/* 标题和描述 */}
          <div className="rounded-lg p-6 lg:p-8 border bg-white/50 backdrop-blur-sm border-gray-200 shadow-sm mx-auto">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">{courseData.title}</h2>
            <p className="text-sm text-gray-600">{courseData.description}</p>
          </div>

          {courseData.parts.map((part, partIndex) => (
            <div key={`part-${partIndex}`} className="space-y-8">
              {part.title && <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">{part.title}</h2>}
              {part.episodes.map((episode, episodeIndex) => {
                const globalIndex = courseData.parts.slice(0, partIndex).reduce((acc, p) => acc + p.episodes.length, 0) + episodeIndex + 1;
                const episodeNumber = episodeIndex + 1;
                return (
                  <section 
                    id={`episode-${globalIndex}`} 
                    key={`episode-content-${globalIndex}`}
                    className="rounded-lg shadow-sm border border-gray-200 p-4 lg:p-8 bg-white/50 backdrop-blur-sm"
                  >
                    <div className="mb-4 lg:mb-6 flex justify-between items-start">
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Episode {episodeNumber}: {episode.title}</h2>
                        <p className="text-sm text-gray-600">主讲人：{episode.speaker}</p>
                      </div>
                      <a 
                        href={`${courseData.githubBaseUrl}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                        </svg>
                        Edit on GitHub
                      </a>
                    </div>
                    
                    <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-md">
                      <iframe 
                        className="w-full h-full" 
                        src={episode.videoLink} 
                        title={`Episode ${episodeNumber}: ${episode.title}`} 
                        frameBorder="0" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    
                    {episode.slideLink && (
                      <div className="mb-4">
                        <a 
                          href={episode.slideLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors text-sm lg:text-base"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-5 w-4 lg:w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          查看课件
                        </a>
                      </div>
                    )}
                    
                    {episode.resources && episode.resources.length > 0 && (
                      <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-200">
                        <h3 className="text-base font-medium mb-3 lg:mb-4 text-gray-700">推荐资料</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                          {episode.resources.map((resource, i) => (
                            <li key={`resource-${globalIndex}-${i}`} className="flex">
                              <a 
                                className="flex-1 text-gray-700 hover:text-gray-900 p-2 lg:p-3 bg-gray-50/70 rounded-md border border-gray-200 text-xs lg:text-sm hover:bg-gray-100/70 transition-colors" 
                                href={resource.url} 
                                target="_blank" 
                                rel="noreferrer"
                              >
                                {resource.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                );
              })}

              {/* 课程作业模块 - 移到每个 part 的末尾 */}
              {part.assignments && part.assignments.length > 0 && (
                <div className="mt-8 rounded-lg p-6 lg:p-8 border bg-white/50 backdrop-blur-sm border-gray-200 shadow-sm">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">课程作业</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {part.assignments.map((assignment, index) => (
                      <a 
                        key={`assignment-${partIndex}-${index}`}
                        href={assignment.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`group block p-6 rounded-lg border border-gray-200 bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200 hover:border-blue-200 ${
                          index === part.assignments.length - 1 && part.assignments.length % 3 === 1 ? 'md:col-span-2 lg:col-span-1' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">{index + 1}</span>
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{assignment.title}</h3>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3">{assignment.description}</p>
                        <div className="mt-4 flex items-center text-xs text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          GitHub Discussion
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* 补充资源模块 */}
              {part.supplementaryResources && part.supplementaryResources.length > 0 && (
                <div className="mt-8 rounded-lg p-6 lg:p-8 border bg-white/50 backdrop-blur-sm border-gray-200 shadow-sm">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">补充资源</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {part.supplementaryResources.map((resource, index) => (
                      <a
                        key={`supplementary-${partIndex}-${index}`}
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group block p-4 rounded-lg border border-gray-200 bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200 hover:border-blue-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-3 text-sm">{resource.title}</h3>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* 通用补充资源区块 */}
          {courseData.generalSupplementaryResources && courseData.generalSupplementaryResources.length > 0 && (
            <div className="mt-16 mb-10 mx-auto rounded-lg p-6 lg:p-8 border bg-white/50 backdrop-blur-sm border-gray-200 shadow-sm">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">课程补充学习资料</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {courseData.generalSupplementaryResources.map((resource, index) => (
                  <a
                    key={`general-supplementary-${index}`}
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-4 rounded-lg border border-gray-200 bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200 hover:border-blue-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-3 text-sm">{resource.title}</h3>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* 赞助商展示区块 */}
          {courseData.sponsors && courseData.sponsors.length > 0 && (
            <div id="sponsors-section" className="mt-16 mb-10 mx-auto rounded-lg p-6 lg:p-8 text-center border bg-white/50 backdrop-blur-sm border-gray-200 shadow-sm">
              <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-6">感谢本期课程赞助方</h2>
              <div className="flex justify-center flex-wrap gap-6">
                {courseData.sponsors.map((sponsor, index) => (
                  <img 
                    key={`sponsor-${index}`}
                    src={sponsor.logo} 
                    alt={sponsor.alt} 
                    className="max-h-16 lg:max-h-20 object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          {/* 底部讨论区块 */}
          <div className="mt-16 mb-10 mx-auto p-6 lg:p-8 text-center border-t border-gray-200">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Learn More / 了解更多信息</h2>
            <p className="text-gray-700 mb-3">
              New to here? Don't worry, we are welcome for your questions.<br />
              新来这里？别担心，我们欢迎您的提问。
            </p>
            <p className="text-gray-700 mb-6">
              If you find anything confusing, please give your feedback on Github Discussion!<br />
              如果您发现任何令人困惑的地方，请在 Github Discussion 上提供您的反馈！
            </p>
            <a 
              href={courseData.discussionUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              Join the Discussion
            </a>
          </div>
        </main>
      </div>
      <PureFooter config={footerConfig} className="" />
      <TailwindIndicator />
      
      {/* 自定义滚动条样式 */}
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
      
      {/* 控制移动端菜单打开时的body样式 */}
      {typeof document !== 'undefined' && (
        <script dangerouslySetInnerHTML={{
          __html: `
            document.body.className = ${mobileMenuOpen ? "'menu-open'" : "''"};
          `
        }} />
      )}
    </div>
  )
} 