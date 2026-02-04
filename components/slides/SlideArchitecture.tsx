import React from 'react';
import { LogoLotte } from '../Icons';

const SlideArchitecture: React.FC = () => {
    return (
        <section className="relative h-[1080px] w-full flex flex-col bg-white overflow-hidden text-brown-dark font-sans">
            {/* Header Bar */}
            <div className="flex justify-between items-center px-12 py-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold">3.1. 시스템 목표 구성도</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <LogoLotte className="h-4" />
                    <span>III. 기술 부문 ▶ 3.1. 시스템 목표 구성도</span>
                </div>
            </div>

            <div className="flex-1 p-12 flex flex-col gap-8">
                {/* Subtitle & Message */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full border-2 border-brown-dark flex items-center justify-center text-sm">2</span>
                        소프트웨어 구성도
                    </h2>
                    <h1 className="text-4xl font-bold mb-2">
                        검증된 기술 스택과 계층 분리로 안정성과 확장성을 확보합니다.
                    </h1>
                    <p className="text-lg text-gray-600 max-w-5xl leading-relaxed">
                        Spring Boot와 React 기반의 표준 아키텍처로 장기 유지보수를 용이하게 하고, 기존 통합정보시스템 및 엘리프 홈페이지와 자연스럽게 연계되는 구조로 현 운영 환경에 최적화된 시스템을 구축합니다.
                    </p>
                </div>

                <div className="flex flex-1 gap-8">
                    {/* Main Diagram Area */}
                    <div className="flex-[3] bg-[#F8F9FB] rounded-xl p-8 flex flex-col gap-6 relative">

                        {/* Layers Labels Left side */}
                        <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around text-sm font-bold text-gray-400 py-12">
                            <span>CLIENT</span>
                            <span>WEB/WAS</span>
                            <span>APIs</span>
                            <span>레거시</span>
                            <span>DBMS</span>
                        </div>

                        {/* Diagram Content */}
                        <div className="ml-24 flex flex-col gap-6 h-full justify-around">

                            {/* Client Layer */}
                            <div className="flex gap-4">
                                <div className="flex-1 bg-[#1A3B66] text-white p-4 rounded-lg text-center">
                                    <p className="font-bold">고객 App</p>
                                    <p className="text-xs opacity-70">(iOS/Android)</p>
                                </div>
                                <div className="flex-1 bg-[#1A3B66] text-white p-4 rounded-lg text-center">
                                    <p className="font-bold">하자보수 직원 App</p>
                                    <p className="text-xs opacity-70">(iOS/Android)</p>
                                </div>
                                <div className="flex-1 bg-[#1A3B66] text-white p-4 rounded-lg text-center">
                                    <p className="font-bold">관리자 Web</p>
                                    <p className="text-xs opacity-70">(Browser)</p>
                                </div>
                            </div>

                            {/* WEB/WAS Layer */}
                            <div className="flex gap-4 items-center">
                                <div className="flex-[3] bg-[#004B8D] text-white p-4 rounded-lg text-center relative">
                                    <p className="font-bold">Nginx</p>
                                    <p className="text-xs opacity-70">(로드 밸런싱)</p>
                                </div>
                                <div className="flex-1 bg-[#004B8D] text-white p-4 rounded-lg text-center">
                                    <p className="font-bold">Redis</p>
                                    <p className="text-xs opacity-70">(세션/캐시)</p>
                                </div>
                            </div>

                            {/* APIs Layer */}
                            <div className="flex gap-4">
                                <div className="flex-1 border-2 border-dashed border-red-500 rounded-xl p-4 flex gap-4">
                                    <div className="flex-1 bg-[#5C2E1F] text-white p-4 rounded-lg text-center">
                                        <p className="font-bold">API Server</p>
                                        <p className="text-xs opacity-70">(Spring Boot)</p>
                                        <div className="grid grid-cols-3 gap-1 mt-2">
                                            <span className="bg-white/10 text-[10px] py-1 rounded">민원/예약</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">하자</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">커뮤니티</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">챗봇</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">푸시</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">회원</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-[#5C2E1F] text-white p-4 rounded-lg text-center">
                                        <p className="font-bold">Admin WAS</p>
                                        <p className="text-xs opacity-70">(Thymeleaf)</p>
                                        <div className="grid grid-cols-2 gap-1 mt-2">
                                            <span className="bg-white/10 text-[10px] py-1 rounded">커뮤니티</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">APP관리</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">회원관리</span>
                                            <span className="bg-white/10 text-[10px] py-1 rounded">설문</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legacy Layer */}
                            <div className="bg-[#5C2E1F] text-white p-4 rounded-lg text-center">
                                <p className="font-bold">통합시스템 WAS</p>
                            </div>

                            {/* DBMS Layer */}
                            <div className="flex gap-12 justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-12 mx-auto border-2 border-gray-400 rounded-full mb-2 flex items-center justify-center">
                                        <span className="text-[10px]">분양앱</span>
                                    </div>
                                    <p className="text-xs font-bold">분양앱</p>
                                    <p className="text-[10px] opacity-60">(MySQL/Oracle)</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-12 mx-auto border-2 border-gray-400 rounded-full mb-2 flex items-center justify-center">
                                        <span className="text-[10px]">통합정보</span>
                                    </div>
                                    <p className="text-xs font-bold">통합정보</p>
                                    <p className="text-[10px] opacity-60">(Oracle)</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-12 mx-auto border-2 border-gray-400 rounded-full mb-2 flex items-center justify-center">
                                        <span className="text-[10px]">홈페이지</span>
                                    </div>
                                    <p className="text-xs font-bold">홈페이지</p>
                                    <p className="text-[10px] opacity-60">(Oracle)</p>
                                </div>
                            </div>

                        </div>

                        {/* External Integration Side panel */}
                        <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-32 flex flex-col gap-2">
                            <div className="bg-[#0070C0] text-white py-2 px-4 rounded-t-lg text-center font-bold text-sm">외부연동</div>
                            <div className="bg-white border-2 border-[#0070C0] rounded-b-lg p-2 flex flex-col gap-2 shadow-lg">
                                <div className="border border-gray-200 p-2 text-center">
                                    <p className="text-xs font-bold">FCM</p>
                                    <p className="text-[8px] opacity-60">(푸시)</p>
                                </div>
                                <div className="border border-gray-200 p-2 text-center">
                                    <p className="text-xs font-bold">AI API</p>
                                    <p className="text-[8px] opacity-60">(인사이트)</p>
                                </div>
                                <div className="border border-gray-200 p-2 text-center text-xs font-bold">홈페이지</div>
                            </div>
                        </div>

                    </div>

                    {/* Configuration List Area */}
                    <div className="flex-1 bg-white border border-gray-100 shadow-xl rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center border-b pb-4">구성 내역</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="font-bold text-[#1A3B66] mb-2">#1 Client</p>
                                <ul className="text-sm list-disc pl-5 space-y-1 text-gray-600">
                                    <li>고객앱/하자앱은 하이브리드(WebView) 방식으로 반응형웹 제공</li>
                                    <li>관리자웹은 Thymeleaf SSR 방식</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-[#004B8D] mb-2">#2 WEB/WAS</p>
                                <ul className="text-sm list-disc pl-5 space-y-1 text-gray-600">
                                    <li>Nginx를 통한 리버스 프록시 구성</li>
                                    <li>Spring Boot 기반 API/Admin 서버</li>
                                    <li>Redis로 세션 및 캐시 관리</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-[#5C2E1F] mb-2">#3 APIs</p>
                                <ul className="text-sm list-disc pl-5 space-y-1 text-gray-600">
                                    <li>Spring Boot로 구현된 RESTful API</li>
                                    <li>회원/입주/하자/게시판/챗봇/푸시/파일 API로 구성</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-[#5C2E1F] mb-2">#4 DBMS</p>
                                <ul className="text-sm list-disc pl-5 space-y-1 text-gray-600">
                                    <li>MySQL(Oracle)</li>
                                    <li>회원/APP관리/게시판/설문 데이터 저장</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-[#0070C0] mb-2">#5 외부연동</p>
                                <ul className="text-sm list-disc pl-5 space-y-1 text-gray-600">
                                    <li>FCM(푸시), AI API(챗봇/이미지판독)</li>
                                    <li>통합정보시스템, 엘리프 홈페이지 연동</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer info */}
                <div className="text-[10px] text-gray-400 flex justify-between mt-4">
                    <span>※ 협의 내용에 따라 구성형상이 달라질 수 있습니다.</span>
                    <div className="flex gap-4">
                        <span>© 2026 ETRIBE INC. ALL RIGHTS RESERVED.</span>
                        <span className="font-bold text-black text-lg">76</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlideArchitecture;
