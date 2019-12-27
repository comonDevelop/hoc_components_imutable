import React, { Component } from 'react'
import imgSrc from '../../../public/timg.jpg'

class DomToImg extends Component {
    constructor(props){
        super(props);
        this.imgSrc=""
    }
    componentDidMount() {
        let _this = this;
        if(window.html2canvas){
            window.html2canvas(document.querySelector("#div1")).then(function(canvas) {
                var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
                // $(".imgDiv_img").attr("src",imgUri)
                console.log(imgUri, '------111-----')
                // console.log()
                _this.refs['box'].src=imgUri
                // _this.setState({img_src: imgUri})
            })
        }
    }
    render() {
        return (
            <div id="div1">
                <img src={imgSrc} style={{width: '100px'}}/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>123</p>
                                <p>123</p>
                                <p>123</p>
                            </td>
                            <td>22222222</td>
                        </tr>
                        <tr>
                            <td>
                                <span>● 帅哥名言 </span><br />
                                <span>1.我是最帅的；</span><br />
                                <span>2.我是最帅的；</span><br />
                                <span>3.我是最帅的；</span><br />
                                <span>4.我是最帅的；</span><br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                此处是动态生成的二维码
                            </td>
                        </tr>
                        <tr>
                            <td>啦啦啦</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                1111
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <span>来自好友我是大帅哥的分享</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/><br/><br/><br/>
                <img ref="box"/>
            </div>
        )
    }
}

export default DomToImg;