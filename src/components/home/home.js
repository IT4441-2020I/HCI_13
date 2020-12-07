import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='home1'>
                    <div className='right'>
                        <span className='tieude'>
                            "Tốc ký là một nghệ thuật,
                        </span><br />
                        <span className='tieude'>
                            và người gõ tốc ký là một “Ký sĩ”
                        </span><br /><br />
                        <Link to='' className='start' style={{ fontSize: 25, color: '#FFFFFF' }}>Bắt đầu ngay</Link>
                    </div>
                    <div className='left'>
                        <table class="phimtocky">
                            <tr>
                                <td><div className='key'>S</div></td>
                                <td><div className='key'>K</div></td>
                                <td><div className='key'>R</div></td>
                                <td><div className='key'>N</div></td>
                                <td><div className='key'>H</div></td>
                                <td><div className='key'>*</div></td>
                                <td><div className='key'>W</div></td>
                                <td><div className='key'>J</div></td>
                                <td><div className='key'>N</div></td>
                                <td><div className='key'>T</div></td>
                            </tr>
                            <tr>
                                <td><div className='key'>T</div></td>
                                <td><div className='key'>P</div></td>
                                <td><div className='key'>H</div></td>
                                <td><div className='key'>N</div></td>
                                <td><div className='key'>S</div></td>
                                <td><div className='key'>I</div></td>
                                <td><div className='key'>Y</div></td>
                                <td><div className='key'>J</div></td>
                                <td><div className='key'>G</div></td>
                                <td><div className='key'>K</div></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><div className='key'>U</div></td>
                                <td><div className='key'>O</div></td>
                                <td><div className='key'>E</div></td>
                                <td><div className='key'>A</div></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='home2'>
                    <span className='tieude1'>Lorem ipsum dolor sit amet</span><br/>
                    <span>Ultrices eget tortor bibendum fringilla a sit. Mauris in dignissim tristique tellus quis volutpat praesent. Praesent sed consectetur mauris lacus, tristique integer vivamus. Curabitur quis sed morbi blandit id. Fermentum venenatis eget integer consequat. Massa egestas feugiat quam risus elit id egestas. Lacinia eu scelerisque placerat amet magna est a. Feugiat aliquet sit egestas tristique nisl libero tortor. Proin dui faucibus non mattis curabitur pulvinar sed quis purus. Id cursus aliquam pretium vivamus enim, et nulla eget. Consequat dapibus proin ut non mauris arcu. Vitae, ultricies lacus ante in. Sit ipsum vitae lectus commodo sagittis.</span>
                </div>
                <div className='home3'>
                    <span className='tieude1'>Quis vitae, sit orci, gravida nisi, scelerisque</span><br/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant accumsan, risus, morbi massa. Placerat scelerisque enim, dolor a. Lectus sit faucibus egestas vestibulum maecenas varius massa. Adipiscing quam lectus quis hendrerit id id pellentesque lectus eu. Sit vestibulum viverra metus nibh donec tempus ridiculus porttitor nam. Purus eu posuere scelerisque in non sodales id nisl lectus. Mauris lacinia condimentum nam nunc eget. Euismod purus elit, orci eget vestibulum sit et, id suscipit. Etiam hendrerit turpis eu auctor viverra pulvinar tempus ut.</span>
                </div>
                <div className='home4'>
                    <span className='tieude1'>Consectetur at justo egestas diam mauris</span><br/>
                    <span>Aliquet volutpat arcu eu tortor, suspendisse dui feugiat. At cras magna sagittis, ullamcorper. Vel justo non bibendum tellus id vestibulum faucibus sapien. Nunc tristique purus nulla elementum. Vitae duis diam tincidunt at id. Purus malesuada pretium vestibulum nisl elit nunc velit. Mollis quisque a arcu, nisi non. Morbi lectus sit egestas sapien. Non amet, pharetra amet arcu, at. Lectus enim lacus sit scelerisque blandit. Eu ut tempor pulvinar scelerisque sed mattis ultrices. Ut eget nisl id id vel ipsum pulvinar congue integer. Suspendisse tellus imperdiet amet eget viverra nulla fringilla ultrices.</span>
                </div>
            </div>
        )
    }
}
