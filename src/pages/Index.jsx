import React from 'react'
import './styled.css'
import AvatarTomas from '../assets/images/tomas.jpeg'
import CircleImage from '../assets/images/Ellipse 434.svg'
import ArrowIcon from '../assets/images/icon1.svg'
import Icon2 from '../assets/images/icon2.svg'
import Icon3 from '../assets/images/icon3.svg'

import { SiLinkedin } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { TfiEmail  } from 'react-icons/tfi';

function Home() {
    return (
        <>
            <div className="fullContainer">
                <div className="nav">
                    <h1>Tomás ()</h1>
                </div>
                <div className="mainContainer">
                    <div className="cardContainer">
                        <div className="leftInfos">
                            <div className="CardBackground">
                                <img src={CircleImage} alt="" />
                            </div>
                            <div className="avatarBackground">
                                <img src={AvatarTomas} alt="" />
                            </div>
                            <div className="contacts">
                                
                            </div>

                        </div>
                    </div>
                    <div className="rightInfos">
                            {/* <span>@tomasoliveira7</span>
                            <span>(27) 99524-2075</span>
                            <span>tomaswm@hotmail.com</span> */}
                            <h1>Tomás Wanderley Miranda de Oliveira</h1>
                            <div className="docInfos">
                                <i>
                                    <p>
                                        <img src={ArrowIcon} alt="" />
                                        22 anos
                                    </p>
                                </i>
                                <i>
                                    <p>
                                        <img src={Icon2} alt="" />
                                        Análista de cyber-segurança na ISH
                                    </p>
                                </i>
                                <i>
                                    <p>
                                        <img src={Icon3} alt="" />
                                        Vitória - ES
                                    </p>
                                </i>
                            </div>
                    </div>
                </div>
                <div className="bottomInfos">
                    <div className="Goals">
                        <h1>OBJETIVOS</h1>
                        <p>Estágio na área de engenharia, introdução ao mercado de trabalho e crescimento pessoal.</p>
                    </div>
                    <div className="AcademyInf">
                        <h1>FORMAÇÃO ACADÊMICA</h1>
                        <p>Ensino Médio Completo – Centro Educacional Charles Darwin de Jardim da Penha (2014 - 2015 - 2016).</p>
                        <p>Graduação em Engenharia da Computação na FAESA - Atualmente cursando o 8º período (noturno). Previsão de Término: 2022/2</p>
                    </div>
                    <div className="languages">
                        <h1>IDIOMAS</h1>
                        <p>Inglês Avançado</p>
                    </div>
                    <div className="contacts">
                        <h1>Contatos</h1>
                            <i><SiLinkedin size='2em'/></i>
                            <p>@tomasoliveira7</p>
                            <i><FaWhatsapp size='2em'/></i>
                            <p>(27) 99524-2075</p> 
                            <i><TfiEmail size='2em'/></i>
                            <p>tomaswm@hotmail.com</p>
                    </div>
                    <div className="certificates">
                        <h1>Certificados</h1>
                        <p>CompaTIA A+</p>
                        <p>CompTIA Linux+</p>
                        <p>CompTIA Security+</p>
                        <p>CompTIA Newtwork+</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export { Home }