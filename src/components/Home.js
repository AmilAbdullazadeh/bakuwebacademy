import React from 'react';
import {NavLink} from "react-router-dom";
import card1 from '../assets/comp.jpg';
import card2 from '../assets/mobile.jpg';


export default function Home(props) {
    return (
        <main className="container-fluid main-home">
            <div className="bwa-title col-12 col-md-6">
                <h3 className="header3-main">
                    Baku Web Academy müasir texnologiya sistemlərinin tələbini nəzərə alaraq proqramlaşdırmanı öyrənmək
                    istəyənlərə, tam praktiki yönümlü təhsil alaraq iş mühitinə hazırlaşdırır.
                </h3>
            </div>
            <div className="cards-main">
                <div className="row">
                    <div className="cols col-md-6 col-12">
                        <div
                            className="cards-img"
                            style={{
                                backgroundImage: `url(${card1})`
                            }}
                        ></div>
                    </div>
                    <div className="cols col-md-6 col-12">
                        <div className="box-info">
                            <h1 className="box-title">Front-end <br/> Proqramlaşdırma</h1>
                            <p className="box-content">Saytların dizayn və dinamik hissəsinin kodlanması</p>
                            <div className="box-short-info"><strong>Müddət:</strong> <span>6 ay</span></div>
                            <div className="box-short-info"><strong>Layhə sayısı:</strong> <span>7 real layihə</span>
                            </div>
                            <div className="box-short-info"><strong>Ödəniş (aylıq):</strong> <span>200 AZN</span></div>
                            <a className="box-pdf" href="" download>Keçirlən dərslərin PDF-ni yükləmək üçün buraya klik
                                edin</a>
                            <NavLink
                                className="box-register"
                                aria-current="page"
                                rel="noreferrer"
                                to="/contact"
                                exact
                            >
                                Qeydiyyatdan keç
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="cols col-md-6 col-12">
                        <div className="box-info">
                            <h1 className="box-title">Back-end <br/> Proqramlaşdırma</h1>
                            <p className="box-content">Saytların funksiyonallıq hissəsinin kodlanması</p>
                            <div className="box-short-info"><strong>Müddət:</strong> <span>3 ay</span></div>
                            <div className="box-short-info"><strong>Layhə sayısı:</strong> <span>3 real layihə</span>
                            </div>
                            <div className="box-short-info"><strong>Ödəniş (aylıq):</strong> <span>250 AZN</span></div>
                            <a className="box-pdf" href="" download>Keçirlən dərslərin PDF-ni yükləmək üçün buraya klik
                                edin</a>
                            <NavLink
                                className="box-register"
                                aria-current="page"
                                rel="noreferrer"
                                to="/contact"
                                exact
                            >
                                Qeydiyyatdan keç
                            </NavLink>
                        </div>
                    </div>
                    <div className="cols col-md-6 col-12">
                        <div
                            className="cards-img"
                            style={{
                                backgroundImage: `url(${card2})`
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </main>
    )
}