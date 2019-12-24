import React from 'react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    componentDidMount() {
        // document.getElementById('FileUpload').setAttribute('capture', 'user')
    }

    onChange = (files, type, index) => {
        console.log(files, '------files------')
        console.log(files, '------type------')
        console.log(files, '------index------')
        // console.log(files)
        // const _this = this;
        // let size;
        // if (type === 'add') {
        //     size = files[0].file.size;
        //     console.log(size / 1024)
        //     if (size / 1024 / 1024 > 5) {
        //         console.log('视频超过5M，请重新拍摄')
        //         // Toast.fail('视频超过5M，请重新拍摄')
        //     } else {
        //         // this.setState({
        //         //     fileName: files[0].url.split(',')[1],
        //         //     type: files[0].url.split(',')[0].split(':')[1].split(';')[0],
        //         //     //fileName: files[0].file
        //         // }, () => {
        //         //     this.props.history.replace({
        //         //         pathname: './RecordVideoSucess'
        //         //     })
        //         //     console.log(this.state.type)
        //         // })
        //     }
        // } else {

        // }
    }

    handleChange = (file) => {
        console.log(file);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result, '---------reader-----------')
        }

        // const size = e.target.files[0].size;
        // //录完视频拍摄
        // console.log(size)
        // var reader = new FileReader();
        // reader.onload = (function (file) {
        //     return function (e) {
        //         console.info(this.result); //这个就是base64的数据了
        //         const file = this.result.split(',')[1]
        //         console.log(file)
        //         const Da = {
        //             "txcode": '3513150',
        //             "upload_file_base64": file,
        //             "branch_id": "90001",
        //         }
        //         console.log(Da)
        //         request(Da).then(function (data) {
        //             console.log(data)
        //             const STATUS = data.SYS_HEAD.RET_STATUS;
        //             const errorMes = data.SYS_HEAD.RET[0].RET_MSG;
        //             if (STATUS == 'S') {
        //                 document.getElementById('lottie').style.display = 'none';
        //                 sessionStorage.video_nas_path = data.BODY.video_nas_path;
        //                 _this.props.history.replace({
        //                     pathname: './faceProcess'
        //                 })
        //             } else {
        //                 Toast.fail(errorMes)
        //                 document.getElementById('lottie').style.display = 'none';
        //             }
        //         }).catch(function (err) { })
        //     };
        // })(e.target.files[0]);
        // reader.readAsDataURL(e.target.files[0]); 
    }

    render() {
        // const { files } = this.state;
        return (
            <div>
                <header>这是摄像头调取</header>
                <input  
                    type="file"
                    accept="video/*"
                    id="FileUpload"
                    style={{border: '1px splid #000' }}
                    onChange={(e) => this.handleChange(e.target.files[0])}
                />
            </div>
        );
    }
}

export default Video;