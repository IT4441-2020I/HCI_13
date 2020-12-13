import React, { Component } from 'react'
import './tiendo.css'
import { FaUserCheck, FaKeyboard } from 'react-icons/fa';
import { RiTeamFill } from "react-icons/ri";
import avatar from '../../static/images/avatar.svg'
import bieudohoc from '../../static/images/bieudohoc.svg'

export default class TienDo extends Component {
    render() {
        return (
            <div>
                <div className='tiendo1'>
                    <table className="table table-borderless">
                        <tr>
                            <td rowspan="2">
                                <img src={avatar} style={{ width: 160, height: 160 }} />
                            </td>
                            <td>
                                <FaUserCheck color='#28A745' size='3em' />
                                <span className='text'>Thành viên từ: 01/11/2020</span>
                            </td>
                            <td>
                                <RiTeamFill color='#0F5EF8' size='3em' />
                                <span className='text'>Tham gia 1 cuộc thi</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FaKeyboard color='#FF0000' size='3em' />
                                <span className='text'>Độ chính xác trung bình: 56%</span>
                            </td>
                            <td>
                                <FaKeyboard color='#FDD825' size='3em' />
                                <span className='text'>Tốc độ gõ trung bình: 31 WPM</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='tiendo2'>
                    <div className='leftTd'>
                        <img src={bieudohoc} style={{marginTop: 69}}/>
                    </div>
                    <div className='rightTd'><br/>
                        <h3>Bài học đã hoàn thành</h3>
                        <div className='tienDo'>
                            Giới thiệu bàn phím gõ tốc ký<br />
                            <div className='thanhtiendo00'>
                                <div className='thanhtiendo1'>
                                </div>
                            </div>
                            <span className='soTD'> 3/3</span>
                        </div>
                        <div className='tienDo'>
                            Quy tắc gõ âm đầu<br />
                            <div className='thanhtiendo00'>
                                <div className='thanhtiendo2'>
                                </div>
                            </div>
                            <span className='soTD'> 3/4</span>
                        </div>
                        <div className='tienDo'>
                            Quy tắc gõ âm chính không có âm đệm<br />
                            <div className='thanhtiendo00'>
                                <div className='thanhtiendo1'>
                                </div>
                            </div>
                            <span className='soTD'> 3/3</span>
                        </div>
                        <div className='tienDo'>
                            Quy tắc gõ âm chính có âm đệm<br />
                            <div className='thanhtiendo00'>
                                <div className='thanhtiendo3'>
                                </div>
                            </div>
                            <span className='soTD'> 1/2</span>
                        </div>
                        <div className='tienDo'>
                            Quy tắc gõ dấu thanh<br />
                            <div className='thanhtiendo00'>
                                <div className='thanhtiendo4'>
                                </div>
                            </div>
                            <span className='soTD'> 0/2</span>
                        </div>
                        <div className='tienDo'>
                            Quy tắc gõ âm cuối<br />
                            <div className='thanhtiendo00'>
                                <div className='thanhtiendo4'>
                                </div>
                            </div>
                            <span className='soTD'> 0/4</span>
                        </div>
                        <div className='tienDo'>
                            Số quy tắc đã học<br />
                            <div className='thanhtiendo00'>
                                <div className='thanhtiendo3'>
                                </div>
                            </div>
                            <span className='soTD'> 100/213</span>
                        </div>                      
                    </div>
                </div>

            </div>
        )
    }
}
