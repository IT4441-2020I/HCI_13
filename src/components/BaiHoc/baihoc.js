import React, { Component } from 'react'
import './baihoc.css'

export default class BaiHoc extends Component {
    render() {
        return (
            <div>
                <table className="table table-borderless">
                    <tr>
                        <td colspan="3"><span className="title">Giới thiệu bàn phím gõ tốc ký</span></td>
                    </tr>
                    <tr>
                        <td>Bàn phím gõ tốc ký<br />Trật tự bàn phím gõ tốc ký</td>
                        <td>Cách đặt ngón tay trên bàn phím gõ tốc ký<br />Nguyên tắc gõ tốc ký</td>
                        <td>
                            <div className='thanhtiendo'>
                                Hoàn thành: 3/3<br />
                                <div className='thanhtiendo0'>
                                    <div className='thanhtiendo1'>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><span className="title">Quy tắc gõ âm đầu</span></td>
                    </tr>
                    <tr>
                        <td>Những âm có cùng cách phát âm với phím tốc ký <br />Những âm có cách phát âm giống nhau hoặc gần nhau </td>
                        <td>Những âm có dạng chữ viết gần giống nhau <br />Nhóm âm ngoại lệ</td>
                        <td>
                            <div className='thanhtiendo'>
                                Hoàn thành: 3/4<br />
                                <div className='thanhtiendo0'>
                                    <div className='thanhtiendo2'>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><span className="title">Quy tắc gõ âm chính không có âm đệm</span></td>
                    </tr>
                    <tr>
                        <td>Nhóm âm ngắn</td>
                        <td>Nhóm âm ngoại lệ</td>
                        <td>
                            <div className='thanhtiendo'>
                                Hoàn thành: 3/3<br />
                                <div className='thanhtiendo0'>
                                    <div className='thanhtiendo1'>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><span className="title">Quy tắc gõ âm chính có âm đệm</span></td>
                    </tr>
                    <tr>
                        <td>Những âm có cùng dạng chữ với phím tốc ký <br/>Nhóm âm ngoại lệ</td>
                        <td></td>
                        <td>
                            <div className='thanhtiendo'>
                                Hoàn thành: 1/2<br />
                                <div className='thanhtiendo0'>
                                    <div className='thanhtiendo3'>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><span className="title">Quy tắc gõ dấu thanh</span></td>
                    </tr>
                    <tr>
                        <td>Dấu thanh đường nét thẳng<br/>dấu thanh đường nét gây đổi hướng</td>
                        <td></td>
                        <td>
                            <div className='thanhtiendo'>
                                Hoàn thành: 0/2<br />
                                <div className='thanhtiendo0'>
                                    <div className='thanhtiendo4'>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><span className="title">Quy tắc gõ âm cuối</span></td>
                    </tr>
                    <tr>
                        <td>Những âm có cùng dạng chữ với phím tốc ký <br/>Những âm có cách phát âm gần nhau </td>
                        <td>Những âm có dạng chữ viết gần giống nhau <br/>Nhóm âm ngoại lệ</td>
                        <td>
                            <div className='thanhtiendo'>
                                Hoàn thành: 0/4<br />
                                <div className='thanhtiendo0'>
                                    <div className='thanhtiendo4'>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
