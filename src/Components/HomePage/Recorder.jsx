import React, { useState, useEffect } from 'react'
import RecordRTC, { StereoAudioRecorder } from 'recordrtc'
import Funbaby from '../../assets/1371463.png'
import { MDBBtn, MDBIcon, MDBAnimation } from "mdbreact";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../Style/Recorder.css'
import { config } from '../../config/config'
const Recorder = (props) => {
    const { mail } = props
    const [rec, setRec] = useState(false);
    const [reason, setReason] = useState(null);
    const [per, setPercent] = useState(0);
    const reset = () => {
        setReason(null)
    }
    let recorder

    let realtym
    useEffect(() => {
        console.log(mail)
        if (mail)
            realtym = setInterval(startRecording, 10000)
        else {
            clearInterval(realtym)
            console.log("cleared")
        }
    }, [mail])

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true
        }).then(async (stream) => {
            recorder = RecordRTC(stream, {
                type: 'audio',
                recorderType: StereoAudioRecorder,
                sampleRate: 8000,
                numberOfAudioChannels: 1,
            });
            recorder.startRecording();
            setRec(true)
            setTimeout(() => stopRecording(), 7000)
        });
    }

    const stopRecording = () => {
        recorder.stopRecording(() => {
            let blob = recorder.getBlob();
            fetch(`${config.baseUrl}/predict`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    'name': JSON.parse(localStorage.info).name,
                    'email': JSON.parse(localStorage.info).email,
                    'mail': mail
                },
                body: blob
            }).then(res => res.json()).then(data => {
                console.log("response", data)
                setRec(false)
                if (data.res !== "nan") {
                    setReason(data.res)
                    let tempper = Math.max(...data.result.substring(1, data.result.length - 1).split('0.'))
                    tempper = tempper + ""
                    setPercent(tempper.substring(0, 2))
                    console.log("percentage", data.result, "max")
                }
                else {
                    setReason("TOO Noisy !!!")
                }
            }).catch(err => {
                console.log(err)
                setRec(false)
                setReason(null)
            })
        });
    }
    return (
        <div className="baby-button">
            <img src={Funbaby} alt="" className="funbaby" />
            {
                (!reason) ? <>
                    <h3 className="h3-responsive ">A Baby Cry Predictor that serves in foretelling the understanding of your Baby's Cry</h3>
                    <div>
                        {(!rec) ? <MDBBtn gradient="blue" className="btn-predict" onClick={() => startRecording()}>Predict</MDBBtn> :
                            <MDBBtn gradient="blue" className="btn-predict">
                                <div className="spinner-border text-primary loader" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </MDBBtn>
                        }
                    </div></> : <div>
                        <h1>{reason}</h1>
                        {(reason !== "TOO Noisy !!!") ?
                            < div className="bar">
                                <MDBAnimation type="fadeInRight" delay=".3s">
                                    <CircularProgressbar value={per} text={`${per}%`}
                                        circleRatio={0.75}  /* Make the circle only 0.75 of the full diameter */
                                        styles={{
                                            trail: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-135deg)',
                                                transformOrigin: 'center center',
                                            },
                                            path: {
                                                strokeLinecap: 'butt',
                                                transform: 'rotate(-135deg)',
                                                transformOrigin: 'center center',
                                            },
                                        }}
                                    />
                                </MDBAnimation>
                            </div>
                            : null}
                        <MDBBtn gradient="blue" className="btn-predict" onClick={() => reset()}><MDBIcon icon="undo" /></MDBBtn>
                    </div>
            }
        </div >
    )
}
export default Recorder;